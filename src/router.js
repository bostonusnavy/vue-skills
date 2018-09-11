import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ],
});