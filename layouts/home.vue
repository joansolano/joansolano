<template>
    <v-app>
        <v-navigation-drawer
            v-model="sidebar"
            app
            right
            temporary
        >
            <v-list class="ml-2 mr-2">
                <v-list-item class="ml-8 mb-2">
                    <v-list-item-content>
                        <v-list-item-title v-text="'Joan Solano'" class="text-h5 font-weight-black"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-2">
                    <v-img
                        :src="require('~/static/logo_joansolano.svg')"
                        max-width="200"
                    ></v-img>
                </v-list-item>
                <v-list-item
                    v-for="(link, index) of links"
                    :key="index"
                    :to="{ name: link.url}"
                    router
                    exact
                >
                    <v-list-item-action>
                        <fa :icon="link.icon" />
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="link.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-footer padless app :absolute="!fixed">
                <v-col
                    class="text-center"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} &boxh; Joan Solano
                </v-col>
            </v-footer>
        </v-navigation-drawer>
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
                    :src="require('~/static/logo_joansolano.png')"
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
            fixed: false,
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
