<template>
  <div class="contain">
    <v-row class="section" id="home">
      <Home/>
    </v-row>
    <v-row class="section" id="aboutme">
      <Blog/>
    </v-row>
    <v-row class="section" id="blog">
      <div class="content">
        <h1>Projects Section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem reiciendis perspiciatis esse architecto corporis.</p>
      </div>
    </v-row>
  </div>
</template>

<script>
import Blog from '../components/Blog.vue'
export default {
  components: { Blog },
  layout: 'home',
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.contain {
  position: relative;
  width: 100%;
  height: 100vh;
}
.contain .section {
  position: relative;
  width: 100%;
  height: 100vh;
}
.contain .section .content {
  position: absolute;
}
.section#home {
  background: url("../static/background_joansolano.png") no-repeat center center fixed;
  background: cover;
}
.section#aboutme {
  background-color: gray;
}
.section#blog {
  background-color: rgb(114, 61, 111);
}
.section#projects {
  background-color: rgba(47, 99, 34, 0.692)(51, 255, 0, 0.692);
}
.section#contactme {
  background-color: rgb(92, 28, 28);
}
</style>
