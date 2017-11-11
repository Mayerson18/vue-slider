<template lang="pug">
div
  slick(ref="slick" :options="slickOptions")
    Panel('v-on:next'="next" :Text="panel.text")
    Panel2('v-on:next'="next" :Text="panel.text")
    Panel3('v-on:next'="next" :Text="panel.text")
    Panel4('v-on:next'="next" :Text="panel.text")
    Panel5('v-on:next'="next" :Text="panel.text")
    Panel6('v-on:next'="next" :Text="panel.text")
    Panel7('v-on:next'="onComplete" :Text="panel.text")
  sweet-modal(icon='success' ref='msuccess') Gracias...
</template>

<script>
import Slick from 'vue-slick'
import Panel from '@/components/Panel/Panel'
import Panel2 from '@/components/Panel2/Panel2'
import Panel3 from '@/components/Panel3/Panel3'
import Panel4 from '@/components/Panel4/Panel4'
import Panel5 from '@/components/Panel5/Panel5'
import Panel6 from '@/components/Panel6/Panel6'
import Panel7 from '@/components/Panel7/Panel7'

export default {
  name: 'formulario',
  components: {Panel, Panel2 , Panel3, Panel4,Panel5,Panel6,Panel7, Slick },
  props: ['Item'],
  data () {
    return {
      panel: {text: 'CUESTIONARIO PARA DESARROLLAR PLAN ESTRATEGICO 2018'},
      item: this.Item,
      slickOptions: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots'
      },
    }
  },
  methods: {
    onComplete() {
      console.log(this.$refs.msuccess)
      console.log(this.$refs)
      this.$refs.msuccess.open()
    },
    next() {
      console.log(this.$refs)
      this.$refs.slick.next();
    },
    prev() {
        this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
  mounted(){
    /*document.getElementById('slick-slide-control00').innerHTML = ''
    document.getElementById('slick-slide-control01').innerHTML = ''
    document.getElementById('slick-slide-control02').innerHTML = ''
    var els = document.getElementsByClassName("slick-dots");

    for(var i=0; i<els.length; i++)
    {
        console.log(els[i]);
    }

    var node = document.createElement("div");                 // Create a <li> node
    var textnode = document.createTextNode("Inicio");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);   */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$blanco: #ffffff;
$verde: #00811e;
@media (max-width:500px){
  .contact{
    padding: 0px 1em;
  }
}
@media (max-width:1200px){

}

</style>
