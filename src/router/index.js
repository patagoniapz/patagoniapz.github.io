import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Connect from '../views/Connect.vue';
import Rules from '../views/Rules.vue';
import Donation from '../views/Donation.vue'
import Changelog from '../views/Changelog.vue';
import Crafting from '../views/Crafting.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/como-ingresar', name: 'Como ingresar', component: Connect },
    { path: '/reglas', name: 'Reglas', component: Rules },
    { path: '/donaciones', name: 'Donaciones', component: Donation },
    { path: '/cambios', name: 'Cambios', component: Changelog },
    { path: '/crafteos', name: 'Crafteos', component: Crafting },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
