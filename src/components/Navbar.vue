<template>
  <div id="navbar">
      <ul class="nav-list">
          <li class="nav-item"><a @click="activeHome" class="nav-link" v-bind:class="{ 'active-link': isHomeActive }" href="#header-row">home</a></li>
          <li class="nav-item"><a @click="activeSkills" class="nav-link" v-bind:class="{ 'active-link': isSkillsActive }" href="#skills-section">skills</a></li>
          <li class="nav-item"><a @click="activeProjects" class="nav-link" v-bind:class="{ 'active-link': isProjectsActive }" href="#projects-section">projects</a></li>
          <li class="nav-item"><a @click="activeContact" class="nav-link" v-bind:class="{ 'active-link': isContactActive }" href="#contact-section">contact</a></li>
      </ul>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  name: 'navbar',
  components: {
      NavbarItem
  },
  data () {
    return {
      isHomeActive: false,
      isSkillsActive: false,
      isProjectsActive: false,
      isContactActive: false
    }
  },
  methods: {
    activeHome: function() {
      this.isHomeActive = true;
      this.isSkillsActive = false;
      this.isProjectsActive = false;
      this.isContactActive = false;
    },
    activeSkills: function() {
      this.isSkillsActive = true;
      this.isHomeActive = false;
      this.isProjectsActive = false;
      this.isContactActive = false;
    },
    activeProjects: function() {
      this.isProjectsActive = true;
      this.isSkillsActive = false;
      this.isHomeActive = false;
      this.isContactActive = false;
    },
    activeContact: function() {
      this.isContactActive = true;
      this.isSkillsActive = false;
      this.isProjectsActive = false;
      this.isHomeActive = false;
    }
  }
}
</script>

<style scoped>

  #navbar {
    background-color: #333333;
    width: 100%;
    /* margin: 0; */
    height: 60px;
    position: sticky;
    top: 0;
    border-bottom: 2px solid #ff0000;
  }

  .nav-list {
    display: flex;
    list-style-type: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .nav-item {
    display: inline;
    /* color: #fff; */
    margin: auto 1em;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    /* transition: 0.1s; */
  }

  .nav-link:hover, .active-link {
    color: #ff0000;
    border-bottom: 2px solid #ff0000;
  }

</style>
