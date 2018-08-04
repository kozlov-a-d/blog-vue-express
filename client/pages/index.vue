<template>
    <div class="container">
        <div>
            <h1 class="title">Experiment with Vue.js and express</h1>
            <Search @handleKeyword="setKeyword"/>
            <div class="blog-grid">
                <div v-for="blog in searchResultsBlogs" :key="blog._id">
                    <BlogPreview :blogdata="blog"/>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    import BlogPreview from "@/components/blogs/BlogPreview";
    import Search from '@/components/Search';
    import axios from 'axios';

    export default {
        components: {
            BlogPreview,
            Search
        },
        asyncData() {
            return axios.get(`http://localhost:1234/blogs/list`)
                .then((res) => {
                    return {
                        blogs: res.data,
                        searchString: ''
                    }
                })
                .catch((e) => {
                    error({ statusCode: 404, message: 'Страница не найдена' })
                });
        },
        computed: {
            searchResultsBlogs() {
                const keyword = this.searchString.toLowerCase();
                if (!keyword) return this.blogs;
                const splittedKeyword = keyword.split(" ").filter(word => word);
                let results = this.blogs.filter(blog => {
                    let text = [
                        blog.tags.join(' '),
                        blog.title.toLowerCase(),
                        blog.description.toLowerCase()
                    ].join(' ');
                    const matches = splittedKeyword.filter(keyword => text.includes(keyword));
                    if (matches.length === splittedKeyword.length) {
                        return true;
                    }

                    return false;
                });
                return results;
            }
        },
        methods: {
            setKeyword: function setKeyword(keyword) {
                this.searchString = keyword;
            },
        }
    }
</script>

<style lang="scss">


    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        display: block;
        font-weight: 400;
        font-size: 60px;
        color: #35495e;
        letter-spacing: 1px;
        text-align: center;
        padding: 60px 0 40px;
        line-height: 1.1;
        @media (max-width: 820px) {
            font-size: 40px;
            padding: 40px 0 30px;
        }
    }

    .blog-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        @media (max-width: 820px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }
</style>

