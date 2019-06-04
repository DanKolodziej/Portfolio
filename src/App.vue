<template>
  <div id="app">
    <header-row></header-row>
    <navbar></navbar>
    <span id="skills-section" class="section-anchor"></span>
    <skills></skills>
    <span id="projects-section" class="section-anchor"></span>
    <projects></projects>
    <span id="contact-section" class="section-anchor"></span>
    <contact></contact>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <footer-row></footer-row>
  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import Navbar from './components/Navbar.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import FooterRow from './components/FooterRow.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HeaderRow,
    Navbar,
    FooterRow,
    Skills,
    Projects,
    Contact
  }
}
</script>

<style>

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #444;
    margin: 0;
    color: #fff;
    /* font-family: Roboto, Arial, serif; */
    font-family: 'Raleway', sans-serif;
  }

  #app {
    width: 100%;
    /* margin: 0; */
  }

  .section-anchor {
    display: block;
    height: 60px;
    margin-top: -60px;
    visibility: hidden;
  }

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
