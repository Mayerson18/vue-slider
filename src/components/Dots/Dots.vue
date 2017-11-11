<template lang="pug">
.cont
  .dots
    .dot(v-for="(item,index) in items" 'v-on:click'="Click(index)" :class="{active2: index === active}")
      .text {{item}}

</template>

<script>
export default {
  name: 'dots',
  props: ['Active'],
  data () {
    return {
      items: [
        'Inicio',
        'Q1',
        'Q2',
        'Q3',
        'Q4',
        'Q5',
        'Q6'
      ],
      active: this.Active
    }
  },
  methods: {
    Click(index){
      document.getElementById(`slick-slide-control0${index}`).click()
      window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="scss">

.dots{
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 1em 0px;
  &>.dot{
    margin-left: 1em;
    margin-bottom: 1em;
    width: 36px;
    height: 36px;
    border: solid 1px #ffffff;
    background: transparent;
    border-radius: 50%;
    &>.text{
      color: #ffffff;
      position: relative;
      top: 2.5em;
      text-align: center;
    }
  }
}

.active2{
  background-color: #ffffff!important;
}


@media (max-width:1000px){
  .h1{
    font-size: 1em;
  }
}

@media (max-width:400px){
  .dots{ 
    &>.dot{
      width: 31px!important;
      height: 31px!important;
    }
  }
}
</style>
