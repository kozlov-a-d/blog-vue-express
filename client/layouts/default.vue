<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto);

  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1280px) {
      width: auto;
      margin: 0 40px;
    }
    @media (max-width: 980px) {
      margin: 0 20px;
    }
  }

  h1, h2, h3, h4 {
    font-family: Montserrat, sans-serif;
  }

  h1 {
    font-size: 31px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 19px;
  }

</style>

