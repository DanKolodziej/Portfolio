<template>
  <div id="projects" class="section">
    <h1 class="section-title">EXPERIENCE</h1>
    <p class="experience-paragraph">My experience involves 7 months of work + my BSc Thesis project</p>
    <p class="experience-paragraph">Recently finished project: this portfolio :)</p>
    <div class="projects-grid">
      <project-panel v-for="project in projects"
                     :image-src="project.imageName"
                     :title="project.title"
                     :description="project.description"
                     :technologies="project.technologies"
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
        { imageName: 'swm_screen.png', title: 'SWM',
          description: 'Development of a website made on wordpress,' +
                  ' adding new interface modules for the page builder Elementor',
          technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SASS', 'PHP', 'Wordpress', 'MySQL', 'Webpack'],
          link: '' },
        { imageName: 'calculator.png', title: 'Sound Property Cash Flow Calculator',
          description: 'Calculator that calculates cash flows for real estate investors.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'PHP', 'Wordpress', 'MySQL', 'Webpack'],
          link: 'https://soundproperty.com.au/calculator/' },
        { imageName: 'erasmus.png', title: 'Erasmus Enrollment Web App for Foreign Students',
          description: 'A web application supporting enrollment for courses' +
                  ' for foreign students as part of the Erasmus+ exchange',
          technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'Symfony', 'MySQL'],
          link: '' },
      ]
    }
  },
  methods: {
    scrollHandle: function () {
      var scrollPosition = window.scrollY + window.innerHeight;
      var paragraphs = document.querySelectorAll('#projects p');
      var paragraphsPosition = paragraphs[2].offsetTop  + paragraphs[2].clientHeight;
      var projectsGrid = document.querySelector('#projects .projects-grid');
      var projectsGridPosition = projectsGrid.offsetTop;
      if (scrollPosition > paragraphsPosition) {
        paragraphs[0].style.visibility = 'visible';
        paragraphs[0].style.opacity = '1';
        paragraphs[0].style.transform = 'scale(1)';
        paragraphs[1].style.visibility = 'visible';
        paragraphs[1].style.opacity = '1';
        paragraphs[1].style.transform = 'scale(1)';
      }
      if (scrollPosition > projectsGridPosition) {
        projectsGrid.style.visibility = 'visible';
        projectsGrid.style.opacity = '1';
        projectsGrid.style.transform = 'none';
        paragraphs[2].style.visibility = 'visible';
        paragraphs[2].style.opacity = '1';
        paragraphs[2].style.transform = 'scale(1)';
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

  #projects {
    background-color: #222222;
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

  .section-title+p {
    width: 80%;
    margin: 0 auto 1em;
  }

  .experience-paragraph {
    width: 80%;
    margin: 1em auto;
  }

  .projects-grid {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    transition: 450ms ease;
    transform: scale(0.5);
    opacity: 0;
  }

  .projects-grid p {
    transition: 450ms ease;
    transform: scale(0.5);
    opacity: 0;
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
    border-bottom: 1px solid #222;
    transition: 350ms ease;
  }

  .projects-link:hover {
    border-bottom: 1px solid;
  }

  @media (max-width: 1024px) {
    .projects-grid {
      width: 90%;
    }
  }

  @media (max-width: 550px) {
    #projects {
      padding: 70px 0;
    }

    .projects-grid {
      width: 80%;
      flex-direction: column;
    }
  }

</style>