document.getElementById('build-button').addEventListener('click', function() {
  const head = document.querySelector('input[name="head"]:checked').value;
  const body = document.querySelector('input[name="body"]:checked').value;
  const energy = document.querySelector('input[name="energy"]:checked').value;

  let robotDescription = '';
  let robotImage = '';

  // Configurações da cabeça do robô
  switch (head) {
    case 'camera':
      robotDescription += 'Cabeça com câmera para monitoramento e sensores vitais. ';
      robotImage += '<img src="camera_head.jpg" alt="Cabeça com câmera">';
      break;
    case 'microfone':
      robotDescription += 'Cabeça com microfone para reconhecimento de voz e comandos de emergência. ';
      robotImage += '<img src="microfone_head.jpg" alt="Cabeça com microfone">';
      break;
    case 'sensor':
      robotDescription += 'Cabeça com sensores térmicos e de batimentos cardíacos para monitorar a saúde. ';
      robotImage += '<img src="sensor_head.jpg" alt="Cabeça com sensores">';
      break;
  }

  // Configurações do corpo
  switch (body) {
    case 'movel':
      robotDescription += 'Corpo móvel com rodas, capaz de se mover em terrenos difíceis e em áreas de risco. ';
      robotImage += '<img src="movel_body.jpg" alt="