<template>
    <v-app>
        <NavDrawer :links="links" v-model="sidebar"/>
        <v-app-bar 
            app 
            height="0px"
        >
            <v-img
                alt="JoanSolano Logo"
                :src="require('~/static/logo_joansolano.svg')"
                class="shrink"
                contain
                transition="scale-transition"
                :width="screen2k ? 70 : 50"
                :style="{ transform: 'translateY(40px)' }"
            />
            <v-spacer v-if="!screen2k"></v-spacer>
            <span>
                <v-app-bar-nav-icon 
                    @click="sidebar = !sidebar" 
                    :style="{ transform: 'translateY(40px)' }"
                    v-if="!screen2k"
                ></v-app-bar-nav-icon>
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
    },
    computed: {
        screen2k() {
            return this.$vuetify.breakpoint.name === 'xl'
        }
    }
}
</script>
