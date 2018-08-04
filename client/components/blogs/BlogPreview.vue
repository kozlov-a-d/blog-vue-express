<template>
    <div class="blog-preview">
        <nuxt-link :to="'/blogs/'+blog._id" class="blog-preview__thumb">
            <img :src="blog.thumb" :alt="blog.title" :title="blog.title">
        </nuxt-link>
        <div class="blog-preview__text">
            <nuxt-link :to="'/blogs/'+blog.id" class="blog-preview__title">{{blog.title}} </nuxt-link>
            <p class="blog-preview__description">{{blog.description}}</p>
            <p class="blog-preview__tags">
              <span v-for="tag in blog.tags" :key="tag">{{tag}}</span>
            </p>
            <p class="blog-preview__author" :style="'background-image: url(' + blog.author.picture + ')'">Author: {{blog.author.first}} {{blog.author.last}} | {{blog.date}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            blogdata: {
                type: Object
            },
        },
        data() {
            return {
                blog: this.blogdata
            }
        }
    };
</script>

<style lang="scss">
    .blog-preview {
        background: rgba(0, 0, 0, .05);
        &__thumb {
            display: block;
            width: 100%;
            height: 0;
            padding-bottom: 66%;
            position: relative;
            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__text {
            padding: 20px 15px 20px;
            text-align: left;
        }
        &__title {
            display: block;
            margin-bottom: 10px;
            font-size: 18px;
            color: #1a1a1a;
            text-decoration: none;
        }
        &__description {
            font-size: 14px;
            color: #2c2c2c;
        }
        &__author {
            margin-top: 10px;
            padding: 0 0 0 42px;
            background-position: left center;
            background-repeat: no-repeat;
            line-height: 32px;
            font-size: 13px;
            color: #2c2c2c;
        }
        &__tags {
          margin: 10px 0;
            span{
              display: inline-block;
              padding: 2px 5px;
              margin-right: 5px;
              background: #cccccc;
              font-size: 13px;
              color: #2c2c2c;
            }
        }
    }
</style>

