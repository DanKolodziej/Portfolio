<template>
  <div id="about" class="section">
      <h1 class="section-title">ABOUT</h1>
      <div class="skills-row">
          <div class="about-me-col">
              <img class="portrait" src="@/assets/images/SAVE_20191126_201321.jpg"/>
              <p class="about-paragraph">
                  I'm an aspiring full-stack web developer from Wrocław, Poland.
                  As a web developer I am driven by desire to create new things,
                  passion and determination to improve my skills.
                  While working on a project I give 100% of myself by
                  analytical thinking and paying attention to details.
                  I have gained some experience working as a freelancer.
                  I also have a bachelor of science degree in computer science
                  from Wrocław University of Science and Technology.
              </p>
          </div>
          <div class="technology-col">
          Main technologies I've worked with:
              <div class="technology-grid">
                  <span class="technology">
                     <img class="technology-icon image-icon" src="@/assets/images/html5.png" />
                      <span class="technology-name">HTML</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/css3.png" />
                      <span class="technology-name">CSS</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/javascript.png" />
                      <span class="technology-name">Javascript</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/vuejs.png" />
                      <span class="technology-name">Vue.js</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/jquery.png" />
                      <span class="technology-name">jQuery</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/bootstrap.png" />
                      <span class="technology-name">Bootstrap</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/sass.png" />
                      <span class="technology-name">Sass</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #787CB5" :icon="[ 'fab', 'php' ]" size="4x" />
                      <span class="technology-name">PHP</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #000" :icon="[ 'fab', 'symfony' ]" size="4x" />
                      <span class="technology-name">Symfony</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #00749C" :icon="[ 'fab', 'wordpress' ]" size="4x" />
                      <span class="technology-name">Wordpress</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/mysql.png" />
                      <span class="technology-name">MySQL</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #F1502F" :icon="[ 'fab', 'git-alt' ]" size="4x" />
                      <span class="technology-name">Git</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/linux.png" />
                      <span class="technology-name">Linux</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #CC3534" :icon="[ 'fab', 'npm' ]" size="4x" />
                      <span class="technology-name">NPM</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon image-icon" src="@/assets/images/webpack.png" />
                      <span class="technology-name">Webpack</span>
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'about',
    methods: {
        scrollHandle: function () {
            var scrollPosition = window.scrollY + window.innerHeight;
            var aboutCol = document.querySelector('#about .about-me-col');
            var aboutPosition = aboutCol.offsetTop;
            var technologyCol = document.querySelector('#about .technology-col');
            var technologyPosition = technologyCol.offsetTop ;
            if (scrollPosition > aboutPosition) {
                aboutCol.style.visibility = 'visible';
                aboutCol.style.opacity = '1';
                aboutCol.style.transform = 'translateX(0)';
            }
            if (scrollPosition > technologyPosition) {
                technologyCol.style.visibility = 'visible';
                technologyCol.style.opacity = '1';
                technologyCol.style.transform = 'translateX(0)';
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.scrollHandle);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollHandle);
    }
}
</script>

<style scoped>

  #about {
      width: 100%;
      text-align: center;
      padding: 100px 0;
  }

  .section-title {
      display: inline-block;
      width: auto;
      margin: 0 auto 1em;
      text-align: center;
      border-bottom: 2px solid #ff0000;
  }

  .skills-row {
      display: flex;
      max-width: 1280px;
      margin: 0 auto;
      overflow: hidden;
  }

  .about-me-col {
      flex: 48%;
      padding: 0 1% 1% 1%;
      margin: 1%;
      transition: 450ms ease;
      transform: translateX(-100px);
      opacity: 0;
  }

  .about-paragraph {
      width: 100%;
      margin: 1em auto;
  }

  .name {
      font-style: italic;
      font-weight: bold;
  }

  .portrait {
      max-width: 150px;
      border-radius: 5px;
  }

  .technology-col {
      background-color: #fff;
      border-radius: 5px;
      color: #333333;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
      padding: 1% 0;
      margin: 1%;
      font-weight: bold;
      border: 2px solid #ff0000;
      transition: 450ms ease;
      transform: translateX(100px);
      opacity: 0;
  }

  .technology-grid {
      flex: 48%;
      max-width: 500px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
  }

  .technology {
      margin: 2% 0;
      width: 20%;
  }

  .image-icon {
      height: 60px;
  }

  .technology-name {
      font-weight: bold;
      text-align: center;
      display: block;
  }

  @media (max-width: 1024px) {
      .technology-grid {
          max-width: 350px;
      }

      .technology {
          width: 25%;
      }
  }

  @media (max-width: 768px) {
      .skills-row {
          flex-direction: column;
      }

      .technology-grid {
          max-width: none;
      }

      .technology {
          width: 20%;
      }
    }

  @media (max-width: 550px) {
      #about {
          padding: 70px 0;
      }

      .technology {
          width: 25%;
      }
  }

</style>