<template>
  <div id="navbar">
      <ul class="nav-list">
          <li class="nav-item"><router-link class="nav-link" to="/">home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">about</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/experience">experience</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">contact</router-link></li>
          <div class="hamburger-icon" @click="hamburgerMenu" :class="{change: isHamburgerMenuActive}">
              <div class="bar-one"></div>
              <div class="bar-two"></div>
              <div class="bar-three"></div>
          </div>
      </ul>
      <ul class="nav-list-mobile" :class="{active: isHamburgerMenuActive}">
          <li class="nav-item"><a class="nav-link" href="#header-row">home</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills-section">about</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects-section">experience</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact-section">contact</a></li>
      </ul>
  </div>
</template>

<script>
// import NavbarItem from './NavbarItem.vue';

export default {
    name: 'navbar',
    components: {
      // NavbarItem
    },
    data() {
        return {
            isHomeActive: false,
            isSkillsActive: false,
            isProjectsActive: false,
            isContactActive: false,
            isHamburgerMenuActive: false
        }
    },
    methods: {
        hamburgerMenu: function () {
            this.isHamburgerMenuActive = !this.isHamburgerMenuActive;
        },
      scrollHandle: function () {
          // console.log('window height: ' + window.innerHeight);
          // console.log('scroll position: ' + window.scrollY);
          //
          // var windowHeight = window.innerHeight;
          // var scrollPosition = window.scrollY;
          // switch (scrollPosition) {
          //     case scrollPosition > windowHeight + 3 *
          // }
      }
    },
    created() {
        window.addEventListener('scroll', this.scrollHandle);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollHandle);
    }
    // computed: {
    //   isHomeActive: function () {
    //       // console.log(window.innerHeight);
    //       return window.innerHeight
    //   }
    // }
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
      z-index: 999;
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

  .nav-list-mobile {
      /*display: none;*/
      display: flex;
      list-style-type: none;
      width: 100%;
      /*height: 100%;*/
      margin: 0;
      /*padding: 15px 0;*/
      padding: 0;
      align-items: center;
      flex-direction: column;
      background: #333333;
      border-top: 2px solid #ff0000;
      border-bottom: 2px solid #ff0000;
      transition: height .3s ease-out;
      height: 0;
      overflow: hidden;
  }

  .nav-list-mobile .nav-item {
      margin: 5px 0;
  }

  .nav-list-mobile .nav-item:first-child {
      margin-top: 15px;
  }

  .nav-list-mobile .nav-item:last-child {
      margin-bottom: 15px;
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

  .hamburger-icon {
      display: none;
      cursor: pointer;
      margin-left: auto;
      margin-right: 1em;
  }

  .hamburger-icon:hover .bar-one,
  .hamburger-icon:hover .bar-two,
  .hamburger-icon:hover .bar-three {
      background-color: #ff0000;
  }

  .bar-one, .bar-two, .bar-three {
      width: 35px;
      height: 5px;
      background-color: #fff;
      margin: 6px 0;
      transition: 0.4s;
  }

  .change .bar-one {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar-two {opacity: 0;}

  .change .bar-three {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
  }

    @media (max-width: 768px) {
        .hamburger-icon {
            display: inline-block;
        }

        .nav-list .nav-item {
            display: none;
        }

        .nav-list-mobile.active {
            /*display: flex;*/
            height: 137.33px;
        }
    }

</style>
