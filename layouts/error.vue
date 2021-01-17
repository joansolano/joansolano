<template>
  <div id="error" :style="this.$vuetify.breakpoint.name === 'xl' ? { marginTop: '90px' } : ''">
    <v-container fluid>
      <v-row align="center">
        <v-col align="center" justify="center" cols="12">
          <h1 
            v-if="error.statusCode === 404"
            class="text-h3 text-sm-h2 text-md-h1"
          >
            {{ pageNotFound }}
          </h1>
          <h1 
            v-else
            class="text-h3 text-sm-h2 text-md-h1"
          >
            {{ otherError }}
          </h1>
        </v-col>
        <v-col align="center" justify="center">
          <v-btn
            :to="{ name: 'index' }"
            class="text-xl-h4"
            :x-large="this.$vuetify.breakpoint.name === 'xl'"
          >
            Inicio
            <fa icon="undo-alt" class="ml-2"/>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'pages',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
