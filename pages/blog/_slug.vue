<template>
    <div>
        <div 
            id="parallaxEf"
            :style="styleObject"
        >
            <div class="shadow">
                <v-row class="centered" wrap>
                    <v-col cols="12">
                        <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1 font-weight-black">{{article.title}}</p>
                    </v-col>
                    <author :author="article.author"/>
                </v-row>
            </div>
            <h6 class="bottom-right text-xl-h5">Foto por: {{ article.imgauthor }}</h6>
        </div>
        
        <v-container class="mt-5">
            <v-row justify="center">
                <v-col 
                    cols="11" 
                    sm="10"
                >
                    <p class="text-body-2 text-sm-body-1 text-md-subtitle-2 text-xl-subtitle-1">{{ formatDate(article.createdAt) }}</p>
                    <p class="text-h6 text-md-h5 text-xl-h4 font-weight-bold">{{ article.description }}</p>
                    <nuxt-content :document="article" class="text-xl-h5"/>
                    <iframe
                        v-if="article.urlvideo" 
                        :width="heightAndWidth.width" 
                        :height="heightAndWidth.height" 
                        :src="article.urlvideo" 
                        frameborder="0" 
                        allow="
                            accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture
                        " 
                        allowfullscreen
                    >
                    </iframe>
                    <p class="text-body-2 text-sm-body-1 text-md-subtitle-2 text-xl-subtitle-1">Post actualizado por última vez: {{formatDate(article.updatedAt)}}</p>
                    <v-divider></v-divider>
                    <prev-next :prev="prev" :next="next" :name="'blog-slug'" class="mt-4 mb-2 text-xl-h6"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Author from '~/components/global/Author.vue'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
    layout: 'pages',
    components: { Author },
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug)
            .fetch()
            .catch(error => {
                console.log(error)
            })

        const [prev, next] = await $content('articles')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'desc')
            .surround(params.slug)
            .fetch()
            .catch(err => {
                console.log(err)
            })

        return {
            article,
            prev,
            next,
            styleObject: {
                height: '96vh',
                widht: '100%',
                backgroundImage: 'url(' + require(`~/assets/images/${article.img}`) +')',
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
            title: `${this.article.title} | Blog`,
            meta: [
                ...this.meta,
                {
                    property: "article:published_time",
                    content: this.article.createdAt
                },
                {
                    property: "article:modified_time",
                    content: this.article.updatedAt
                },
                {
                    property: "article:tag",
                    content: this.article.tags ? this.article.tags.toString() : ""
                },
                { name: "twitter:label1", content: "Escrito por" },
                { name: "twitter:data1", content: "Joan Solano" },
            ],
            link: [
                {
                    hid: "canonical",
                    name: "canonical",
                    href: `https://joansolano.herokuapp.com/blog/${this.$route.params.slug}`
                }
            ]
        }
    },
    computed: {
        meta() {
            const metaData = {
                type: "article",
                title: this.article.title,
                description: this.article.description,
                url: `https://joansolano.herokuapp.com/blog/${ this.$route.params.slug }`,
                mainImage: this.article.img
            }
            return getSiteMeta(metaData)
        },
        heightAndWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return {
                    height: 170,
                    width: 280
                }
                case 'sm': return {
                    height: 250,
                    width: 440
                }
                case 'md': return {
                    height: 320,
                    width: 580
                }
                case 'lg': return {
                    height: 390,
                    width: 720
                }
                case 'xl': return {
                    height: 560,
                    width: 960
                }
            }
        }
    }
}
</script>

<style scoped >
#parallaxEf {
    position: relative;
}
.centered {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
}
.bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
}
.shadow {
    height: 100%;
    background: rgba(0,0,0,0.5);
}
</style>