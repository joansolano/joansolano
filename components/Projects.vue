<template>
    <v-row align="center" justify="center">
        <v-col
            cols="12" 
            sm="6" 
            justify="center" 
            align="center"
        >
            <h1>Projects section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus laborum quia ducimus rem quos?</p>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            justify="center"
            align="center"
        >
            <v-row>
                <v-col
                    cols="12"
                >
                    <v-img
                        :src="require('~/assets/svg/empty_circuit.svg')"
                        :max-width="widthImg"
                    >
                        <div 
                            id="microd"
                        ></div>
                    </v-img>
                </v-col>
                <v-col>
                    <v-sheet
                        class="mx-auto"
                        :max-width="widthImg"
                    >
                        <v-slide-group
                            :show-arrows="this.$vuetify.breakpoint.name === 'xs' ? false : true"
                            multiple
                        >
                            <v-slide-item
                                v-for="(img, index) of imgs"
                                :key="index"
                            >
                                <v-card
                                    height="100"
                                    width="100"
                                    class="ma-2 pa-2"
                                >
                                    <v-img
                                        :src="img.src"
                                        width="80"
                                        :id="img.name"
                                        draggable="true"
                                    ></v-img>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            imgs: [
                {
                    name: 'cap1',
                    src: require(`~/assets/svg/elect_comp/Cap1.svg`)
                },
                {
                    name: 'cap2',
                    src: require(`~/assets/svg/elect_comp/Cap2.svg`)
                },
                {
                    name: 'cap5',
                    src: require(`~/assets/svg/elect_comp/Cap5.svg`)
                },
                {
                    name: 'ic1',
                    src: require(`~/assets/svg/elect_comp/IC1.svg`)
                },
                {
                    name: 'ic2',
                    src: require(`~/assets/svg/elect_comp/IC2.svg`)
                },
                {
                    name: 'micro',
                    src: require(`~/assets/svg/elect_comp/Micro.svg`)
                },
                {
                    name: 'plugin1',
                    src: require(`~/assets/svg/elect_comp/PlugIn1.svg`)
                },
                {
                    name: 'pot',
                    src: require(`~/assets/svg/elect_comp/Potentiometer.svg`)
                },
                {
                    name: 'res1',
                    src: require(`~/assets/svg/elect_comp/Res1.svg`)
                },
                {
                    name: 'res2',
                    src: require(`~/assets/svg/elect_comp/Res2.svg`)
                },
                {
                    name: 'timer',
                    src: require(`~/assets/svg/elect_comp/Timer.svg`)
                },
                {
                    name: 'vr',
                    src: require(`~/assets/svg/elect_comp/VR.svg`)
                }
            ]
        }
    },
    /*
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id)
        },
        drop(ev) {
            ev.preventDefault()
            const data = ev.dataTransfer.getData("text")
            ev.target.appendChild(document.getElementById(data))
        }
    },
    */
    computed: {
        widthImg() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 300
                case 'sm': return 450
                case 'md': return 500
                case 'lg': return 650
            }
        }
    }
}
</script>

<style scoped>
#microd {
    transform: translate(170px, 30px);
    border-radius: 10px;
    border-style: solid;
    border-color: red;
    height: 140px;
    width: 140px;
}
</style>
