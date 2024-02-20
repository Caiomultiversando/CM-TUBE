// service-worker.js

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  // Aqui você pode adicionar lógica para lidar com o clique na notificação
  console.log('Notificação clicada!');
});

self.addEventListener('notificationclose', function(event) {
  // Aqui você pode adicionar lógica para lidar com o fechamento da notificação
  console.log('Notificação fechada!');
});

self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'Eu.png',
  };

  event.waitUntil(
    self.registration.showNotification('Funciona mesmo?', options)
  );
});