<template>
  <div id="contactme">
    <v-container>
      <v-row align="center" justify="center" wrap>
        <v-col cols="12" align="center" justify="center">
          <p class="text-h4 text-sm-h3 text-md-h2">Contáctame</p>
        </v-col>
        <p class="text-h6 text-sm-h5 text-md-h4">&boxh;&boxh;&boxh;&nbsp;Qué quieres saber&nbsp;&boxh;&boxh;&boxh;</p>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <p class="text-h6 text-sm-h5 text-md-h4">Qué quieres saber</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore velit officia aut optio eum minus! Fugiat cupiditate quod, distinctio aspernatur nemo voluptate a id, unde architecto, corporis deserunt voluptates illo!</p>
          <v-row align="center">
            <v-col cols="2" class="text-center">
              <fa icon="user-circle" size="3x"/>
            </v-col>
            <v-col>
              <p>Nombre</p>
              <p>Joan Solano</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="text-center">
              <fa icon="map-marker-alt" size="3x"/>
            </v-col>
            <v-col>
              <p>Dirección</p>
              <p>Timaná, Huila</p>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="2" class="text-center">
              <fa icon="envelope" size="3x"/>
            </v-col>
            <v-col>
              <p>Email</p>
              <a href="mailto:jntian-21@hotmail.com">
                jntian-21@hotmail.com
              </a>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <p class="text-h6 text-sm-h5 text-md-h4">Mándame un mensaje</p>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="subject"
              :rules="subjectRules"
              label="Asunto"
              required
            ></v-text-field>
            <v-textarea
              :value="message"
              :rules="messageRules"
              label="Mensaje"
              required
              counter="250"
            ></v-textarea>
            <v-btn
              outlined
              @click="showSome"
              class="mt-2"
              block
            >
              Enviar
              <fa icon="share-square" class="ml-2"/>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'pages',
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 20) || 'El nombre debe tener menos de 20 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El e-meil es requerido',
        v => /.+@.+\..+/.test(v) || 'El e-mail debe ser válido'
      ],
      subject: '',
      subjectRules: [
        v => !!v || 'El asunto es requerido'
      ],
      message: '',
      messageRules: [
        v => !!v || 'El mensaje es requerido',
        v => v.length <= 250 || 'Máximo 250 caracteres'
      ]
    }
  },
  methods: {
    showSome() {
      alert('Mensaje enviado... Realmente no se envió nada pero pues bueno')
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #126d03;
}
</style>