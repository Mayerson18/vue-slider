<template>
    <div id="app">
        <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
        <div>
            <p>Speed: x{{animationSpeed}}</p>
            <input type="range" value="1" min="0" max="3" step="0.5"
                   v-on:change="onSpeedChange" v-model="animationSpeed">
        </div>
        <button v-on:click="stop">stop</button>
        <button v-on:click="pause">pause</button>
        <button v-on:click="play">play</button>
    </div>
</template>

<script>
  import Lottie from 'vue-lottie/src/lottie.vue';
  import * as animationData from '@/assets/check.json';
  export default {
    name: 'test',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },

      stop: function () {
        this.anim.stop();
      },

      play: function () {
        this.anim.play();
      },

      pause: function () {
        this.anim.pause();
      },

      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@function em($pixels) {
  @return #{$pixels/16px}em;
}

$blanco: #ffffff;
$morado: #3e2ab2;


@media (max-width:1300px){
}

</style>
