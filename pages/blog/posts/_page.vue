<template>
    <div id="blog">
        <v-container>
            <v-row align="center" justify="center" wrap>
            <v-col cols="12" align="center" justify="center">
                <p class="text-h4 text-sm-h3 text-md-h2">Blog</p>
            </v-col>
            <p class="text-h6 text-sm-h5 text-md-h4">&boxh;&boxh;&boxh;&nbsp;Qué pienso&nbsp;&boxh;&boxh;&boxh;</p>
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
                    class="col-container"
                >
                    <v-hover v-slot="{ hover }">
                        <v-card 
                            class="card-post"
                            :elevation="hover ? 12 : 0"
                            :class="{ 'on-hover': hover }"
                        >
                            <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                                <v-img
                                    :src="require(`~/assets/images/${article.img}`)"
                                ></v-img>
                                <v-card-title v-text="article.title"></v-card-title>
                                <v-card-subtitle v-text="article.description"></v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        text
                                        class="ml-1 mb-1 btn-more"
                                        nuxt
                                    >   
                                            Leer más 
                                            <fa icon="arrow-right" class="ml-2 iconfa"/>
                                    </v-btn>
                                </v-card-actions>
                            </nuxt-link>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-divider v-if="allArticles.length > 6" class="mt-2 mb-2"></v-divider>
            <pagination 
                v-if="allArticles.length > 6" 
                :length="Math.ceil(allArticles.length / 6)"
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

export default {
    layout: 'pages',
    async asyncData({ $content, params, error }) {
        const content = await getContent($content, params, error);

        return {
            allArticles: content.allArticles,
            paginatedArticles: content.paginatedArticles,
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
    }
}
</script>

<style scoped>
.card-post {
    transform-style: preserve-3d;
}

a {
    text-decoration: none;
}
.btn-more {
    color: #126d03;
}
.iconfa {
    color: white;
}
</style>