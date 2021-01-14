<template>
  <div id="projects" :style="screen2k ? { marginTop: '90px' } : ''">
    <v-container>
      <v-row align="center" justify="center" wrap>
        <v-col cols="12" align="center" justify="center">
          <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1">Proyectos</p>
        </v-col>
        <p class="text-h6 text-sm-h5 text-md-h4 text-xl-h3">&boxh;&boxh;&boxh;&nbsp;<span class="green--text">Qué hago</span>&nbsp;&boxh;&boxh;&boxh;</p>
      </v-row>
      <v-row align="center" justify="center" class="mb-2 mt-2">
        <v-col 
          v-for="project of projects"
          :key="project.slug"
          cols="12"
          sm="11"
        >
          <v-card>
            <nuxt-link :to="{ name: 'projects-slug', params: { slug: project.slug } }">    
              <v-img 
                :src="require(`~/assets/images/${ project.img }`)"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                :height="screen2k ? '500px' : '300px'"
              >
                <v-card-title
                  v-text="project.title"
                  class="mt-2 mb-2 text-h5 text-xl-h3"
                ></v-card-title>
                <v-card-subtitle
                  v-text="project.description"
                  class="text-subtitle-1 text-xl-h5"
                ></v-card-subtitle>
              </v-img>
              <v-card-actions>
                <v-btn
                  text
                  outlined
                  :x-large="screen2k"
                  :large="!screen2k"
                  class="ml-2 green--text font-weight-black text-subtitle-1 text-xl-h5"
                  nuxt
                >
                  Leer más
                  <fa icon="arrow-right" class="ml-2 white--text"/>
                </v-btn>
              </v-card-actions>
            </nuxt-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import getProjects from '~/utils/getProjects'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  layout: 'pages',
  async asyncData({ $content, params }) {
    const projects = await getProjects($content, params)

    return projects
  },
  head() {
    return {
      title: 'Proyectos',
      meta: [
        ...this.meta,
      ],
      link: [
        {
          hid: "canonical",
          name: "canonical",
          href: "https://joansolano.herokuapp.com/projects"
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: "Proyectos",
        description: "Projects page about all the projects made by Joan Solano",
        url: "https://joansolano.herokuapp.com/projects",
      }
      return getSiteMeta(metaData)
    },
    screen2k() {
      return this.$vuetify.breakpoint.name === 'xl'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>