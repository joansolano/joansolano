<template>
  <div>
    <v-parallax 
      :src="require(`~/assets/images/${project.img}`)" 
      :alt="project.alt" 
      style="width:100%; height:90vh;"
      dark
    >
      <div>
        <v-row class="centered" wrap>
          <v-col cols="12">
            <p class="text-h4 text-sm-h3 text-md-h2 font-weight-black">{{project.title}}</p>
          </v-col>
        </v-row>
      </div>
    </v-parallax>

    <v-container class="mt-5">
        <!--Tabla de contenidos-->
      <ul v-if="null">
          <li v-for="link of project.toc" :key="link.id">
              <nuxt-link :to="`#${link.id}`">{{link.text}}</nuxt-link>
          </li>
      </ul>

      <v-row justify="center">
        <v-col 
          cols="11" 
          sm="10"
        >
          <p class="text-body-2 text-sm-body-1 text-md-subtitle-2">{{ formatDate(project.createdAt) }}</p>
          <p class="text-h6 text-md-h5 font-weight-bold">{{ project.description }}</p>
          <nuxt-content :document="project"/>
          <p>Post actualizado por última vez: {{formatDate(project.updatedAt)}}</p>
          <v-divider></v-divider>
          <prev-next :prev="prev" :next="next" :name="'projects-slug'" class="mt-4 mb-2"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  layout: 'pages',
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug)
      .fetch()
      .catch(error => {
        console.log(error)
      })

    const [prev, next] = await $content('projects')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()
      .catch(err => {
        console.log(err)
      })

    return {
      project,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Date(date).toLocaleDateString('es', options)
    }
  },
  head() {
    return {
      title: `${this.project.title} | Proyectos`,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.project.createdAt
        },
        {
          property: "article:modified_time",
          content: this.project.updatedAt
        },
        {
          property: "article:tag",
          content: this.project.tags ? this.article.tags.toString() : ""
        },
        { name: "twitter:label1", content: "Escrito por" },
        { name: "twitter:data1", content: "Joan Solano" },
      ],
      link: [
        {
          hid: "canonical",
          name: "canonical",
          href: `https://joansolano.herokuapp.com/projects/${this.$route.params.slug}`
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.project.title,
        description: this.project.description,
        url: `https://joansolano.herokuapp.com/projects/${ this.$route.params.slug }`,
        mainImage: this.project.img
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
    left: 40%;
    transform: translate(-50%, -50%);
}
</style>