<template>
  <div id="contactme">
    <v-container :class="screen2k ? 'd-flex flex-column': ''" :style="screen2k ? 'height: 90vh;' : ''">
      <v-row align="center" justify="center" wrap>
        <v-col cols="12" align="center" justify="center">
          <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1">Contáctame</p>
        </v-col>
        <p class="text-h6 text-sm-h5 text-md-h4 text-xl-h3">&boxh;&boxh;&boxh;&nbsp;<span class="green--text">Qué quieres saber</span>&nbsp;&boxh;&boxh;&boxh;</p>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <p class="text-h6 text-sm-h5 text-md-h4 text-xl-h3">Qué quieres saber</p>
          <p class="text-xl-h5">Puedes contactarme si tienes interés en conocer más a profundidad lo que hago y cómo lo hago. Además, si necesitas desarrollar una página web personal o para tu negocio podemos hacer un acuerdo para llevar el proyecto a buen puerto.</p>
          <v-row align="center">
            <v-col cols="2" class="text-center">
              <fa icon="user-circle" :size="screen2k ? '4x' : '3x'"/>
            </v-col>
            <v-col class="mt-2">
              <p class="text-h6 text-xl-h4 font-weight-bold ma-0">Nombre</p>
              <p class="text-xl-h5">Joan Sebastian Solano García</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="text-center">
              <fa icon="map-marker-alt" :size="screen2k ? '4x' : '3x'"/>
            </v-col>
            <v-col class="mt-2">
              <p class="text-h6 text-xl-h4 font-weight-bold ma-0">Dirección</p>
              <p class="text-xl-h5">Timaná, Huila, Colombia</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="text-center">
              <fa icon="envelope" :size="screen2k ? '4x' : '3x'"/>
            </v-col>
            <v-col>
              <p class="text-h6 text-xl-h4 font-weight-bold ma-0">Email</p>
              <a href="mailto:jntian-21@hotmail.com" class="green--text text-xl-h5">
                jntian-21@hotmail.com
              </a>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <p class="text-h6 text-sm-h5 text-md-h4 text-xl-h3">Mándame un mensaje</p>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="subject"
              :rules="subjectRules"
              label="Asunto"
              required
            ></v-text-field>
            <v-textarea
              :value="message"
              :rules="messageRules"
              label="Mensaje"
              required
              counter="250"
            ></v-textarea>
            <v-btn
              outlined
              @click="showSome"
              class="mt-2 text-xl-h5"
              block
              :x-large="screen2k"
              v-if="isReady"
            >
              Enviar
              <fa icon="share-square" class="ml-2"/>
            </v-btn>
            <p 
              v-else 
              class="text-subtitle-2 text-md-subtitle-1 text-xl-h5"
            >
              <span class="green--text font-weight-black">Nota:</span> 
              <span class="font-italic">El envio del formulario no está disponible por el momento. Se agregará en una futura actualización.</span>
            </p>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  layout: 'pages',
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 20) || 'El nombre debe tener menos de 20 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El e-meil es requerido',
        v => /.+@.+\..+/.test(v) || 'El e-mail debe ser válido'
      ],
      subject: '',
      subjectRules: [
        v => !!v || 'El asunto es requerido'
      ],
      message: '',
      messageRules: [
        v => !!v || 'El mensaje es requerido',
        v => v.length <= 250 || 'Máximo 250 caracteres'
      ],
      isReady: false
    }
  },
  methods: {
    showSome() {
      alert('Mensaje enviado... Realmente no se envió nada pero pues bueno')
    }
  },
  head() {
    return {
      title: 'Contáctame',
      meta: [
        ...this.meta
      ],
      link: [
        {
          hid: "canonical",
          name: "canonical",
          href: "https://joansolano.herokuapp.com/contactame"
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: "Contáctame",
        description: "Página principal para contactar con Joan Solano",
        url: "https://joansolano.herokuapp.com/contactame",
      }
      return getSiteMeta(metaData)
    },
    screen2k() {
      return this.$vuetify.breakpoint.name === 'xl'
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>