document.getElementById('build-button').addEventListener('click', function() {
  const head = document.getElementById('head-select').value;
  const body = document.getElementById('body-select').value;
  
  let robotDescription = '';

  switch (head) {
    case 'camera':
      robotDescription += 'Cabeça com câmera e sensores avançados. ';
      break;
    case 'microfone':
      robotDescription += 'Cabeça com microfone para reconhecimento de voz. ';
      break;
    case 'sensor':
      robotDescription += 'Cabeça equipada com sensores térmicos. ';
      break;
  }

  switch (body) {
    case 'movel':
      robotDescription += 'Corpo com rodas para movimentação rápida.';
      break;
    case 'fixo':
      robotDescription += 'Corpo fixo, ideal para estações de trabalho.';
      break;
    case 'braços':
      robotDescription += 'Corpo com braços articulados para tarefas manuais.';
      break;
  }

  document.getElementById('robot-display').innerHTML = `<h3>Seu Robô:</h3><p>${robotDescription}</p>`;
});

