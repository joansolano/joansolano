<template>
    <div>
        <v-row align="center" justify="center" class="ml-2" wrap>
            <v-col cols="5">
                <v-avatar height="80px" width="80px">
                    <img :src="require(`~/assets/images/${author.image}`)">
                </v-avatar>
            </v-col>
            <v-col>
                <p class="text-body-1 text-sm-subtitle-2 text-md-subtitle-1 mb-1">ESCRITO POR</p>
                <p class="text-subtitle-2 text-sm-subtitle-1 text-md-h6">{{ author.name }}</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>