<template>
  <div class="blog-full">
    <div class="blog-full__hero">
      <img class="blog-full__picture" :src="blog.picture" :alt="blog.title" :title="blog.title">
      <h1 class="blog-full__title">{{blog.title}}</h1>
    </div>
    <div class="container">
      <div class="blog-full__text">
        <p>{{blog.fulltext}}</p>
        <p class="blog-full__author" :style="'background-image: url(' + blog.author.picture + ')'">Author: {{blog.author.first}} {{blog.author.last}} | {{blog.date}} </p>
      </div>
      <p>
        <nuxt-link to="/">GO BACK</nuxt-link>
      </p>
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
  .blog-full{
    padding-bottom: 50px;

    &__hero{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 380px;
      max-height: 100vh;
    }
    &__picture{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__title{
      position: relative;
      z-index: 10;
      max-width: 90%;

      font-family: Montserrat,sans-serif;
      display: block;
      font-weight: 400;
      font-size: 60px;
      color: #35495e;
      letter-spacing: 1px;
      text-align: center;
      line-height: 1.2;

      @media (max-width: 820px) {
        font-size: 40px;
      }
    }
    &__text{
      padding: 30px 0;
    }
    &__author {
      margin-top: 10px;
      padding: 0 0 0 42px;
      background-position: left center;
      background-repeat: no-repeat;
      line-height: 32px;
      font-size: 15px;
      color: #2c2c2c;
    }
  }
</style>

