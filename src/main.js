import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/css/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs, faPhp, faSymfony, faHtml5, faCss3Alt, faWordpress,
  faLinkedinIn, faGithub, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import HeaderRow from "./components/HeaderRow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

library.add(faJs, faVuejs, faPhp, faSymfony, faHtml5, faCss3Alt, faWordpress,
    faLinkedinIn, faArrowRight, faGithub, faLinkedin, faGithubSquare, faEnvelopeSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'home', components: {
    default: HeaderRow,
      a: Skills,
      b: Projects,
      c: Contact
  }}
  // { path: '/about', component: Skills },
  // { path: '/experience', component: Projects },
  // { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
