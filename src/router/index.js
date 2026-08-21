import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Connect from '../views/Connect.vue';
import Rules from '../views/Rules.vue';
import Donation from '../views/Donation.vue'
import Changelog from '../views/Changelog.vue';

// Compatibilidad con links viejos en formato hash (ej: /#/reglas), de antes
// de pasar a URLs limpias (createWebHistory). Sin esto, alguien que entre con
// un link viejo guardado (favoritos, mensajes de discord, etc.) terminaria
// viendo el Home en vez de la pagina que esperaba, porque en history mode el
// router resuelve la ruta a partir de location.pathname, no del hash.
// Esto tiene que correr antes de createRouter/createWebHistory, que ya leen
// window.location en el momento en que se crean.
if (window.location.hash.startsWith('#/')) {
    const cleanPath = window.location.hash.slice(1);
    window.history.replaceState(null, '', cleanPath + window.location.search);
}

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/como-ingresar', name: 'Como ingresar', component: Connect },
    { path: '/reglas', name: 'Reglas', component: Rules },
    { path: '/donaciones', name: 'Donaciones', component: Donation },
    { path: '/cambios', name: 'Cambios', component: Changelog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
