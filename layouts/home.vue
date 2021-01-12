<template>
    <v-app>
        <NavDrawer :sidebar="sidebar" :links="links"/>
        <v-app-bar 
            app 
            height="0px"
            color="rgba(255, 255, 255, 0)"
            elevation="0"
        >
            <v-btn
                dark
                icon
                :to="{
                    name: 'index'
                }"
                text
                large
                class="ml-5 btn-log"
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
            <v-spacer></v-spacer>
            <span>
                <v-app-bar-nav-icon @click="sidebar = !sidebar" class="app-icon"></v-app-bar-nav-icon>
            </span>
        </v-app-bar>
        <v-main>
            <nuxt/>
        </v-main>
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
.v-app-bar {
    z-index: 1 !important;
}
.btn-log {
    transform: translateY(30px);
}
.app-icon {
    transform: translateY(30px);
}
</style>
