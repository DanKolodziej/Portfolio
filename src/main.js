import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faJs, faVuejs, faPhp, faSymfony, faHtml5, faCss3Alt, faWordpress,
  faLinkedinIn, faGithub, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faJs, faVuejs, faPhp, faSymfony, faHtml5, faCss3Alt, faWordpress,
    faLinkedinIn, faArrowRight, faGithub, faLinkedin, faGithubSquare, faEnvelopeSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
