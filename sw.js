/* Marujo Digital — Service Worker (PWA + OneSignal)
   Versão melhorada para offline
*/

importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

const CACHE = 'marujo-v2'; // mudei a versão para forçar atualização

const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/imagens/logo.png',
  '/sinais.html',
  '/apitos.html',
  '/assistente.html',
  '/contato.html',
  '/sobre.html',
  '/marujoconsultas.html',
  '/marujoconsuta2.html',
  '/marujoflix.html',
  '/audiomod.html',
  '/pwa-register-snippet.html'
];

// Instalação
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(PRECACHE).catch((err) => {
        console.log('Erro ao pré-carregar alguns arquivos:', err);
      });
    })
  );
  self.skipWaiting();
});

// Ativação (limpa caches antigos)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Estratégia de cache
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Só trata requisições GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Não cacheia essas coisas
  if (
    url.pathname.startsWith('/api') ||
    url.hostname.includes('workers.dev') ||
    url.hostname.includes('bronxyshost') ||
    url.hostname.includes('onesignal') ||
    url.hostname.includes('googlesyndication') ||
    url.hostname.includes('google-analytics') ||
    url.hostname.includes('pagead2') ||
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis')
  ) {
    return;
  }

  // Network First com fallback para cache
  event.respondWith(
    fetch(req)
      .then((res) => {
        // Só cacheia respostas válidas do mesmo origin
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => {
            cache.put(req, clone);
          });
        }
        return res;
      })
      .catch(() => {
        return caches.match(req).then((cached) => {
          // Se não achar a página específica, tenta a home
          return cached || caches.match('/') || caches.match('/index.html');
        });
      })
  );
});
