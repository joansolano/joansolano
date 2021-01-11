<template>
    <v-row align="center" justify="center">
        <v-col
            cols="12" 
            sm="6" 
            justify="center" 
            align="center"
        >
            <p class="text-h5 text-md-h4 font-weight-bold">Del conocimiento a la práctica</p>
            <p class="text-subtitle-2 text-md-subtitle-1">Cuesta que cualquier tipo de conocimiento se quede grabado en lo más profundo de la mente si ese conocimiento no se lleva a la práctica</p>
            <p class="text-subtitle-2 text-md-subtitle-1">Los proyectos permiten hacer esto y es mediante estos, que se puede cambiar el mundo y a las personas que viven en el</p>
            <p class="text-subtitle-2 text-md-subtitle-1">Por eso quiero mostrar los distintos proyectos que hecho</p>
            <v-btn
                :to="{ name: 'projects' }"
                large
                outlined
                class="mb-4"
            >
                Vamos a verlos | Proyectos
            </v-btn>
            <v-divider v-if="!mobileAndTablet"></v-divider>
            <div class="mt-4" v-if="!mobileAndTablet">
                <p class="text-subtitle-2 font-weight-bold">Nota:</p>
                <p class="text-subtitle-2 font-italic">A la derecha hay un pequeño juego de arrastrar y soltar</p>
                <p class="text-subtitle-1 font-weight-bold">Intentalo <fa icon="arrow-right" class="ml-2"/></p>
            </div>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            justify="center"
            align="center"
        >
            <v-row v-if="mobileAndTablet">
                <v-col
                    cols="12"
                >
                    <v-img
                        :src="require('~/assets/svg/circuit1.svg')"
                        :max-width="widthImg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col>
                    <h1>Arrastra y suelta</h1>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-img
                        :src="require('~/assets/svg/empty_circuit.svg')"
                        :max-width="widthImg"
                        id="ecImg"
                    >
                        <div 
                            v-for="(item, index) of cpImgs"
                            :key="index"
                            :id="item.id + 'd'"
                            @drop="onDrop($event)"
                            @dragover.prevent
                            @dragenter.prevent
                            class="divImg"
                        >
                            <img src="" alt="" draggable="false">
                        </div>
                    </v-img>
                </v-col>
                <v-col v-if="!successGame">
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
                                        :draggable="successGame ? false : true"
                                        @dragstart="startDrag($event, img)"
                                    ></v-img>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
                <v-col v-else>
                    <div class="exit">
                        <h2>Genial, Lo lograste!</h2>
                        <v-btn
                            color="green"
                            @click="restartDnD(cpImgs)"
                        >
                            Reiniciar
                            <fa icon="redo" class="ml-2"/>
                        </v-btn>
                    </div>
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
            ],
            cpImgs: [
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
            ],
            isHydrated: false,
            successGame: false
        }
    },
    methods: {
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemId', item.id)
        },
        onDrop(evt) {
            const itemId = evt.dataTransfer.getData('itemId')
            const div = document.querySelector(`#${ evt.path[0].id }`)
            if (itemId === evt.path[0].id.slice(0, -1)) {
                div.children[0].src = require(`~/assets/svg/elect_comp/${itemId}.svg`)
                this.imgs = this.imgs.filter(img => img.id != itemId)
            }
            if (this.imgs.length === 0) this.successGame = true;
        },
        restartDnD(arrImgs) {
            if (this.successGame) {
                arrImgs.forEach(el => {
                    const div = document.querySelector(`#${ el.id }d`)
                    div.children[0].src = ''
                });
                this.imgs = this.cpImgs
                this.successGame = false
            } 
            else this.successGame = true
        }
    },
    computed: {
        widthImg() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': 
                    return 300
                case 'sm':
                    return 450
                case 'md':
                    return 500
                case 'lg':
                    return 650
            }
        },
        mobileAndTablet() {
            return this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm'
        }
    }
}
</script>

<style scoped>
.divImg {
    display: flex;
    align-items: center;
    justify-content: center;
}
#ecImg:last-child {
    position: relative;
}
#cap1d {
    position: absolute;
    left: 63.5%;
    top: 53%;
    height: 35px;
    width: 35px;
    border-top-left-radius: 50px;
}
#cap2d {
    position: absolute;
    left: 60.5%;
    top: 51%;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 50px;
}
#cap5d {
    position: absolute;
    right: 70%;
    top: 40%;
    height: 50px;
    width: 70px;
}
#ic1d {
    position: absolute;
    left: 44%;
    top: 35.5%;
    height: 50px;
    width: 70px;
}
#ic2d {
    position: absolute;
    left: 58%;
    top: 73%;
    height: 65px;
    width: 75px;
}
#microd {
    position: absolute;
    right: 49%;
    top: 9%;
    height: 100px;
    width: 100px;
}
#plugin1d {
    position: absolute;
    left: 80%;
    top: 38%;
    height: 120px;
    width: 75px;
}
#potd {
    position: absolute;
    left: 62.5%;
    top: 26.5%;
    height: 60px;
    width: 40px;
}
#res1d {
    position: absolute;
    right: 54.5%;
    top: 56.5%;
    height: 40px;
    width: 40px;
    border-bottom-right-radius: 50px;
}
#res2d {
    position: absolute;
    right: 52%;
    top: 58.5%;
    height: 40px;
    width: 40px;
    border-top-left-radius: 50px;
}
#timerd  {
    position: absolute;
    right: 40%;
    top: 69.5%;
    height: 40px;
    width: 60px;
}
#vrd {
    position: absolute;
    left: 71%;
    top: 68.5%;
    height: 50px;
    width: 50px;
}
</style>
