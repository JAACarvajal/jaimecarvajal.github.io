import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import helperPlugin from './plugins/helpers';
import scrollMixin from './mixins/scroll-mixin';
import animationMixin from './mixins/custom-animation-mixin';

// Set up font awesome the library
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faBars, faXmark, faUser, faCircle, faHouse, faIdBadge, faLaptopCode, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faInstagram, faVuejs, faHtml5, faCss3, faPhp, faLaravel, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faUserSecret, 
    faHouse,
    faMoon,
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

const app = createApp(App);
app.mixin(scrollMixin);
app.mixin(animationMixin);
app.use(helperPlugin, {});
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
