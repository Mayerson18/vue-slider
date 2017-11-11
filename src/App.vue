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
.c2{
  display: -webkit-box; 
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex; 
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
}

.c{ max-width: 1200px; }

input{
  -moz-box-shadow:    initial!important;
  -webkit-box-shadow: initial!important;
  box-shadow:         initial!important;
  &:hover{
    border-color: #ffffff!important;
  }
}

textarea{
  -moz-box-shadow:    initial!important;
  -webkit-box-shadow: initial!important;
  box-shadow:         initial!important;
  &:hover{
    border-color: #ffffff!important;
  }
}

.slick-dots{
  display: none!important;
}
/*
@font-face {
  font-family: "hiramaru";
  src: url('../static/fonts/copyfonts.com_hiramarupro-w4-opentype.otf') format('otf');
  src: local('../static/fonts/copyfonts.com_hiramarupro-w4-opentype');
  src: url('../static/fonts/copyfonts.com_hiramarupro-w4-opentype.otf') format('opentype'); 
  font-weight: normal;
  font-style: normal;
}*/

.h1{
  font-family: Helvetica;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0px;
  text-align: center;
  color: #6d6d6d;
  margin-bottom: 1em;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media (max-width:1000px){
  .h1{
    font-size: 1em;
  }
}
</style>
