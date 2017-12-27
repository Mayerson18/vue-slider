<template lang="pug">
.pad
  h1.h1 {{text}}
  .columns
    .column.flex-center
      .center
        img.logo(src="static/img/logo.png")
        p.p Was founded on the solid terms of Assurance, Transparency, Integrity, and Service, by a team of reinsurance experts who made their names by delivering great service to the industry.
    .column.pt
      .contact
        form.form
          .field
            label.label Nombre
            .control
              input.input(placeholder="Tu nombre completo" v-model="Panel.name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'is-danger': !errors.has('name') }" name="name")
              span(v-show="!Panel.name && fields.name.dirty" class="help is-danger") El nombre es requerido
          .field
            label.label Empresa
            .control
              input.input(placeholder="Empresa" v-model="Panel.empresa" v-validate="'required|alpha_spaces'" name="empresa")
              span(v-show="!Panel.empresa && fields.empresa.dirty" class="help is-danger") La empresa es requerida.
          .field
            label.label Cargo
            .control
              input.input(placeholder="Cargo" v-model="Panel.cargo")
          .field
            label.label Email
            .control
              input.input(type="email" placeholder="Email" v-model="Panel.email" v-validate="'required|email'" name="email")
              span(v-show="errors.has('email') && fields.email.dirty" class="help is-danger") El email es requerido.
          .send('v-on:click'="Next" :data-id="id") Comenzar

</template>

<script>
export default {
  name: 'panel',
  props: ['Id','Text','Panel'],
  data () {
    return {
      id: this.Id,
      text: this.Text
    }
  },
  computed: {
    isFormDirty() {
      return this.Panel.email
    }
  },
  methods: {
    Next(e){
      if ( (!this.errors.has('email') && this.Panel.email) && (!this.errors.has('name') && this.Panel.name) && (!this.errors.has('empresa') && this.Panel.empresa )){
        this.$emit('next')
      }
      else{
        this.fields.email.dirty = true
        this.fields.name.dirty = true
        this.fields.empresa.dirty = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@function em($pixels) {
  @return #{$pixels/16px}em;
}

.pad{
  padding: 0px 5%;
}

.slick-slide img {
  display: initial;
}

.flex-center{
  display: flex;
    align-items: center;
}

.center{
  text-align: center;
}

.columns{
  max-width: 1000px;
}

$blanco: #ffffff;
$morado: #3e2ab2;

.p{
  font-size: em(15px);
  line-height: 1.73;
  letter-spacing: -0px;
  text-align: center;
  color: #6d6d6d;
  margin-top: 1em;
}

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
  background-color: $blanco;
  //font-family: 'hiramaru';
}

.form{ padding: 2em 1.4em; }

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
  background-color: #335978;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  
}


@media (max-width:1000px){
  .control{ margin: 0px;}
  .logo{ margin-top: 0px;}
  .label{ display: none;}
  p{ margin-top: 0px;}
  .pt{ padding-top: 0px; }
  
}

</style>
