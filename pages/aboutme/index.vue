<template>
  <div id="aboutme">
      <v-container :class="screen2k ? 'd-flex flex-column': ''" :style="screen2k ? 'height: 90vh;' : ''">
        <v-row align="center" justify="center" wrap>
          <v-col cols="12" align="center">
            <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1">Conóceme</p>
          </v-col>
          <p class="text-h6 text-sm-h5 text-md-h4 text-xl-h3">&boxh;&boxh;&boxh;&nbsp;<span class="green--text">Quién soy</span>&nbsp;&boxh;&boxh;&boxh;</p>
        </v-row>
        <v-row class="mt-2" :align="screen2k ? 'start' : 'center'">
          <v-col
            cols="12"
            sm="6"
            :class="screen2k ? 'd-flex flex-column align-center': 'd-flex flex-column align-end'"
          >
            <v-img
              :src="require('~/assets/images/joansolano.jpg')"
              max-width="500"
            ></v-img>
          </v-col>
          <v-col>
            <client-only>
              <vue-typed-js 
                :strings="strings"
                :loop="true"
                :typeSpeed="100"
                :backSpeed="60"
              >
                <p
                  class="text-h6 text-sm-h5 text-md-h4 text-xl-h3"
                >
                  Soy Joan y soy <span class="typing green--text"></span>y mucho más
                </p>
              </vue-typed-js> 
            </client-only>
            <p class="text-xl-h5">Soy un joven optimista que siempre ha creído que nunca hay que parar de aprender. Esto me impulsó a estudiar ingeniería mecatrónica con el afán de comprender mucho mejor cómo funciona y cómo se construye el mundo actual y hacia que mundo nos llevará lo que hacemos ahora. <br> Aún no entiendo todo por completo y no soy el mejor en lo que hago, es cierto. Sin embargo, siempre pongo el corazón en todo lo que hago y con toda la disposición para ayudar a las personas que tienen necesidades. No lo he hecho mucho pero espero poder hacerlo.</p>
            <v-btn
              rounded
              outlined
              x-large
              class="mb-2 text-xl-h5"
              @click="showAlert"
            >
              Descargar CV
              <fa icon="download" class="ml-2"/>
            </v-btn>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12">
                <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-xl-h4 mb-0">Redes</p>
              </v-col>
              <v-col v-for="(network, index) of networks" :key="index">
                <v-btn
                  icon
                  :href="network.url"
                  target="_blank"
                  rel="noreferrer noopener"
                  fab
                >
                  <fa :icon="['fab', network.icon]" :size="screen2k ? '3x' : '2x'"/>
                </v-btn>
              </v-col>
            </v-row>
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
      strings: [
        'ingeniero mecatrónico',
        'blogger',
        'entusiasta'
      ],
      networks: [
        {
          url: 'https://www.facebook.com/joansesolano',
          icon: 'facebook'
        },
        {
          url: 'https://www.instagram.com/joansesolano/',
          icon: 'instagram'
        },
        {
          url: 'https://twitter.com/joansesolano',
          icon: 'twitter'
        },
        {
          url: 'https://www.linkedin.com/in/joansesolano/',
          icon: 'linkedin-in'
        },
        {
          url: 'https://github.com/joansolano',
          icon: 'github'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Conóceme',
      meta: [
        ...this.meta
      ],
      link: [
        {
          hid: "canonical",
          name: "canonical",
          href: "https://joansolano.herokuapp.com/aboutme"
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: "Conóceme",
        description: "Index page with info about Joan Solano",
        url: "https://joansolano.herokuapp.com/aboutme",
      }
      return getSiteMeta(metaData)
    },
    screen2k() {
      return this.$vuetify.breakpoint.name === 'xl'
    }
  },
  methods: {
    showAlert() {
      alert('Jajajaja... No hay nada para descargar')
    }
  }
}
</script>

<style scoped>
</style>