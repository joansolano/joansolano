<template>
    <div>
        <v-parallax 
            :src="require(`~/assets/images/${article.img}`)" 
            :alt="article.alt" 
            style="width:100%;"
            height="600"
            dark
        >
            <div>
                <v-row class="centered" wrap>
                    <v-col cols="12">
                        <p class="text-h4 text-sm-h3 text-md-h2 font-weight-black">{{article.title}}</p>
                    </v-col>
                    <author :author="article.author"/>
                </v-row>
            </div>
            <h6 class="bottom-right">Foto por: {{ article.imgauthor }}</h6>
        </v-parallax>

        <v-container class="mt-5">
            <!--Tabla de contenidos-->
            <ul v-if="null">
                <li v-for="link of article.toc" :key="link.id">
                    <nuxt-link :to="`#${link.id}`">{{link.text}}</nuxt-link>
                </li>
            </ul>

            <v-row justify="center">
                <v-col 
                    cols="11" 
                    sm="10"
                >
                    <p class="text-body-2 text-sm-body-1 text-md-subtitle-2">{{ formatDate(article.createdAt) }}</p>
                    <p class="text-h6 text-md-h5 font-weight-bold">{{ article.description }}</p>
                    <nuxt-content :document="article"/>
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
                    <p>Post actualizado por última vez: {{formatDate(article.updatedAt)}}</p>
                    <v-divider></v-divider>
                    <prev-next :prev="prev" :next="next" :name="'blog-slug'" class="mt-4 mb-2"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Author from '~/components/global/Author.vue'

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
            next
        }
    },
    mounted() {
        console.log(this.article)
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
    computed: {
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
                    height: 460,
                    width: 860
                }
            }
        }
    }
}
</script>

<style scoped >
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
</style>