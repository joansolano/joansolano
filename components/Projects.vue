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
                            @drop="onDrop($event)"
                            @dragover.prevent
                            @dragenter.prevent
                        >
                            <img src="" alt="">
                        </div>
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
                                        :id="img.id"
                                        draggable
                                        @dragstart="startDrag($event, img)"
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
                    id: 'cap1',
                    src: require(`~/assets/svg/elect_comp/cap1.svg`)
                },
                {
                    id: 'cap2',
                    src: require(`~/assets/svg/elect_comp/cap2.svg`)
                },
                {
                    id: 'cap5',
                    src: require(`~/assets/svg/elect_comp/cap5.svg`)
                },
                {
                    id: 'ic1',
                    src: require(`~/assets/svg/elect_comp/ic1.svg`)
                },
                {
                    id: 'ic2',
                    src: require(`~/assets/svg/elect_comp/ic2.svg`)
                },
                {
                    id: 'micro',
                    src: require(`~/assets/svg/elect_comp/micro.svg`)
                },
                {
                    id: 'plugin1',
                    src: require(`~/assets/svg/elect_comp/plugin1.svg`)
                },
                {
                    id: 'pot',
                    src: require(`~/assets/svg/elect_comp/pot.svg`)
                },
                {
                    id: 'res1',
                    src: require(`~/assets/svg/elect_comp/res1.svg`)
                },
                {
                    id: 'res2',
                    src: require(`~/assets/svg/elect_comp/res2.svg`)
                },
                {
                    id: 'timer',
                    src: require(`~/assets/svg/elect_comp/timer.svg`)
                },
                {
                    id: 'vr',
                    src: require(`~/assets/svg/elect_comp/vr.svg`)
                }
            ]
        }
    },
    methods: {
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemId', item.id)
            console.log('Start Drag')
        },
        onDrop(evt) {
            const itemId = evt.dataTransfer.getData('itemId')
            if (itemId === evt.path[0].id.slice(0, -1)) {
                const div = document.querySelector(`#${ evt.path[0].id }`)
                div.children[0].src = require(`~/assets/svg/elect_comp/${itemId}.svg`)
                console.log(div.children)
            }
            else console.log('False')
            //console.log(evt.path[0].id.slice(0, -1), itemId)
        }
    },
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
