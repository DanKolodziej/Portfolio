<template>
  <div id="app">
    <header-row></header-row>
    <navbar></navbar>
    <span id="about-section" class="section-anchor"></span>
    <about></about>
    <span id="projects-section" class="section-anchor"></span>
    <projects></projects>
    <span id="contact-section" class="section-anchor"></span>
    <contact></contact>
    <footer-row></footer-row>
  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import FooterRow from './components/FooterRow.vue';

export default {
  name: 'app',
  components: {
    HeaderRow,
    Navbar,
    FooterRow,
    About,
    Projects,
    Contact
  },
  mounted() {
    this.$ga.page({
      page: '/',
      title: 'Home page',
      location: window.location.href
    })
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
    font-family: 'Raleway', sans-serif;
  }

  #app {
    width: 100%;
  }

  .section-anchor {
    display: block;
    height: 60px;
    margin-top: -60px;
    visibility: hidden;
  }

</style>
