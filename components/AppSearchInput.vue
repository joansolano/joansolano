<template>
    <div id="search">
        <input
            v-model="searchQuery" 
            type="search"
            autocomplete="off"
            placeholder="Search Blog Posts"
            class="text-subtitle-2 text-sm-subtitle-1 text-md-h6"
        />
        <v-card v-if="articles.length">
            <v-list-item v-for="article of articles" :key="article.slug">
                <v-list-item-content>
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <v-list-item-title 
                            v-text="article.title"
                            class="text-body-1 text-sm-subtitle-2 text-md-subtitle-1"
                        >
                        </v-list-item-title>
                    </nuxt-link>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            articles: []
        }
    },
    watch: {
        async searchQuery(searchQuery) {
            if (!searchQuery) {
                this.articles = []
                return
            }
            this.articles = await this.$content('articles')
                .limit(6)
                .search(searchQuery)
                .fetch()
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped>
input[type="search"] {
    color: white;
}
input[type="search"]::placeholder {
    text-align: center; 
}
a {
    text-decoration: none;
    color: #126d03;
}
</style>