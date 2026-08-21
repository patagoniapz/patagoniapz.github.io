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
    {
        path: '/', name: 'Home', component: Home, meta: {
            title: 'Patagonia PZ — Servidor de Project Zomboid en Argentina',
            description: 'Patagonia PZ es un servidor comunitario de Project Zomboid alojado en Argentina. PVE, sin wipes, build 42.20.3. Sumate a la comunidad y jugá con nosotros.',
        }
    },
    {
        path: '/como-ingresar', name: 'Como ingresar', component: Connect, meta: {
            title: 'Cómo conectarse — Patagonia PZ',
            description: 'IP, puerto y datos para conectarte al servidor de Project Zomboid Patagonia PZ: PVE, sin wipes, build 42.20.3.',
        }
    },
    {
        path: '/reglas', name: 'Reglas', component: Rules, meta: {
            title: 'Reglas — Patagonia PZ',
            description: 'Reglas de convivencia del servidor PVE de Patagonia PZ: qué está permitido y qué no, para disfrutar Project Zomboid en comunidad.',
        }
    },
    {
        path: '/donaciones', name: 'Donaciones', component: Donation, meta: {
            title: 'Donaciones — Patagonia PZ',
            description: 'Cómo colaborar con el costo mensual del servidor Patagonia PZ. Mercado Pago para Argentina, Paypal para el resto del mundo.',
        }
    },
    {
        path: '/cambios', name: 'Cambios', component: Changelog, meta: {
            title: 'Cambios — Patagonia PZ',
            description: 'Historial de cambios, mods y novedades del servidor de Project Zomboid Patagonia PZ.',
        }
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
