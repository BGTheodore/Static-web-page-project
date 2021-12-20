if ('serviceWorker' in navigator){
    window.addEventListener('load', function ()
    {
        navigator.serviceWorker.register('sw.js', {scope: '/static-web-pages-master/'})
            .then(function (registration){
                console.log("L'enregistrement du service worker s'est bien passe, il est enregistre sur le scope "+registration.scope)
            }, function (error){
                console.log("Une erreur s'est produite lors de l'enregistrement du service worker");
            });
    });
}