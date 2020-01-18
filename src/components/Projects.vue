<template>
  <div id="projects">
    <h1 class="section-title">EXPERIENCE</h1>
    <p>My experience involves</p>
    <p>Recently finished project: this portfolio :)</p>
    <div class="projects-grid">
      <project-panel v-for="project in projects"
                     :image-src="project.imageName"
                     :title="project.title"
                     :description="project.description"
                     :link="project.link">
      </project-panel>
    </div>
    <p>
      <a class="projects-icon-link" href="https://github.com/DanKolodziej" target="_blank">
        <font-awesome-icon :icon="[ 'fab', 'github-square' ]" /></a>
      <a class="projects-link" href="https://github.com/DanKolodziej"
         target="_blank">Github (only personal projects)</a>
    </p>
  </div>
</template>

<script>
  import ProjectPanel from './ProjectPanel.vue';

export default {
  name: 'projects',
  components: {
    ProjectPanel
  },
  data(){
    return {
      projects: [
        { imageName: 'webpack.png', title: 'SWM',
          description: 'This is a placeholder description', link: '' },
        { imageSrc: 'webpack.png', title: 'Sound Property Cash Flow Calculator',
          description: 'Calculator that calculates cash flows for real estate investors.', link: 'https://soundproperty.com.au/calculator/' },
        { imageSrc: 'webpack.jpg', title: 'Erasmus Enrollment Web App for Foreign Students',
          description: 'This is a placeholder description', link: '' },
      ]
    }
  }
}
</script>

<style scoped>

  #projects {
    /*background-color: #656565;*/
    background-color: #222222;
    width: 100%;
    /*height: 50em;*/
    /* margin: 0; */
    text-align: center;
    padding-bottom: 40px;
  }

  .section-title {
      display: inline-block;
      width: auto;
      margin: 1em auto;
      text-align: center;
      border-bottom: 2px solid #ff0000;
  }

  .section-title+p {
    margin-top: 0;
  }

  .projects-grid {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .projects-icon-link {
    text-decoration: none;
    color: #0086da;
  }

  .projects-link {
    color: #0086da;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
  }

  .projects-link:hover {
    border-bottom: 1px solid;
  }

  @media (max-width: 550px) {
    .projects-grid {
      flex-direction: column;
    }
  }

</style>