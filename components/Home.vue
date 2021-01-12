<template>
  <v-row align="center" justify="center">
    <v-col 
        cols="12" 
        sm="6" 
        justify="center" 
        align="center"
    >
        <v-img 
            :src="require('~/assets/svg/circuit_iso.png')"
            :max-width="widthImg"
        ></v-img>
    </v-col>
    <v-col 
        cols="12" 
        sm="6"
    >
        <client-only>
            <p class="text-h5 text-md-h4">Hola, mi nombre es</p>
            <p class="text-h3 text-sm-h2 text-md-h1 font-weight-bold">Joan Solano</p>
            <vue-typed-js 
                :strings="strings"
                :loop="true"
                :typeSpeed="100"
                :backSpeed="60"
            >
                <p
                    class="text-h5 text-md-h4"
                >
                    Y soy <span class="typing green--text"></span>y mucho más
                </p>
            </vue-typed-js>
            <v-btn
                :to="{ name: 'aboutme' }"
                large
                :x-large="this.$vuetify.breakpoint.name === 'xs' ? false : true"
                color="green"
            >
                Conóceme
            </v-btn>
            <v-btn
                :to="{ name: 'contactme' }"
                large
                :x-large="this.$vuetify.breakpoint.name === 'xs' ? false : true"
                color="green"
            >
                Contáctame
            </v-btn>
        </client-only>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            strings: [
                'ing. mecatrónico',
                'blogger',
                'entusiasta'
            ]
        }
    },
    computed: {
        widthImg() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 350
                case 'sm': return 450
                case 'md': return 550
            }
        }
    }
}
</script>

<style scoped>

</style>