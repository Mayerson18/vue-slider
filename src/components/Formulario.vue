<template lang="pug">
div
  slick(ref="slick" :options="slickOptions")
    Panel('v-on:next'="next" :Text="panel.text" :Panel="panel")
    Panel2('v-on:next'="next" :Text="panel.text" :Panel="panel2")
    Panel3('v-on:next'="next" :Text="panel.text" :Panel="panel3")
    Panel4('v-on:next'="next" :Text="panel.text" :Panel="panel4")
    Panel5('v-on:next'="next" :Text="panel.text" :Panel="panel5")
    Panel6('v-on:next'="next" :Text="panel.text" :Panel="panel6")
    Panel7('v-on:next'="onComplete" :Text="panel.text" :Panel="panel7")
  sweet-modal(icon='success' ref='msuccess') Gracias...
  sweet-modal(icon='error' ref='merror') Lo sentimos revise los campos...
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
import {db, firebaseApp} from '@/firebase/db.js'
let firebaseAPI = db.ref('users')

export default {
  name: 'formulario',
  components: {Panel, Panel2 , Panel3, Panel4,Panel5,Panel6,Panel7, Slick },
  props: ['Item'],
  firebase: {
    items: db.ref('items')
  },
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
      panel: {
        name: '',
        empresa: '',
        cargo: '',
        email: '',
      },
      panel2: {
        respuesta: 0,
        flexibilidad: 0,
        especialidad: 0,
        multilineas: 0,
        proactividad: 0,
        consultoria: 0,
        otros: 0,
      },
      panel3: {
        seminarios: 0,
        desarrollo: 0,
        talleres: 0,
        apoyo: 0,
        servicios: 0,
        otros2: 0,
      },
      panel4: {
        incendio: '',
        finanzas: '',
        ramos: '',
        vida: '',
        transporte: '',
        responsabilidad: '',
        financieros: '',
        aviacion: '',
        maritimo: '',
        flota: '',
        ramos2: '',
        otros3: '',
      },
      panel5: {
        textarea: '',
      },
      panel6: {
        broker: false,
        especialidad2: false,
        tamyname: false,
        tamano: false,
        suele: false,
        razon: '',
      },
      panel7: {
        textarea2: ''
      }
    }
  },
  methods: {
    addItem () {
      if(this.panel.name && this.panel.empresa && this.panel.email) {
          this.$firebaseRefs.items.push({
          name: this.panel.name,
          empresa: this.panel.empresa,
          cargo: this.panel.cargo,
          email: this.panel.email,
          respuesta: this.panel2.respuesta,
          flexibilidad: this.panel2.flexibilidad,
          especialidad: this.panel2.especialidad,
          multilineas: this.panel2.multilineas,
          proactividad: this.panel2.proactividad,
          consultoria: this.panel2.consultoria,
          otros: this.panel2.otros,
          seminarios: this.panel3.seminarios,
          desarrollo: this.panel3.desarrollo,
          talleres: this.panel3.talleres,
          apoyo: this.panel3.apoyo,
          servicios: this.panel3.servicios,
          otros2: this.panel3.otros2,
          incendio: this.panel4.incendio,
          finanzas: this.panel4.finanzas,
          ramos: this.panel4.ramos,
          vida: this.panel4.vida,
          transporte: this.panel4.transporte,
          responsabilidad: this.panel4.responsabilidad,
          financieros: this.panel4.financieros,
          aviacion: this.panel4.aviacion,
          maritimo: this.panel4.maritimo,
          flota: this.panel4.flota,
          ramos2: this.panel4.ramos2,
          otros3: this.panel4.otros3,
          textarea: this.panel5.textarea,
          broker: this.panel6.broker,
          especialidad2: this.panel6.especialidad2,
          tamyname: this.panel6.tamyname,
          tamano: this.panel6.tamano,
          suele: this.panel6.suele,
          razon: this.panel6.razon,
          textarea2: this.panel7.textarea2
        })
        return true
      }
      else{
        return false
      }
    },
    onComplete() {
      const booleano = this.addItem()
      if (booleano){
        this.$refs.msuccess.open()
      }else{
        this.$refs.merror.open()
      }
    },
    next() {
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
