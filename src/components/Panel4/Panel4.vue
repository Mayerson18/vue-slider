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
        h2.h3 En que líneas de negocio está interesado incrementar su cartera  (explique el ramo especifico de interés) 
        .contact
          .columns
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Incendio")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Finanzas")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Ramos Tecnicos")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Vida Colectivo")
          .columns
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Transporte")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Responsabilidad Civil")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Financieros")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Aviación")
          .columns
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Marítimo")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Flota de Automóviles")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Ramos especiales")
            .column
              .campo
                .field
                  .control
                    input.input(placeholder="Otros")
    .send('v-on:click'="Next" :data-id="id") SIGUIENTE
    Dots(:Active="3")
</template>

<script>
import StarRating from 'vue-star-rating'
import Dots from '@/components/Dots/Dots'
export default {
  name: 'panel4',
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
  background-color: #335978;
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
  color: #dddddd!important;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #dddddd!important;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #dddddd!important;
}
:-moz-placeholder { /* Firefox 18- */
  color: #dddddd!important;
}

.input{
  background-color: transparent;
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
