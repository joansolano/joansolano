<template>
    <v-row>
        <v-col cols="12" align="center" justify="center" class="hidden-sm-and-up type-text">
            <client-only>
                <vue-typed-js 
                    :strings="textXs"
                    :loop="true"
                    :typeSpeed="200"
                    :backSpeed="200"
                >
                    <h1><span class="typing"></span></h1>
                </vue-typed-js>
            </client-only>
            <v-btn
                :to="{ name: 'blog' }"
                outlined
                large
                class="mt-2"
            >
                Velo tú mismo | Blog
            </v-btn>
        </v-col>
        <v-col cols="12" align="center" justify="center">
            <v-img
                :src="require('~/assets/svg/Typewriter.svg')"
                :max-width="width"
                class="typewritter"
            >
                <div 
                    class="hidden-xs-only text-typer mt-2"
                >
                    <client-only>
                        <vue-typed-js 
                            :strings="textSmAndUp"
                            :loop="true"
                            :typeSpeed="100"
                            :backSpeed="60"
                        >
                            <h2><span class="typing"></span></h2>
                        </vue-typed-js>
                    </client-only>
                    <v-btn
                        :to="{ name: 'blog' }"
                        outlined
                        color="black"
                        class="mt-2"
                        large
                    >
                        Velo tú mismo | Blog
                    </v-btn>
                </div>
            </v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
            textSmAndUp: [
                'Alguna vez escuché que escribir es la forma más fácil de influenciar a las personas. Además, es la mejor forma de plasmar lo que pienso.',
                'Por otro lado, no necesito mucho para hacerlo. Tan solo algo donde escribir y mucha creatividad para saber como expresarme correctamente.'
            ],
            textXs: [
                'Alguna vez escuché que escribir es la forma más fácil de influenciar a las personas.', 
                'Además, es la mejor forma de plasmar lo que pienso. Por otro lado, no necesito mucho para hacerlo.', 
                'Tan solo algo donde escribir y mucha creatividad para saber como expresarme correctamente.'
            ]
        }
    },
    computed: {
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 350
                case 'sm': return 750
                case 'lg': return 950
                case 'xl': return 1350
            }
        }
    }
}
</script>

<style scoped>
.typewritter {
    transform: translateY(15%);
}
.type-text {
    transform: translateY(50px);
}
.text-typer {
    color: #121212;
    width: 440px;
}
</style>
