var nome = localStorage.getItem("nome");
const limiteDiario = 3;

window.addEventListener("load", function() {
  const ultimaExibicao = localStorage.getItem("ultimaExibicao");

  if (!ultimaExibicao || !mesmoDia(new Date(ultimaExibicao), new Date())) {
    // Se não houve exibição anterior hoje, ou se a data é nula, exiba a notificação
    exibirNotificacao();
  }
});

function exibirNotificacao() {
  // Verificar se o limite diário não foi atingido
  const contadorNotificacoes = parseInt(localStorage.getItem("contadorNotificacoes")) || 0;
  if (contadorNotificacoes < limiteDiario) {
    // Solicitar permissão para enviar notificações
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const options = {
            body: 'Não encontrou o anime que procura? então faça o pedido no menu!,
            icon: 'Sukuna.png'
          };

          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(`Olá ${nome}`, options);

            // Atualizar o contador de notificações exibidas
            localStorage.setItem("contadorNotificacoes", contadorNotificacoes + 1);

            // Atualize a data da última exibição
            localStorage.setItem("ultimaExibicao", new Date().toISOString());
            
            // Adiciona um ouvinte de evento de clique à notificação
            registration.getNotifications().then(notifications => {
              notifications.forEach(notification => {
                notification.addEventListener("click", function() {
                  window.open("https://cmstudioapps.github.io/CM-TUBE");
                });
              });
            });
          });
        }
      });
    } else {
      console.error('Seu navegador não suporta notificações.');
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(error => {
          console.error('Erro ao registrar o Service Worker:', error);
        });
    }
  }
}

function mesmoDia(data1, data2) {
  return (
    data1.getFullYear() === data2.getFullYear() &&
    data1.getMonth() === data2.getMonth() &&
    data1.getDate() === data2.getDate()
  );
}