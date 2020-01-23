import Vue from 'vue';
import App from './App.vue';
import './assets/css/styles.css';
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faEnvelopeSquare, faAngleDoubleUp, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faSymfony, faWordpress,
  faLinkedinIn, faGithub, faLinkedin, faGithubSquare, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhp, faSymfony, faWordpress,
    faLinkedinIn, faArrowRight, faNpm, faGithub, faLinkedin, faGithubSquare, faGitAlt, faEnvelopeSquare, faAngleDoubleUp, faFilePdf);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
