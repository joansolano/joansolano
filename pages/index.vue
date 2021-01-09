<template>
  <div class="contain">
    <v-row class="section" id="home">
      <Home/>
    </v-row>
    <v-row class="section" id="blog">
      <Blog/>
    </v-row>
    <v-row class="section" id="projects">
      <Projects/>
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
.section#blog {
  background: url("../static/background_blog.png") no-repeat center center fixed;
  background: cover;
}
.section#projects {
  background-color: rgb(47, 99, 34);
}
</style>
