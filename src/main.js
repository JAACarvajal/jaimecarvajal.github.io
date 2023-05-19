import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Set up font awesome the library
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faBars, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faBars, faXmark, faUser, faLinkedin, faGithub, faInstagram);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
