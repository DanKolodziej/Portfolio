<template>
  <div id="skills">
      <h1 class="section-title">ABOUT</h1>
      <div class="skills-row">
          <div class="about-me-col">
              <img class="portrait" src="@/assets/images/SAVE_20191126_201321.jpg"/>
              <p>
                  I'm a aspiring junior full-stack web developer from Wroclaw, Poland.
                  As a web developer I am driven by desire to create new things,
                  passion and desire to improve.
                  While working on a new project I give 100% of myself by paying attention to details.
                  I have done work in both front-end and back-end web development.
                  I have a total of 7 months experience working for <span class="name">DKSoft</span>.
                  I also have a bachelor of science degree in computer science.
              </p>
          </div>
          <div class="technology-col">
          Main technologies I've worked with:
              <div class="technology-grid">
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #E44D26" :icon="[ 'fab', 'html5' ]" size="4x" />
                      <span class="technology-name">HTML</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #264de4" :icon="[ 'fab', 'css3-alt' ]" size="4x" />
                      <span class="technology-name">CSS</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #F0DB4F" :icon="[ 'fab', 'js' ]" size="4x" />
                      <span class="technology-name">Javascript</span>
                  </span>
                  <span class="technology">
                      <font-awesome-icon class="technology-icon" style="color: #4fc08d;" :icon="[ 'fab', 'vuejs' ]" size="4x" />
                      <span class="technology-name">Vue.js</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon webpack-icon" src="@/assets/images/jquery.png" />
                      <span class="technology-name">jQuery</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon webpack-icon" src="@/assets/images/bootstrap.png" />
                      <span class="technology-name">Bootstrap</span>
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
                      <img class="technology-icon webpack-icon" src="@/assets/images/mysql.png" />
                      <span class="technology-name">MySQL</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon webpack-icon" src="@/assets/images/sass.png" />
                      <span class="technology-name">Sass</span>
                  </span>
                  <span class="technology">
                      <img class="technology-icon webpack-icon" src="@/assets/images/webpack.png" />
                      <span class="technology-name">Webpack</span>
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'skills'
}
</script>

<style scoped>

  #skills {
    /* background-color: #333333; */
    width: 100%;
    /*height: 50em;*/
    /* margin: 0; */
    text-align: center;
      padding-bottom: 40px;
      /*background-color: #555555;*/
  }

  .section-title {
      display: inline-block;
      width: auto;
      margin: 1em auto;
      text-align: center;
      border-bottom: 2px solid #ff0000;
  }

  .skills-row {
      display: flex;
      max-width: 768px;
      margin: 0 auto;
  }

  .about-me-col {
      flex: 48%;
      padding: 0 1% 1% 1%;
      margin: 1%;
  }

  .name {
      /*font-weight: bold;*/
      font-style: italic;
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
  }

  .technology-grid {
      flex: 48%;
      /*padding: 1% 0;*/
      /*margin: 1%;*/
      /*background-color: #fff;*/
      /*border-radius: 5px;*/
      /*color: #333333;*/
      max-width: 320px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
  }

  .technology-row {
      display: flex;
      justify-content: space-evenly;
      margin: 0 0 5%;
  }

  .technology {
      /*display: flex;*/
      /*flex-direction: column;*/
      /*width: min-content;*/
      /*display: block;*/
      /*flex: 50%;*/
      margin: 2% 0;
      width: 33.33%;
  }

  .technology-icon {
      /*display: block;*/
      /*display: inline-block;*/
  }

  .webpack-icon {
      height: 60px;
  }

  .technology-name {
      /*display: flex;*/
      /*align-items: center;*/
      /*margin-left: 15px;*/
      /*display: inline-block;*/
      font-weight: bold;
      text-align: center;
      display: block;
  }

</style>