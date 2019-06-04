<template>
  <div id="navbar">
      <ul class="nav-list">
          <li class="nav-item"><a class="nav-link" href="#header-row">home</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills-section">skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects-section">projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact-section">contact</a></li>
      </ul>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  name: 'navbar',
  components: {
      NavbarItem
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

  .nav-link:hover {
    color: #ff0000;
    border-bottom: 2px solid #ff0000;
  }

</style>
