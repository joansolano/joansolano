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
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    v-text="project.title"
                    class="mt-2 mb-2 green--text"
                  ></v-card-title>
                  <v-card-subtitle
                    v-text="project.description"
                  ></v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      text
                      outlined
                      large
                      class="ml-2 green--text"
                      nuxt
                    >
                      Leer más
                      <fa icon="arrow-right" class="ml-2 white--text"/>
                    </v-btn>
                  </v-card-actions>
                </div>
                <v-avatar
                  class="ma-3"
                  height="256"
                  width="384"
                  tile
                >
                  <v-img :src="require(`~/assets/images/${ project.img }`)"></v-img>
                </v-avatar>
              </div>
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
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.right {
    position: absolute;
    top: 70%;
    left: 80%;
    transform: translate(-50%, -50%);
}
a {
  text-decoration: none;
}
</style>