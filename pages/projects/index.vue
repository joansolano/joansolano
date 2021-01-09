<template>
  <div id="projects">
    <v-container>
      <v-row align="center" justify="center" wrap>
        <v-col cols="12" align="center" justify="center">
          <p class="text-h4 text-sm-h3 text-md-h2">Proyectos</p>
        </v-col>
        <p class="text-h6 text-sm-h5 text-md-h4">&boxh;&boxh;&boxh;&nbsp;<span class="green--text">Qué hago</span>&nbsp;&boxh;&boxh;&boxh;</p>
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
                height="300px"
              >
                <v-card-title
                  v-text="project.title"
                  class="mt-2 mb-2  text-h5"
                ></v-card-title>
                <v-card-subtitle
                  v-text="project.description"
                  class="text-subtitle-1"
                ></v-card-subtitle>
              </v-img>
              <v-card-actions>
                <v-btn
                  text
                  outlined
                  large
                  class="ml-2 green--text font-weight-black text-subtitle-1"
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
      <!--
      <v-carousel
        cycle
      >
        <v-carousel-item
          v-for="project of projects"
          :key="project.slug"
          :src="require(`~/assets/images/${project.img}`)"
        >
          <div>
            <v-row class="centered" align="center">
              <v-col cols="12">
                <h1 class="text-h4 text-sm-h3 text-md-h2">{{project.title}}</h1>
              </v-col>
              <v-col>
                <nuxt-link :to="{ name: 'projects-slug', params: { slug: project.slug } }">
                  <v-btn
                    outlined
                    x-large
                    nuxt
                  > 
                    Leer más
                    <fa icon="arrow-circle-right" class="ml-2"/>
                  </v-btn>
                </nuxt-link>
              </v-col>
            </v-row>
          </div>
        </v-carousel-item>
      </v-carousel>
      -->
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
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>