<template>
    <v-row align="center">
        <v-col
            cols="12" 
            sm="6"
            class="pl-8 pt-10"
        >
            <p class="text-h6 text-md-h5 text-xl-h3 font-weight-bold">Del conocimiento a la práctica</p>
            <p class="text-subtitle-2 text-md-subtitle-1 text-xl-h5">Cuesta que cualquier tipo de conocimiento se quede grabado en lo más profundo de la mente si ese conocimiento no se lleva a la práctica</p>
            <p class="text-subtitle-2 text-md-subtitle-1 text-xl-h5">Los proyectos permiten hacer esto y es mediante estos, que se puede cambiar el mundo y a las personas que viven en el</p>
            <p class="text-subtitle-2 text-md-subtitle-1 text-xl-h5">Por eso quiero mostrar los distintos proyectos que hecho</p>
            <v-btn
                :to="{ name: 'proyectos' }"
                outlined
                class="mb-4 text-xl-h5"
                :x-large="this.$vuetify.breakpoint.name === 'xl'"
            >
                Vamos a verlos | Proyectos
            </v-btn>
            <v-divider v-if="!mobileAndTablet"></v-divider>
            <div class="mt-4" v-if="!mobileAndTablet">
                <p class="text-subtitle-2 text-xl-h6"><span class="font-weight-bold">Nota:</span> <span class="font-italic">A la derecha hay un pequeño juego de arrastrar y soltar</span></p>
                <p class="text-subtitle-1 text-xl-h5 font-weight-bold">Intentalo <fa icon="arrow-right" class="ml-2"/></p>
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
                        :src="require('~/assets/svg/circuit1.png')"
                        alt="pcb_projects"
                        :max-width="widthImg"
                        height="100%"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col>
                    <h2 class="text-xl-h3 font-weight-bold">Arrastra y suelta</h2>
                </v-col>
                <v-col
                    cols="12"
                >
                    <div :style="{ 
                        position: 'relative',
                        textAlign: 'center'
                    }">
                        <img
                            :src="require('~/assets/svg/empty_circuit.png')"
                            alt="pcb_empty"
                            :style="{
                                width: `${ widthImg }px`,
                                height: '100%',
                                transform: 'translate(-10px, 2px)'
                            }"
                            id="ecImg"
                        >
                        <div 
                            v-for="(item, index) of cpImgs"
                            :key="index"
                            :id="item.id + 'd'"
                            @drop="onDrop($event, index)"
                            @dragover.prevent
                            @dragenter.prevent
                            class="divImg d-flex justify-center align-center"
                            :style="setStyles(index)"
                        >
                            <img src="" alt="" draggable="false">
                        </div>
                    </div>
                </v-col>
                <v-col v-if="!successGame">
                    <v-sheet
                        class="mx-auto"
                        :max-width="widthImg"
                    >
                        <v-slide-group
                            multiple
                        >
                            <v-slide-item
                                v-for="(img, index) of imgs"
                                :key="index"
                            >
                                <v-card
                                    height="80"
                                    width="100"
                                    class="ma-2"
                                >
                                    <img
                                        :src="img.src"
                                        :alt="img.id"
                                        :style="{ width: '80px', height: '80px' }"
                                        :id="img.id"
                                        :draggable="successGame ? false : true"
                                        @dragstart="startDrag($event, img)"
                                    >
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
                <v-col v-else>
                    <div class="exit">
                        <h2 class="text-xl-h3">Genial, Lo lograste!</h2>
                        <v-btn
                            color="green"
                            @click="restartDnD(cpImgs)"
                            class="mt-4 text-xl-h5"
                            :x-large="this.$vuetify.breakpoint.name === 'xl'"
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
                    src: require('../assets/svg/cap1.svg'),
                    style: {
                        md: { height: '16px', width: '21px', left: '64%', right: '', top: '56%' },
                        lg: { height: '33px', width: '38px', left: '63.5%', right: '', top: '54%' },
                        xl: { height: '50px', width: '55px', left: '64%', right: '', top: '54%' }
                    }
                },
                {
                    id: 'cap2',
                    src: require('../assets/svg/cap2.svg'),
                    style: {
                        md: { height: '16px', width: '21px', left: '61.5%', right: '', top: '53%' },
                        lg: { height: '33px', width: '38px', left: '61%', right: '', top: '51.5%' },
                        xl: { height: '50px', width: '55px', left: '61.5%', right: '', top: '52%' }
                    }
                },
                {
                    id: 'cap5',
                    src: require('../assets/svg/cap5.svg'),
                    style: {
                        md: { height: '35px', width: '39px', left: '', right: '72%', top: '42%' },
                        lg: { height: '65px', width: '69px', left: '', right: '71%', top: '40%' },
                        xl: { height: '95px', width: '99px', left: '', right: '70%', top: '40%' }
                    }
                },
                {
                    id: 'ic1',
                    src: require('../assets/svg/ic1.svg'),
                    style: {
                        md: { height: '43px', width: '69px', left: '44%', right: '', top: '35.5%' },
                        lg: { height: '73px', width: '99px', left: '44%', right: '', top: '34.5%' },
                        xl: { height: '103px', width: '129px', left: '45%', right: '', top: '35.5%' }
                    }
                },
                {
                    id: 'ic2',
                    src: require('../assets/svg/ic2.svg'),
                    style: {
                        md: { height: '40px', width: '64px', left: '59.5%', right: '', top: '77%' },
                        lg: { height: '70px', width: '94px', left: '59%', right: '', top: '75%' },
                        xl: { height: '100px', width: '124px', left: '60%', right: '', top: '75%' }
                    }
                },
                {
                    id: 'micro',
                    src: require('../assets/svg/micro.svg'),
                    style: {
                        md: { height: '65px', width: '109px', left: '', right: '47%', top: '14%' },
                        lg: { height: '95px', width: '139px', left: '', right: '48%', top: '14%' },
                        xl: { height: '125px', width: '169px', left: '', right: '50%', top: '15%' }
                    }
                },
                {
                    id: 'plugin1',
                    src: require('../assets/svg/plugin1.svg'),
                    style: {
                        md: { height: '79px', width: '66px', left: '81%', right: '', top: '43%' },
                        lg: { height: '109px', width: '96px', left: '80%', right: '', top: '43%' },
                        xl: { height: '139px', width: '126px', left: '82%', right: '', top: '47%' }
                    }
                },
                {
                    id: 'pot',
                    src: require('../assets/svg/pot.svg'),
                    style: {
                        md: { height: '36px', width: '27px', left: '63.5%', right: '', top: '29.5%' },
                        lg: { height: '60px', width: '51px', left: '62.5%', right: '', top: '27%' },
                        xl: { height: '84px', width: '75px', left: '62.7%', right: '', top: '28.5%' }
                    }
                },
                {
                    id: 'res1',
                    src: require('../assets/svg/res1.svg'),
                    style: {
                        md: { height: '19px', width: '33px', left: '', right: '55%', top: '59.5%' },
                        lg: { height: '39px', width: '53px', left: '', right: '54.5%', top: '58.5%' },
                        xl: { height: '59px', width: '73px', left: '', right: '54.5%', top: '56.5%' }
                    }
                },
                {
                    id: 'res2',
                    src: require('../assets/svg/res2.svg'),
                    style: {
                        md: { height: '19px', width: '33px', left: '', right: '52%', top: '61.5%' },
                        lg: { height: '39px', width: '53px', left: '', right: '52%', top: '60.5%' },
                        xl: { height: '59px', width: '73px', left: '', right: '52.5%', top: '59%' }
                    }
                },
                {
                    id: 'timer',
                    src: require('../assets/svg/timer.svg'),
                    style: {
                        md: { height: '31px', width: '43px', left: '', right: '41%', top: '71%' },
                        lg: { height: '61px', width: '73px', left: '', right: '40%', top: '68.5%' },
                        xl: { height: '91px', width: '103px', left: '', right: '40%', top: '69%' }
                    }
                },
                {
                    id: 'vr',
                    src: require('../assets/svg/vr.svg'),
                    style: {
                        md: { height: '29px', width: '43px', left: '71.5%', right: '', top: '71.5%' },
                        lg: { height: '59px', width: '73px', left: '70%', right: '', top: '68.5%' },
                        xl: { height: '89px', width: '103px', left: '71%', right: '', top: '68.5%' }
                    }
                }
            ],
            cpImgs: [
                {
                    id: 'cap1',
                    src: require('../assets/svg/cap1.svg'),
                    style: {
                        md: { height: '16px', width: '21px', left: '64%', right: '', top: '56%' },
                        lg: { height: '33px', width: '38px', left: '63.5%', right: '', top: '54%' },
                        xl: { height: '50px', width: '55px', left: '64%', right: '', top: '54%' }
                    }
                },
                {
                    id: 'cap2',
                    src: require('../assets/svg/cap2.svg'),
                    style: {
                        md: { height: '16px', width: '21px', left: '61.5%', right: '', top: '53%' },
                        lg: { height: '33px', width: '38px', left: '61%', right: '', top: '51.5%' },
                        xl: { height: '50px', width: '55px', left: '61.5%', right: '', top: '52%' }
                    }
                },
                {
                    id: 'cap5',
                    src: require('../assets/svg/cap5.svg'),
                    style: {
                        md: { height: '35px', width: '39px', left: '', right: '72%', top: '42%' },
                        lg: { height: '65px', width: '69px', left: '', right: '71%', top: '40%' },
                        xl: { height: '95px', width: '99px', left: '', right: '70%', top: '40%' }
                    }
                },
                {
                    id: 'ic1',
                    src: require('../assets/svg/ic1.svg'),
                    style: {
                        md: { height: '43px', width: '69px', left: '44%', right: '', top: '35.5%' },
                        lg: { height: '73px', width: '99px', left: '44%', right: '', top: '34.5%' },
                        xl: { height: '103px', width: '129px', left: '45%', right: '', top: '35.5%' }
                    }
                },
                {
                    id: 'ic2',
                    src: require('../assets/svg/ic2.svg'),
                    style: {
                        md: { height: '40px', width: '64px', left: '59.5%', right: '', top: '77%' },
                        lg: { height: '70px', width: '94px', left: '59%', right: '', top: '75%' },
                        xl: { height: '100px', width: '124px', left: '60%', right: '', top: '75%' }
                    }
                },
                {
                    id: 'micro',
                    src: require('../assets/svg/micro.svg'),
                    style: {
                        md: { height: '65px', width: '109px', left: '', right: '47%', top: '14%' },
                        lg: { height: '95px', width: '139px', left: '', right: '48%', top: '14%' },
                        xl: { height: '125px', width: '169px', left: '', right: '50%', top: '15%' }
                    }
                },
                {
                    id: 'plugin1',
                    src: require('../assets/svg/plugin1.svg'),
                    style: {
                        md: { height: '79px', width: '66px', left: '81%', right: '', top: '43%' },
                        lg: { height: '109px', width: '96px', left: '80%', right: '', top: '43%' },
                        xl: { height: '139px', width: '126px', left: '82%', right: '', top: '47%' }
                    }
                },
                {
                    id: 'pot',
                    src: require('../assets/svg/pot.svg'),
                    style: {
                        md: { height: '36px', width: '27px', left: '63.5%', right: '', top: '29.5%' },
                        lg: { height: '60px', width: '51px', left: '62.5%', right: '', top: '27%' },
                        xl: { height: '84px', width: '75px', left: '62.7%', right: '', top: '28.5%' }
                    }
                },
                {
                    id: 'res1',
                    src: require('../assets/svg/res1.svg'),
                    style: {
                        md: { height: '19px', width: '33px', left: '', right: '55%', top: '59.5%' },
                        lg: { height: '39px', width: '53px', left: '', right: '54.5%', top: '58.5%' },
                        xl: { height: '59px', width: '73px', left: '', right: '54.5%', top: '56.5%' }
                    }
                },
                {
                    id: 'res2',
                    src: require('../assets/svg/res2.svg'),
                    style: {
                        md: { height: '19px', width: '33px', left: '', right: '52%', top: '61.5%' },
                        lg: { height: '39px', width: '53px', left: '', right: '52%', top: '60.5%' },
                        xl: { height: '59px', width: '73px', left: '', right: '52.5%', top: '59%' }
                    }
                },
                {
                    id: 'timer',
                    src: require('../assets/svg/timer.svg'),
                    style: {
                        md: { height: '31px', width: '43px', left: '', right: '41%', top: '71%' },
                        lg: { height: '61px', width: '73px', left: '', right: '40%', top: '68.5%' },
                        xl: { height: '91px', width: '103px', left: '', right: '40%', top: '69%' }
                    }
                },
                {
                    id: 'vr',
                    src: require('../assets/svg/vr.svg'),
                    style: {
                        md: { height: '29px', width: '43px', left: '71.5%', right: '', top: '71.5%' },
                        lg: { height: '59px', width: '73px', left: '70%', right: '', top: '68.5%' },
                        xl: { height: '89px', width: '103px', left: '71%', right: '', top: '68.5%' }
                    }
                }
            ],
            successGame: false
        }
    },
    methods: {
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemId', item.id)
        },
        onDrop(evt, index) {
            const itemId = evt.dataTransfer.getData('itemId')
            if (evt.path[0].id) {
                const div = document.querySelector(`#${ evt.path[0].id }`)
                if (itemId === evt.path[0].id.slice(0, -1) && div.children[0].src != '') {
                    div.children[0].src = require(`../assets/svg/${itemId}.svg`)
                    switch (this.$vuetify.breakpoint.name) {
                        case 'md': {
                            div.children[0].style.width = this.cpImgs[index].style.md.width
                            div.children[0].style.height = this.cpImgs[index].style.md.height
                            break
                        }
                        case 'lg': {
                            div.children[0].style.width = this.cpImgs[index].style.lg.width
                            div.children[0].style.height = this.cpImgs[index].style.lg.height
                            break
                        }
                        case 'xl': {
                            div.children[0].style.width = this.cpImgs[index].style.xl.width
                            div.children[0].style.height = this.cpImgs[index].style.xl.height
                            break
                        }
                    }
                    this.imgs = this.imgs.filter(img => img.id != itemId)
                }
                if (this.imgs.length === 0) this.successGame = true;
            }
        },
        restartDnD(arrImgs) {
            if (this.successGame) {
                arrImgs.forEach(el => {
                    const div = document.querySelector(`#${ el.id }d`).children[0]
                    div.src = ''
                    div.style.height = ''
                    div.style.width = ''
                });
                this.imgs = this.cpImgs
                this.successGame = false
            } 
            else this.successGame = true
        },
        setStyles(index) {
            let styles = {}
            switch (this.$vuetify.breakpoint.name) {
                case 'md': {
                    styles = this.cpImgs[index].style.md;
                    break;
                }
                case 'lg': {
                    styles = this.cpImgs[index].style.lg;
                    break;
                }
                case 'xl': {
                    styles = this.cpImgs[index].style.xl;
                    break;
                }
            }
            return {
                position: 'absolute',
                left: styles.left != '' ? styles.left : '',
                right: styles.right != '' ? styles.right : '',
                top: styles.top,
                height: styles.height,
                width: styles.width,
                borderTopLeftRadius: index === 0 || index === 9 ? '50px' : '',
                borderBottomRightRadius: index === 1 || index === 8 ? '50px' : ''
            }
        }
    },
    computed: {
        widthImg() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 350
                case 'sm': return 450
                case 'md': return 500
                case 'lg': return 650
                case 'xl': return 1000
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
</style>
