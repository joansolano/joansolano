<template>
    <div>
        <v-row justify="end" align="center">
            <p class="text-body-2 mt-3 mr-3 color-text">Blogs: {{ countPosts() }} de {{ totalArticles }}</p>
            <v-btn
                icon
                nuxt
                :disabled="startPage()"
                :to="{ name: 'blog-posts-page', params: { page: 1 } }"
            >
                <fa icon="angle-double-left"/>
            </v-btn>
            <v-btn
                icon
                nuxt
                :disabled="startPage()"
                :to="{ name: 'blog-posts-page', params: { page: numberPage - 1 } }"
            >
                <fa icon="angle-left"/>
            </v-btn>
            <v-btn
                icon
                nuxt
                :disabled="lastPage()"
                :to="{ name: 'blog-posts-page', params: { page: numberPage + 1 } }"
            >
                <fa icon="angle-right"/>
            </v-btn>
            <v-btn
                icon
                nuxt
                :disabled="lastPage()"
                :to="{ name: 'blog-posts-page', params: { page: length } }"
            >
                <fa icon="angle-double-right"/>
            </v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        length: {
            type: Number,
            default: 0,
        },
        numberPage: {
            type: Number,
            default: 0,
        },
        totalArticles: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        startPage() {
            return this.numberPage === 1
        },
        lastPage() {
            return this.numberPage === this.length
        },
        countPosts() {
            if (this.numberPage === this.length) {
                return this.totalArticles
            }
            return this.numberPage * 6
        }
    }
}
</script>

<style scoped>
.color-text {
    color: #126d03;
}
</style>