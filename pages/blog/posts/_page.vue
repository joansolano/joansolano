<template>
    <div id="blog" :style="screen2k ? { marginTop: '90px' } : ''">
        <v-container>
            <v-row align="center" justify="center" wrap>
            <v-col cols="12" align="center" justify="center">
                <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1">Blog</p>
            </v-col>
            <p class="text-h6 text-sm-h5 text-md-h4 text-xl-h3">&boxh;&boxh;&boxh;&nbsp;<span class="green--text">Qué pienso</span>&nbsp;&boxh;&boxh;&boxh;</p>
            </v-row>
            <v-row align="center" justify="center" wrap>
                <v-col cols="12" sm="8" md="6" align="center" justify="center">
                    <AppSearchInput class="mb-3"/>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col 
                    v-for="article of paginatedArticles" 
                    :key="article.slug"
                    cols="12"
                    sm="10"
                    md="6"
                    lg="4"
                >
                    <v-hover v-slot="{ hover }">
                        <v-card 
                            :elevation="hover ? 12 : 0"
                            :class="{ 'on-hover': hover }"
                        >
                            <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                                <img
                                    :data-src="require(`~/assets/images/${article.img}`)"
                                    :src="require('~/assets/lazy_img.webp')"
                                    :alt="article.img"
                                    :style="{ width: '100%', height: '100%' }"
                                    :class="nameClass"
                                >
                                <v-card-title v-text="article.title" class="green--text text-h5 text-xl-h3"></v-card-title>
                                <v-card-subtitle v-text="article.description" class="text-subtitle-1 text-xl-h6 mt-2"></v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        text
                                        class="ml-1 mb-1 green--text font-weight-black text-subtitle-1 text-xl-h6"
                                        nuxt
                                        outlined
                                        :large="screen2k"
                                    >   
                                        Leer más 
                                        <fa icon="arrow-right" class="ml-2 white--text"/>
                                    </v-btn>
                                </v-card-actions>
                            </nuxt-link>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-divider v-if="allArticles.length > 6" class="mt-2 mb-2"></v-divider>
            <Pagination 
                v-if="allArticles.length > 6" 
                :numberPage="parseInt(this.$route.params.page)"
                :totalArticles="allArticles.length"
                class="mr-4 mt-3"
            />
        </v-container>
    </div>
</template>

<script>
import getContent from '~/utils/getContent'
import getSiteMeta from '~/utils/getSiteMeta'
import lazyLoad from '~/utils/lazyLoad'

export default {
    layout: 'pages',
    async asyncData({ $content, params, error }) {
        const content = await getContent($content, params, error);

        return {
            allArticles: content.allArticles,
            paginatedArticles: content.paginatedArticles,
            nameClass:  'lzy-img-page-blog'
        }
    },
    head() {
        return {
            title: `Página ${ this.$route.params.page } | Blog`,
            meta: [
                ...this.meta,
            ],
            link: [
                {
                    hid: "canonical",
                    name: "canonical",
                    href: `https://joansolano.herokuapp.com/blog/posts/${ this.$route.params.page }`
                }
            ]
        }
    },
    computed: {
        meta() {
            const metaData = {
                title: `Página ${ this.$route.params.page } | Blog`,
                description: "Blog page about all the blog posts, articles, critics and others made by Joan Solano",
                url: `https://joansolano.herokuapp.com/blog/posts/${ this.$route.params.page }`,
            }
            return getSiteMeta(metaData)
        },
        screen2k() {
            return this.$vuetify.breakpoint.name === 'xl'
        }
    },
    mounted() {
        lazyLoad(this.nameClass, false)
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>