<template>
    <div id="Navdrawer">
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
            <v-footer padless app absolute>
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
        sidebar: {
            type: Boolean,
            default: false
        },
        links: {
            type: Array,
            default: []
        }
    }
}
</script>
