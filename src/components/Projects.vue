<template>
  <div id="projects" class="section">
    <h1 class="section-title">EXPERIENCE</h1>
    <div class="projects-grid">
      <project-panel v-for="project in projects"
                     :image-src="project.imageName"
                     :title="project.title"
                     :description="project.description"
                     :description-two="project.descriptionTwo"
                     :technologies="project.technologies"
                     :link="project.link">
      </project-panel>
    </div>
    <p class="experience-paragraph">My experience involves 7 months of work + my personal projects</p>
    <p class="experience-paragraph">Project I am currently working on: Save Animals</p>
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
        { imageName: 'save_animals.png', title: 'Save Animals',
          description: 'A web application which allows helps users find animals for adoption or lost.' +
                  ' Also contains a subpage with scraped data from wikipedia of endangered animal ' +
                  ' species from Poland. Only available language is polish',
          descriptionTwo: '',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'SASS', 'PHP', 'Symfony Framework', 'MySQL', 'Webpack'],
          link: 'http://vps-2b04629e.vps.ovh.net/' },
        { imageName: 'swm_screen.png', title: 'SWM',
          description: 'Duties: development of a website made with Wordpress, ' +
                  ' adding new interface modules for page builder Elementor, ' +
                  'various ui design changes, ' +
                  'backend functionality, for example login system for 2 different user roles',
          descriptionTwo: '',
          technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SASS', 'PHP', 'Wordpress', 'MySQL', 'Webpack'],
          link: '' },
        { imageName: 'calculator.png', title: 'Cash Flow Calculator',
          description: 'Duty: development of a calculator that calculates cash flows for real estate investors.',
          descriptionTwo: 'The calculator was made in Vue.js and added to an existing website as a wordpress plugin.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'PHP', 'Wordpress', 'MySQL', 'Webpack'],
          link: 'https://soundproperty.com.au/calculator/' },
        { imageName: 'erasmus.png', title: 'Erasmus Enrollment Web App for Foreign Students',
          description: 'BSc Thesis Project: A web application supporting enrollment for courses' +
                  ' for foreign students as part of the Erasmus+ exchange.',
          descriptionTwo: 'Mainly database operations, for example adding/editing/deleting a user/course, ' +
                  'displaying appropriate data etc.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'Symfony Framework', 'MySQL'],
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
      if (scrollPosition > projectsGridPosition) {
        projectsGrid.style.visibility = 'visible';
        projectsGrid.style.opacity = '1';
        projectsGrid.style.transform = 'none';
      }
      if (scrollPosition > paragraphsPosition) {
        paragraphs[0].style.visibility = 'visible';
        paragraphs[0].style.opacity = '1';
        paragraphs[0].style.transform = 'scale(1)';
        paragraphs[1].style.visibility = 'visible';
        paragraphs[1].style.opacity = '1';
        paragraphs[1].style.transform = 'scale(1)';
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
    justify-content: center;
    flex-wrap: wrap;
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