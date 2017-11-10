<template lang="pug">
.contenedor
  .columns.is-fluid.back.is-mobile
    .column.is-3
      img.logo(src="static/img/logo.png")
    .column.is-9.j
      h1.h1 {{text}}
  .columns.is-fluid.pad.c
    .column
      h2.h3 Que es lo que  busca de un Intermediario de Reaseguro?
      .contact
        form.form
          .field
            label.label Respuesta rapida
            .control
              input.input(placeholder="Respuesta Rapida")
          .field
            label.label Empresa
            .control
              input.input(placeholder="Empresa")
          .field
            label.label Cargo
            .control
              input.input(placeholder="Cargo")
          .field
            label.label Email
            .control
              input.input(type="email" placeholder="Email")
          .send('v-on:click'="Next" :data-id="id") SIGUIENTE
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'panel3',
  components: {StarRating},
  props: ['Id','Text'],
  data () {
    return {
      id: this.Id,
      text: this.Text,
      items: [
        {text: 'Respuesta rápida'},
        {text: 'Flexibilidad'},
        {text: 'Especialidad'},
        {text: 'Multilíneas'},
        {text: 'Proactividad, apoyo con información'},
        {text: 'Manejo de reclamos'},
        {text: 'Consultoría'}
      ]
    }
  },
  methods: {
    Next(e){
      console.log('wtfsdws')
      this.$emit('NextScene',e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@function em($pixels) {
  @return #{$pixels/16px}em;
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
  font-size: 26px;
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
}

.p2{
  font-size: em(15px);
  line-height: 1.73;
  letter-spacing: -0px;
  color: #ffffff;
}

.contenedor{
  color: #ffffff;
}

.back{
  background-color: white;
  width: 100%;
  position: absolute;
  top: 1%;
  left: 12px;
  padding: 0px 7%;
}


.center{
  text-align: center;
}

.c{
  max-width: 1000px;
  padding-top:200px;
  width: 1000px;
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
  background-color: #8bb495;
  box-shadow: initial;
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
  font-family: 'hiramaru';
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
}



@media (max-width:1000px){
  .c{
    padding-top: 115px;
    width: 100%;
  }

  .h3{
    font-size: 1em;
    text-align: center;
  }

  .label{ display: none; }
  .field{ padding-left: 1em; }
}

</style>
