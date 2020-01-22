import Vue from 'vue';
import App from './App.vue';
import './assets/css/styles.css';
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faEnvelopeSquare, faAngleDoubleUp, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs, faPhp, faSymfony, faHtml5, faCss3Alt, faWordpress,
  faLinkedinIn, faGithub, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faJs, faVuejs, faPhp, faSymfony, faHtml5, faCss3Alt, faWordpress,
    faLinkedinIn, faArrowRight, faGithub, faLinkedin, faGithubSquare, faEnvelopeSquare, faAngleDoubleUp, faFilePdf);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
