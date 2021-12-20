var CACHE_NAME = 'my-cache'

var fileToAddToCache = [
    '/static-web-pages-master/listing.html',
    '/static-web-pages-master/css/style-list.css',
    '/static-web-pages-master/assets/favicon.ico',
    '/static-web-pages-master/placeholder.png',
    '/static-web-pages-master/javascript/main.js',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1Mu4mxK.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
];

self.addEventListener('install',function (event){
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache){
                return cache.addAll(fileToAddToCache);
            })
    );
});

self.addEventListener('fetch', function (event){

    let  externalPicRegexp = /https:\/\/picsum.photos\/(.)*/;

    if(event.request.url.match(externalPicRegexp)) {
        event.respondWith(
            caches.match(event.request)
                .then(function (response) {
                    return response;
                })
        )
    }
    else{
        event.respondWith(
            caches.match(event.request)
                .then(function (response){
                    return response;
                })
        )
    }
})