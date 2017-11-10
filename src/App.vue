<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

html{
  overflow:hidden!important;
}

@font-face {
  font-family: "hiramaru";
  src: url('../static/fonts/copyfonts.com_hiramarupro-w4-opentype.otf') format('otf');
  src: local('../static/fonts/copyfonts.com_hiramarupro-w4-opentype');
  src: url('../static/fonts/copyfonts.com_hiramarupro-w4-opentype.otf') format('opentype'); 
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
}

#app {
  font-family: 'hiramaru','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media (max-width:1000px){
   .h1{
    margin-bottom: 0px;
    font-size: 1em!important;
  }
}
</style>
