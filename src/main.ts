import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// /* import specific icons */
import { faBars,faXmark, faEnvelope, faArrowRight, faDatabase} from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedinIn, faJs, faVuejs, faNode, faLaravel, faPhp, faCss3, faDocker, faJira} from '@fortawesome/free-brands-svg-icons';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBars, faXmark,faEnvelope,faArrowRight,faJs,faVuejs,faNode, faDocker, faLaravel,faPhp, faGithub,faDatabase, faCss3,faGithub, faLinkedinIn, faJira)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
