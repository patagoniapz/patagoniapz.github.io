const SITE_NAME = 'Patagonia PZ';
const SITE_URL = 'https://patagoniapz.com.ar';

// Actualiza el <title>, la meta description, el canonical y las etiquetas
// Open Graph / Twitter Card segun la ruta actual (route.meta.title /
// route.meta.description, definidos en router/index.js).
//
// Ojo: esto ayuda a usuarios reales (titulo de pestana/marcadores) y a
// crawlers que ejecutan JavaScript (Googlebot). NO ayuda a las vistas
// previas de links que arman bots que no ejecutan JS (Discord, WhatsApp,
// Twitter/X, Facebook): esos siempre van a ver el HTML estatico de
// index.html tal cual, sin importar que pagina se comparta, porque el
// sitio no tiene pre-renderizado por ruta. Los valores por defecto en
// index.html estan pensados para ese caso: describen el sitio en general.
export function applyRouteMeta(route) {
    const title = route.meta?.title ?? `${SITE_NAME} — comunidad de Project Zomboid`;
    const description = route.meta?.description ?? 'Servidor comunitario de Project Zomboid alojado en Argentina.';
    const url = SITE_URL + route.path;

    document.title = title;

    setMetaByName('description', description);
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);

    setCanonical(url);
}

function setMetaByName(name, content) {
    upsertTag(`meta[name="${name}"]`, () => {
        const el = document.createElement('meta');
        el.setAttribute('name', name);
        return el;
    }, content);
}

function setMetaByProperty(property, content) {
    upsertTag(`meta[property="${property}"]`, () => {
        const el = document.createElement('meta');
        el.setAttribute('property', property);
        return el;
    }, content);
}

function setCanonical(href) {
    upsertTag('link[rel="canonical"]', () => {
        const el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        return el;
    }, href, 'href');
}

function upsertTag(selector, create, value, attr = 'content') {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = create();
        document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
}
