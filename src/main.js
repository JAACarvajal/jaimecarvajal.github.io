import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia'
import globalPlugin from './plugins/global';
import scrollMixin from './mixins/scroll-mixin';
import animationMixin from './mixins/custom-animation-mixin';

// Set up font awesome the library
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faUser, faLaptopCode, faMoon, faAngleDown, faAngleUp, faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faVuejs, faHtml5, faCss3, faPhp, faLaravel, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faUserSecret,
    faMoon,
    faSun,
    faAngleDown,
    faAngleUp,
    faLaptopCode,
    faUser,
    faLinkedin,
    faGithub,
    faInstagram,
    faVuejs,
    faHtml5,
    faCss3,
    faPhp,
    faLaravel,
    faJs,
    faReact
);

const pinia = createPinia();
const app = createApp(App);
app.use(globalPlugin, {});
app.use(pinia);
app.mixin(scrollMixin);
app.mixin(animationMixin);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
