<template>
    <v-row>
        <v-col 
            cols="12" 
            align="center" 
            justify="center" 
            class="hidden-sm-and-up"
            :style="{ transform: 'translateY(50px)' }"
        >
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
            <div :style="{
                position: 'relative',
                textAlign: 'center'
            }">
                <img
                    :data-src="require('~/assets/svg/Typewriter.svg')"
                    :src="require('~/assets/lazy_img.png')"
                    alt="typewriter"
                    :style="{ 
                        width: `${ widthImg.width }px`,
                        height: '100%',
                        transform: 'translateY(15%)'
                    }"
                    :class="nameClass"
                >
                <div 
                    class="hidden-xs-only mt-2"
                    :style="{
                        position: 'absolute',
                        color: '#121212',
                        width: `${ widthImg.width - widthImg.diff }px`,
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }"
                >
                    <client-only>
                        <vue-typed-js 
                            :strings="textSmAndUp"
                            :loop="true"
                            :typeSpeed="100"
                            :backSpeed="60"
                        >
                            <h2 class="text-xl-h4"><span class="typing"></span></h2>
                        </vue-typed-js>
                    </client-only>
                    <v-btn
                        :to="{ name: 'blog' }"
                        outlined
                        color="black"
                        class="mt-2 text-xl-h5"
                        :large="this.$vuetify.breakpoint.name != 'xl'"
                        :x-large="this.$vuetify.breakpoint.name === 'xl'"
                    >
                        Velo tú mismo | Blog
                    </v-btn>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import lazyLoad from "~/utils/lazyLoad.js";

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
            ],
            nameClass: 'lzy-img-blog'
        }
    },
    computed: {
        widthImg() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return {
                    width: 350,
                    diff: 0
                }
                case 'sm': return {
                    width: 750,
                    diff: 310
                }
                case 'md': return {
                    width: 850,
                    diff: 335
                }
                case 'lg': return {
                    width: 950,
                    diff: 380
                }
                case 'xl': return {
                    width: 1350,
                    diff: 540
                }
            }
        }
    },
    mounted() {
        lazyLoad(this.nameClass, true)
    }
}
</script>
