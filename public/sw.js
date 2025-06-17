self.addEventListener('push', function (event) {
   if (event.data) {
      const data = event.data.json()
      const options = {
         body: data.body,
         icon: data.icon || '/icon.png',
         badge: '/badge.png',
         vibrate: [100, 50, 100],
         data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
         },
      }
      event.waitUntil(self.registration.showNotification(data.title, options))
   }
})

self.addEventListener('notificationclick', function (event) {
   console.log('Notification click received.')
   event.notification.close()
   event.waitUntil(clients.openWindow('http://localhost:3000'))
})

self.addEventListener('install', (event) => {
   console.log('Service Worker: Installed')
   event.waitUntil(
      caches.open('pwa-cache').then((cache) => {
         return cache.addAll([
            '/',
            '/manifest.json',
            '/icon.png',
            '/badge.png',
            '/images/background.webp',
            '/images/cooking.png',
            '/images/menu.jpeg',
            '/images/pakaos.jpeg',
            '/images/search.png',
            '/images/selective.png',
            '/images/vegetables.jpg',
         ])
      }),
   )
})

self.addEventListener('activate', () => {
   console.log('Service Worker: Activated')
})

self.addEventListener('fetch', (event) => {
   event.respondWith(
      caches.match(event.request).then((response) => {
         return response || fetch(event.request)
      }),
   )
})
