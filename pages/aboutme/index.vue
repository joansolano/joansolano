<template>
  <div id="aboutme">
      <v-container>
        <v-row align="center" justify="center" wrap>
          <v-col cols="12" align="center" justify="center">
            <p class="text-h4 text-sm-h3 text-md-h2">Conóceme</p>
          </v-col>
          <p class="text-h6 text-sm-h5 text-md-h4">&boxh;&boxh;&boxh;&nbsp;Quién soy&nbsp;&boxh;&boxh;&boxh;</p>
        </v-row>
        <v-row class="mt-2" align="center">
          <v-col
            cols="12"
            sm="6"
          >
            <v-img
              :src="require('~/assets/images/joansolano.jpg')"
              max-width="500"
            ></v-img>
          </v-col>
          <v-col>
            <p class="text-h6 text-sm-h5 text-md-h4">Soy Joan y soy ingeniero mecatrónico en proceso y mucho más</p>
            <p>Soy un joven optimista que siempre ha creído que nunca hay que parar de aprender. Esto me impulsó a estudiar ingeniería mecatrónica con el afán de comprender mucho mejor cómo funciona y cómo se construye el mundo actual y hacia que mundo nos llevará lo que hacemos ahora. <br> Aún no entiendo todo por completo y no soy el mejor en lo que hago, es cierto. Sin embargo, siempre pongo el corazón en todo lo que hago y con toda la disposición para ayudar a las personas que tienen necesidades. No lo he hecho mucho pero espero poder hacerlo.</p>
            <v-btn
              rounded
              outlined
              x-large
              class="mb-2"
              @click="showAlert"
            >
              Descargar CV
              <fa icon="download" class="ml-2"/>
            </v-btn>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12">
                <p class="text-subtitle-1 text-sm-h6 text-md-h5 mb-0">Redes</p>
              </v-col>
              <v-col v-for="(network, index) of networks" :key="index">
                <v-btn
                  icon
                  :href="network.url"
                  target="_blank"
                  rel="noreferrer noopener"
                  fab
                >
                  <fa :icon="['fab', network.icon]" size="2x"/>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  layout: 'pages',
  data() {
    return {
      networks: [
        {
          url: 'https://www.facebook.com/joansebastian.solanogarcia',
          icon: 'facebook'
        },
        {
          url: 'https://www.instagram.com/joansesolano/',
          icon: 'instagram'
        },
        {
          url: 'https://twitter.com/21_jntian',
          icon: 'twitter'
        },
        {
          url: 'https://www.linkedin.com/in/joan-sebastian-s/',
          icon: 'linkedin-in'
        },
        {
          url: 'https://github.com/joansolano',
          icon: 'github'
        }
      ]
    }
  },
  methods: {
    showAlert() {
      alert('Jajajaja... No hay nada para descargar')
    }
  }
}
</script>

<style>

</style>