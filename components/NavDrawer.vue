<template>
    <div id="Navdrawer">
        <v-navigation-drawer
            :value="screen2k ? true : value"
            @input="$emit('input', $event)"
            app
            right
            :temporary="screen2k ? false : true"
            :width="widthLogo.drawer"
        >
            <v-list class="ml-2 mr-2">
                <v-list-item class="mb-2">
                    <v-list-item-content>
                        <v-list-item-title v-text="'Joan Solano'" class="text-h5 text-xl-h2 text-center font-weight-black"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-4 d-flex justify-center">
                    <v-img
                        :src="require('~/static/logo_joansolano.svg')"
                        :max-width="widthLogo.img"
                    ></v-img>
                </v-list-item>
                <v-list-item
                    v-for="(link, index) of links"
                    :key="index"
                    :to="{ name: link.url}"
                    router
                    exact
                    :class="screen2k ? 'pa-6' : ''"
                >
                    <v-list-item-action>
                        <fa :icon="link.icon" :size="screen2k ? '2x' : '1x'"/>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="link.name" class="text-xl-h4"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-footer padless absolute>
                <v-col
                    class="text-center"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} &boxh; Joan Solano
                </v-col>
            </v-footer>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'NavDrawer',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        links: {
            type: Array,
            default: []
        }
    },
    computed: {
        widthLogo() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xl': return {
                    img: 250,
                    drawer: 500
                }
                default: return {
                    img: 150,
                    drawer: 256
                }
            }
        },
        screen2k() {
            return this.$vuetify.breakpoint.name === 'xl'
        }
    }
}
</script>
