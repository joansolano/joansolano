<template>
    <div id="blog">
        <v-container>
            <v-row align="center" justify="center" wrap>
                <v-img
                    :src="require('~/static/logo_joansolano.svg')"
                    max-width="250"
                ></v-img>
                <v-col cols="12" align="center" justify="center">
                    <p class="text-h4 text-sm-h3 text-md-h2">Blog</p>
                </v-col>
                <v-col cols="12">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora aut at quam consectetur ut id officia nesciunt. Accusantium ipsa odio nesciunt eveniet deleniti provident unde molestiae perspiciatis temporibus. Magnam, alias!</p>
                </v-col>
                <v-btn
                    :to="{ name: 'blog-posts-page', params: { page: 1 } }"
                >
                    Vamos Allá
                    <fa icon="arrow-circle-right" class="ml-2"/>
                </v-btn>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    layout: 'pages',
    async asyncData({ $content, params }) {
        const articles = await $content('articles', params.slug)
            .only(['title', 'description', 'img', 'slug'])
            .sortBy('createdAt', 'desc')
            .fetch()
            .catch(err => {
                console.log(err)
            })

        return {
            articles
        }
    },
    mounted() {
        console.log(this.articles)
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