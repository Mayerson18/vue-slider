<template lang="pug">
.contenedor
  .columns.is-fluid.back.is-mobile
    .column.is-3
      img.logo(src="static/img/logo.png")
    .column.is-9.j
      h1.h1.title {{text}}
  .c2
    .columns.is-fluid.pad.c
      .column.j
        h2.h3 Que es lo que  busca de un Intermediario de Reaseguro?
        p.p2 marque en orden de importancia del 1 al 5
      .column.j
        .contact
          .columns
            .column
              .campo
                label.l Respuesta rápida
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20" v-model="Panel.respuesta")
            .column
              .campo
                label.l Flexibilidad
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20" v-model="Panel.flexibilidad")
          .columns
            .column
              .campo
                label.l Especialidad
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20" v-model="Panel.especialidad")
            .column
              .campo
                label.l Multilíneas
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20" v-model="Panel.multilineas")
          .columns
            .column
              .campo
                label.l Proactividad, apoyo con información
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20" v-model="Panel.proactividad")
            .column
              .campo
                label.l Manejo de reclamos
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20"  v-model="Panel.manejo")
          .columns
            .column
              .campo
                label.l Consultoría
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20"  v-model="Panel.consultoria")
            .column
              .campo
                label.l Otros
                star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20"  v-model="Panel.otros")
    .send('v-on:click'="Next" :data-id="id") SIGUIENTE
    Dots(:Active="1")
</template>

<script>
import StarRating from 'vue-star-rating'
import Dots from '@/components/Dots/Dots'
export default {
  name: 'panel2',
  components: {StarRating, Dots},
  props: ['Id','Text','Panel'],
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


.logo{
  max-height: 100px;
}

.title{
  margin: 0px!important;
}

.pad{
  padding: 0px 5%;
}

svg{
  stroke: white!important;
}

.l{
  font-size: em(20px);
  letter-spacing: -0px;
  text-align: left;
  color: #ffffff;
}

.j{
  display: flex;
  justify-content: center;
  flex-direction: column
}

.h3{
  height: em(62px);
  font-family: Helvetica;
  font-size: 26px;
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
  background-color: #b1cca0;
  height: 100vh;
  
}

.back{
  background-color: white;
  width: 100%;
  margin: 0;
  top: 1%;
  left: 12px;
  padding: 0px 7%;
}


.center{
  text-align: center;
}

.c{
  max-width: 1000px;
}

$blanco: #ffffff;
$morado: #3e2ab2;

.input{
  box-shadow: initial;
  border: 0;
  border-bottom: 1px solid #cccccc;
  &:focus{
    border-color: #335978;
  }
}

.label{
  font-size: em(20px);
  letter-spacing: -0px;
  color: #6d6d6d;
}

.control{ margin-bottom: 2em ;}

.field{ margin-bottom: 1em ;}

.contact{
  //font-family: 'hiramaru';
  padding-top: 1em;
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
  margin-left: 5%;
  margin-right: 5%;
}

.campo{
  padding-bottom: 1em;
}

@media (max-width:1000px){
  .c{     
    padding: 0px 1em;
  }
  .send{ margin-left: 1em; margin-right: 1em;}
  .h3{ text-align: center; font-size: 1em; }
  .l{ font-size: 1em!important; }
  .campo{ display: flex; }
  .contenedor{ height: initial!important;}
}

</style>
