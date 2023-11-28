const CACHE_NAME= 'Cake waras';
//Usar el evento install para pre-cache todos los recursos iniciales

self.addEventListener('install', event =>{
    event.waitUntil((async()=>{
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
            '/',
            '/app.js',
            '/mail.js',
            '/script-mapa.js',
            '/script.js',
            '/iconos_styles.css',
            '/style.css',
            '/estilo.css',
            '/styles-comen.css',
            '/manifest_styles.css',
            '/estilo-mapa.css',
            '/img',
            '/images',
        ]);
    })());
});
self.addEventListener('fetch', event =>{
    event.respondWith((async()=>{
        const cache = await caches.open(CACHE_NAME);


        //Obtener los recursos desde el cache
        const cachedResponse = await cache.match(event.request);
        if(cachedResponse){
            return cachedResponse;
        }else{
            try{
                //Si el recurso no esta en el cache 
                //Intentamos en la red
                const fetchResponse = await fetch(event.request);
                // Guarda el recurso en la cache y la regresa
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
            }catch(e){
                //La red falló
            }
        }
    })());
});