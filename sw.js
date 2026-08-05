/* Marujo Digital — Service Worker (PWA + OneSignal)
   Escopo: /  |  Compatível com installabilidade do Chrome e TWA/Play Store
   OneSignal é importado aqui para não haver conflito de SW na raiz. */

importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

const CACHE = 'marujo-v1';
const PRECACHE = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/imagens/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Não cacheia APIs, proxies, analytics nem OneSignal
  if (
    url.pathname.startsWith('/api') ||
    url.hostname.includes('workers.dev') ||
    url.hostname.includes('bronxyshost') ||
    url.hostname.includes('onesignal') ||
    url.hostname.includes('googlesyndication') ||
    url.hostname.includes('google-analytics') ||
    url.hostname.includes('pagead2')
  ) {
    return;
  }

  // Network-first com fallback para cache (bom para conteúdo que muda)
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => cached || caches.match('/'))
      )
  );
});
