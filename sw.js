const V='bt-v6';
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(['/','index.html']).catch(()=>{}))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
