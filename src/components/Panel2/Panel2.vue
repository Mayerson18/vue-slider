<template lang="pug">
.contenedor
  .columns.is-fluid.back.is-mobile
    .column.is-3
      img.logo(src="static/img/logo.png")
    .column.is-9.j
      h1.h1 {{text}}
  .columns.is-fluid.pad.c
    .column.j
      h2.h3 Que es lo que  busca de un Intermediario de Reaseguro?
      p.p2 marque en orden de importancia del 1 al 5
    .column.j
      .contact
        .campo(v-for="item in items")
          label.l {{item.text}}
          star-rating(inactive-color="#DBDBDB" active-color="#ffffff" border-color="#ffffff" :star-size="20")
  .send('v-on:click'="Next" :data-id="id") SIGUIENTE
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'panel2',
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
    padding: 0px 1em;
    padding-top: 115px;
  }
  .send{ margin: 0px 1em; }
  .h3{ text-align: center; font-size: 1em; }
  .l{ font-size: 1em!important; }
  .campo{ display: flex; }
}

</style>
