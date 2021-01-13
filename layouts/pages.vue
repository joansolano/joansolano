<template>
    <v-app dark>
        <NavDrawer :links="links" v-model="sidebar"/>
        <v-app-bar 
            app 
            height="60px" 
            hide-on-scroll 
            elevation="0"
            flat
        >
            <v-btn
                dark
                icon
                :to="{
                    name: 'index'
                }"
                text
                large
                class="ml-5"
            >
                <v-img
                    alt="JoanSolano Logo"
                    :src="require('~/static/logo_joansolano.svg')"
                    class="shrink"
                    contain
                    transition="scale-transition"
                    width="50"
                />
            </v-btn>
            <v-toolbar-title class="ml-2 font-weight-black">Joan Solano</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items 
                v-for="(link, index) of links" 
                :key="index" 
                class="hidden-sm-and-down"
            >
                <v-btn
                    text
                    :to="{
                        name: `${link.url}`
                    }"
                    :color="`${ link.name === 'Contáctame' ? 'green' : '' }`"
                >
                    {{ link.name }}
                </v-btn>
            </v-toolbar-items>
            <span class="hidden-md-and-up">
                <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            </span>
        </v-app-bar>
        <v-main class="back-color">
            <nuxt/>
        </v-main>
        <v-footer padless app absolute>
            <v-col
                class="text-center"
                cols="12"
            >
                {{ new Date().getFullYear() }} &boxh; <strong>Joan Solano</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            sidebar: false,
            links: [
                {
                    name: 'Inicio',
                    url: 'index',
                    icon: 'home'
                },
                {
                    name: 'Conóceme',
                    url: 'aboutme',
                    icon: 'user-circle'
                },
                {
                    name: 'Blog',
                    url: 'blog',
                    icon: 'blog'
                },
                {
                    name: 'Proyectos',
                    url: 'projects',
                    icon: 'tools'
                },
                {
                    name: 'Contáctame',
                    url: 'contactme',
                    icon: 'phone'
                },
            ]
        }
    }
}
</script>

<style scoped>
/*
.back-color {
    
}
*/
</style>