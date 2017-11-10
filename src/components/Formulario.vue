<template lang="pug">
  .formulario
    .pinContainer
      section.panel(v-for="(p,index) in panels" :class="`panel-${index}`" :id="p.id" :style="{backgroundColor: p.bgColor}")
        .if(v-if="p.id === 0") 
          h1.h1 {{p.title}}
          Panel('v-on:NextScene'="nextScene" :Id="p.id")
        .if(v-if="p.id === 1")
          Panel2('v-on:NextScene'="nextScene" :Id="p.id" :Text="p.title")
        .if(v-if="p.id === 2")
          Panel3('v-on:NextScene'="nextScene" :Id="p.id" :Text="p.title")
        .if(v-if="p.id === 3")
          Panel4('v-on:NextScene'="nextScene" :Id="p.id" :Text="p.title")
      Dots('v-on:DotScene'="dotScene" :Panels="panels" :Items="[]")
</template>

<script>
import Panel from '@/components/Panel/Panel'
import Panel2 from '@/components/Panel2/Panel2'
import Panel3 from '@/components/Panel3/Panel3'
import Panel4 from '@/components/Panel4/Panel4'
import Dots from '@/components/Dots/Dots'
export default {
  name: 'formulario',
  components: {Panel,Panel2,Panel3,Panel4,Dots},
  mounted () {
    this.$nextTick(this.pinContainerScene)
  },
  data () {
    return {
      panels:[
        {
          title: 'CUESTIONARIO PARA DESARROLLAR PLAN ESTRATEGICO 2018',
          bgColor: '#ffffff',
          id: 0,
          text: 'Inicio'
        },
        {
          title: 'CUESTIONARIO PARA DESARROLLAR PLAN ESTRATEGICO 2018',
          bgColor: '#b1cca0',
          id: 1,
          text: 'Q1'
        },
        {
          title: 'CUESTIONARIO PARA DESARROLLAR PLAN ESTRATEGICO 2018',
          bgColor: '#8bb495',
          id: 2,
          text: 'Q2'
        },
        {
          title: 'panel 4',
          bgColor: '#66bb6a',
          id: 3,
          text: 'Q3'
        }
      ],
      pos: 0
    }
  },
  methods: {
    dotScene (e) {
      const id = parseInt(e.path[0].dataset.id)+1
    },
    nextScene (e) {
      const id = parseInt(e.path[0].dataset.id)+1
      const w = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
      const controller = new this.$scrollmagic.Controller({})
      const length = this.panels.length
      const h = (w*length)/(length-1)
      const x = h/120
      const scrollPos = controller.scrollPos()
      const anchor = h*id
      let pos = scrollPos
      let tempo = setInterval(frame,1)
      function frame() {
        if (pos >= anchor) {
          clearInterval(tempo)
        } else {
          pos+= x;
          controller.scrollTo(pos);
        }
      }
    },
    pinContainerScene () {
      const Length = this.panels.length

      // Create a new Timeline (equivalent to new TimelineMax())
      const tl = new this.$gsap.TimelineMax()

      for (var i = 0; i < Length; i++) { // For each panel in this.panels array:
        let animFrom, animOutLetters;
        switch (i) { // Set animFrom value, depending on the index i of the item
          case 0:
            break; // First panel is already visible on page load, so no animation
          case 1:
            animFrom = {x: '-100%'} // Second panel comes from the left
            break;
          case 2:
            animFrom = {x: '-100%'} // Third one comes from the right
            break;
          case 3:
            animFrom = {x: '-100%'} // Finally, the last one comes from the top
            break;
        }
        if (i !== 0) { // For each panel except the one whom index is 0, create the tween and add it to the tl timeline.
          // (To use GSAP easings, just prefix their name with this.$gsap)
          tl.fromTo(`section.panel-${i}`, 1.5, animFrom, {x: '0%', y: '0%', ease: this.$gsap.Linear.easeNone})
        }
      }


      // create scene and set its params
      const controller = new this.$scrollmagic.Controller()
      
      const scene = new this.$scrollmagic.Scene({
        triggerElement: '.pinContainer',
        triggerHook: 'onLeave',
        duration: `${Length * 100}%`
      })
      //.setClassToggle('.pinContainer')
      .setPin('.pinContainer')
      .setTween(tl)
      .addTo(controller)

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)
    }
  },
  destroyed () {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit('destroy')
  }
}
</script>
<style lang="scss" scoped>
.h1{
  font-family: Helvetica;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0px;
  text-align: center;
  color: #6d6d6d;
  margin-bottom: 1em;
}

  .boton{
    position: relative;
    cursor: pointer;
  }

  body {
    margin: 0;
    overflow:hidden;
  }
  .pinContainer {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  .panel {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

@media (max-width:1000px){
  .h1{ display: none; }
}
</style>
