<template>
    <BlogFull :blogdata="blog"/>

</template>


<script>
    import MYBLOGS from '@/data/blogs.json';
    import BlogFull from "@/components/blogs/BlogFull";
    import axios from 'axios';

    function getBlogById(id, blogs) {
        const result = blogs.filter(blog => blog.id === id);
        return result[0];
    }

    export default {
        components: {
            BlogFull
        },
        asyncData({params}) {
            return  axios.get(`http://localhost:1234/blogs/${params.id}`)
                .then((res) => {
                    return {blog: res.data}
                })
                .catch((e) => {
                    error({statusCode: 404, message: 'Страница не найдена'})
                });
        }
    };
</script>


<style>

</style>
