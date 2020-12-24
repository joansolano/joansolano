<template>
  <div id="projects">
    <v-row align="center" justify="center" wrap>
      <v-col cols="12" align="center" justify="center">
        <p class="text-h4 text-sm-h3 text-md-h2">Proyectos</p>
      </v-col>
      <p class="text-h6 text-sm-h5 text-md-h4">&boxh;&boxh;&boxh;&nbsp;Qué hago&nbsp;&boxh;&boxh;&boxh;</p>
    </v-row>
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
  </div>
</template>

<script>
import getProjects from '~/utils/getProjects'

export default {
  layout: 'pages',
  async asyncData({ $content, params }) {
    const projects = await getProjects($content, params)

    return projects
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