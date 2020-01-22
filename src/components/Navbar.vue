<template>
  <div id="navbar">
      <ul class="nav-list">
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#header-row')" :class="{active: isHomeActive}">home</a></li>
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#about-section')" :class="{active: isAboutActive}">about</a></li>
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#projects-section')" :class="{active: isExperienceActive}">experience</a></li>
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#contact-section')" :class="{active: isContactActive}">contact</a></li>
          <div class="hamburger-icon" @click="hamburgerMenu" :class="{change: isHamburgerMenuActive}">
              <div class="bar-one"></div>
              <div class="bar-two"></div>
              <div class="bar-three"></div>
          </div>
      </ul>
      <ul class="nav-list-mobile" :class="{active: isHamburgerMenuActive}">
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#header-row')" :class="{active: isHomeActive}">home</a></li>
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#about-section')" :class="{active: isAboutActive}">about</a></li>
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#projects-section')" :class="{active: isExperienceActive}">experience</a></li>
          <li class="nav-item"><a class="nav-link" @click.prevent="scroll('#contact-section')" :class="{active: isContactActive}">contact</a></li>
      </ul>
  </div>
</template>

<script>

export default {
    name: 'navbar',
    data() {
        return {
            isHomeActive: false,
            isAboutActive: false,
            isExperienceActive: false,
            isContactActive: false,
            isHamburgerMenuActive: false
        }
    },
    methods: {
        hamburgerMenu: function () {
            this.isHamburgerMenuActive = !this.isHamburgerMenuActive;
        },
        scroll: function (href) {
            document.querySelector(href).scrollIntoView({behavior: 'smooth'});
            this.isHamburgerMenuActive = false;
        },
      scrollHandle: function () {
          var scrollPosition = window.scrollY;
          var sections = document.querySelectorAll('.section-anchor');
          if (scrollPosition >= sections[2].offsetTop-60
              || (window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
              this.isHomeActive = false;
              this.isAboutActive = false;
              this.isExperienceActive = false;
              this.isContactActive = true;
          } else if (scrollPosition >= sections[1].offsetTop-60) {
              this.isHomeActive = false;
              this.isAboutActive = false;
              this.isExperienceActive = true;
              this.isContactActive = false;
          } else if (scrollPosition >= sections[0].offsetTop-60) {
              this.isHomeActive = false;
              this.isAboutActive = true;
              this.isExperienceActive = false;
              this.isContactActive = false;
          } else {
              this.isHomeActive = true;
              this.isAboutActive = false;
              this.isExperienceActive = false;
              this.isContactActive = false;
          }
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
      border-bottom: 2px solid #333;
     transition: 350ms ease;
      cursor: pointer;
  }

  .nav-link:hover, .nav-link.active {
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
