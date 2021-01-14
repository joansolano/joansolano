<template>
  <div>
    <div
      id="parallaxEf"
      :style="styleObject"
    >
      <div class="shadow">
        <v-row class="centered" wrap>
          <v-col cols="12">
            <p class="text-h4 text-sm-h3 text-md-h2 font-weight-bold">{{project.title}}</p>
          </v-col>
        </v-row>
      </div>
    </div>
    
    <v-container class="mt-5">
      <v-row justify="center">
        <v-col 
          cols="11" 
          sm="10"
        >
          <p class="text-body-2 text-sm-body-1 text-md-subtitle-2">{{ formatDate(project.createdAt) }}</p>
          <p class="text-h6 text-md-h5 font-weight-bold">{{ project.description }}</p>
          <p 
            class="text-subtitle-2 text-md-subtitle-1 text-lg-h6" 
            v-if="project.github"
          >
            Repo Github: 
            <a 
              :href="project.github" 
              target="_blank" 
              ref="noreferrer noopener" 
              class="green--text"
            >
              {{ project.github }}
            </a>
          </p>

          <v-card
            max-width="500"
            tile
            class="mb-4"
            flat
          >
            <v-list>
              <p class="text-h6 ma-2 text-center">Contenido</p>
              <v-list-item-group
                v-model="selectedItem"
                color="black"
              >
                <v-list-item
                  v-for="link of project.toc"
                  :key="link.id"
                  class="mr-1 ml-1"
                >
                  <nuxt-link :to="`#${ link.id }`">
                    <v-list-item-content>
                        <v-list-item-title v-text="link.text" class="green--text"></v-list-item-title>
                    </v-list-item-content>
                  </nuxt-link>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          
          <nuxt-content :document="project"/>

          <p class="mt-3">Post actualizado por última vez: {{formatDate(project.updatedAt)}}</p>
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
      next,
      selectedItem: null,
      styleObject: {
        height: '90vh',
        widht: '100%',
        backgroundImage: 'url(' + require(`~/assets/images/${project.img}`) +')',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
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
#parallaxEf {
    position: relative;
}
.centered {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
}
a {
  text-decoration: none;
}
.shadow {
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
}
</style>