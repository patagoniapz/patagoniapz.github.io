import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import es from './locales/es.json';

const messages = {
    en: en,
    es: es
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    legacy: false,
    globalInjection: true,
});

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount('#app');
