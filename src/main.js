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
import { faUserSecret, faBars, faXmark, faUser, faCircle, faHouse, faIdBadge, faLaptopCode, faMoon, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faInstagram, faVuejs, faHtml5, faCss3, faPhp, faLaravel, faJs, faReact, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faUserSecret, 
    faHouse,
    faMoon,
    faAngleDown,
    faLaptopCode,
    faIdBadge,
    faCircle,
    faCircleRegular,
    faBars,
    faXmark,
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
