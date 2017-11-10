<template lang="pug">
  .dots
    .dot(v-for="(item,index) in items" 'v-on:click'="Click" :class="{active: index < active}" :data-id="item.id")
      .text {{item.text}}

      
</template>

<script>
export default {
  name: 'dots',
  props: ['Items'],
  data () {
    return {
      items: this.Items,
      active: 0
    }
  },
  methods: {
    Click(e){
      const id = parseInt(e.path[0].dataset.id)+1
      this.active = id
      this.$emit('DotScene',e)
    }
  }
}
</script>
<style lang="scss" scoped>
.dot{
  width: 36px;
  height: 36px;
  border: solid 1px #ffffff;
}

.active{
  background-color: $blanco;
}

@media (max-width:1000px){
  .h1{ display: none; }
}
</style>
