<template lang="pug">
.contenedor
  .columns.is-fluid.back.is-mobile
    .column.is-3
      img.logo(src="static/img/logo.png")
    .column.is-9.j
      h1.h1.title {{text}}
  .c2
    .columns.is-fluid.pad.c
      .column
        h2.h3 Favor indicar en que línea de negocio o actividad presentan necesidad de nuevos productos/ que consideran hay mercado potencial para crecer 
        .contact
          .columns
            .column
              .campo
                .field
                  .control
                    textarea.textarea(placeholder="Textarea")
    .send('v-on:click'="Next" :data-id="id") SIGUIENTE
    Dots(:Active="4")
</template>

<script>
import StarRating from 'vue-star-rating'
import Dots from '@/components/Dots/Dots'
export default {
  name: 'panel5',
  components: {StarRating,Dots},
  props: ['Id','Text'],
  data () {
    return {
      id: this.Id,
      text: this.Text
    }
  },
  methods: {
    Next(e){
      this.$emit('next')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@function em($pixels) {
  @return #{$pixels/16px}em;
}

.textarea{
  margin-top: 1em;
  background: transparent;
  color: #ffffff;
}

.logo{
  max-height: 100px;
}

.title{
  margin: 0px!important;
}

svg{
  stroke: white!important;
}

.l{
  font-size: em(20px);
  letter-spacing: -0px;
  text-align: left;
  color: #ffffff;
  //color: #eeeeee;
}

.j{
  display: flex;
  justify-content: center;
  flex-direction: column
}

.h1{
  font-family: Helvetica;
  //font-size: 26px;
  font-weight: bold;
  letter-spacing: -0px;
  text-align: center;
  color: #6d6d6d;
  margin-bottom: 1em;
}

.h3{
  font-family: Helvetica;
  font-size: em(26px);
  font-weight: bold;
  letter-spacing: -0px;
  color: #ffffff;
  text-align: center;
  padding-top: 2em;
}

.p2{
  font-size: em(15px);
  line-height: 1.73;
  letter-spacing: -0px;
  color: #ffffff;
}

.contenedor{
  color: #ffffff;
  background-color: #b1cca0;
  height: 100vh;
}

.back{
  background-color: white;
  width: 100%;
  top: 1%;
  left: 12px;
  padding: 0px 7%;
  margin: 0;
}


.center{
  text-align: center;
}

.c{
  padding: 0px 5%;
}

$blanco: #ffffff;
$morado: #3e2ab2;

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #dddddd;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #dddddd;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #dddddd;
}
:-moz-placeholder { /* Firefox 18- */
  color: #dddddd;
}

.input{
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #cccccc;
  color: $blanco;
  
  &:focus{
    border-color: #335978;
  }
}

.label{
  font-size: em(20px);
  letter-spacing: -0px;
  color: $blanco;
  font-weight: 100;
}

.control{ margin-bottom: 2em ;}

.field{ margin-bottom: 1em ;}

.contact{
  //font-family: 'hiramaru';
  font-size: .9em;
}

.form{
  padding: 2em 1.4em;
}

.h2{
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: -0px;
  color: #313131;
  margin-bottom: 1em;
  &>strong{
    color: $morado;
  }
}

.send{
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: -0px;
  color: $blanco;
  padding: 0px 3em;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  border-radius: 9px;
  border: solid 3px #ffffff;
  margin-bottom: 50px;
}



@media (max-width:1000px){
  .c{
    width: 100%;
  }

  .h3{
    font-size: 1em;
    text-align: center;
  }

  .label{ display: none; }
  .contenedor{ height: initial!important;}
  .field{ padding-left: 1em; }
}

</style>
