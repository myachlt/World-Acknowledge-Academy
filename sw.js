// Service worker : l'application fonctionne hors ligne après la première visite.
const CACHE = "wka-0.3.20261122";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Page : réseau d'abord (pour recevoir les mises à jour), cache si hors ligne
  if (e.request.mode === "navigate") { e.respondWith(fetch(e.request).then(r => { caches.open(CACHE).then(c => c.put("index.html", r.clone())); return r; }).catch(() => caches.match("index.html"))); return; }
  // Polices et icônes : cache d'abord
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname))
    e.respondWith(caches.match(e.request).then(m => m || fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })));
});
