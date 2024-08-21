function getDiagnosis() {
    // Cria um array para armazenar os sintomas selecionados
    const symptoms = [];
    // Seleciona todos os checkboxes marcados
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Adiciona o valor de cada checkbox marcado ao array de sintomas
    checkboxes.forEach(checkbox => {
        symptoms.push(checkbox.value);
    });

    // Verifica se há sintomas selecionados
    if (symptoms.length === 0) {
        document.getElementById('result').innerText = "Por favor, selecione ao menos um sintoma.";
        document.getElementById('result').style.color = "red"; // Resultado em vermelho
        return;
    }

    // Inicializa a variável de diagnóstico com uma mensagem padrão
    let diagnosis = "Não foi possível identificar os sintomas. Por favor, consulte um médico.";

    // Cria um conjunto para eliminar duplicatas
    const symptomSet = new Set(symptoms);

    // Verifica combinações de sintomas e atribui um diagnóstico correspondente
    if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('dor de cabeça') && symptomSet.has('náusea') && symptomSet.has('cansaço') && symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser uma condição grave que requer atenção médica imediata.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('dor de cabeça') && symptomSet.has('náusea') && symptomSet.has('cansaço')) {
        diagnosis = "Pode ser uma infecção viral como a gripe. Procure um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('dor de cabeça') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma infecção respiratória. Consulte um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma gripe ou infecção viral. Consulte um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('dor de cabeça') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma infecção ou condição febril. Mantenha-se hidratado e consulte um médico.";
    } else if (symptomSet.has('tosse') && symptomSet.has('dor de cabeça') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma infecção respiratória ou sinusite. Procure orientação médica.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse')) {
        diagnosis = "Pode ser gripe ou COVID-19. Procure um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma gastroenterite ou infecção viral. Mantenha-se hidratado e consulte um médico.";
    } else if (symptomSet.has('febre')) {
        diagnosis = "Pode ser uma febre causada por diversas condições. Monitore os sintomas.";
    } else if (symptomSet.has('tosse')) {
        diagnosis = "Pode ser uma tosse comum ou uma infecção respiratória leve.";
    } else if (symptomSet.has('dor de cabeça') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma enxaqueca ou migrena. Procure um médico.";
    } else if (symptomSet.has('cansaço')) {
        diagnosis = "Pode ser um sinal de estresse, fadiga ou condição crônica. Considere consultar um médico.";
    } else if (symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma indigestão ou outro problema gastrointestinal.";
    } else if (symptomSet.has('cansaço') && symptomSet.has('dor de cabeça')) {
        diagnosis = "Pode ser uma condição de fadiga crônica ou estresse. Consulte um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma infecção viral ou gripe. Consulte um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('cansaço')) {
        diagnosis = "Pode ser uma infecção viral ou condição gripal. Procure um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('cansaço')) {
        diagnosis = "Pode ser uma febre viral ou condição de cansaço intenso. Consulte um médico.";
    } else if (symptomSet.has('tosse') && symptomSet.has('cansaço')) {
        diagnosis = "Pode ser uma infecção respiratória ou condição de fadiga. Procure orientação médica.";
    } else if (symptomSet.has('náusea') && symptomSet.has('cansaço')) {
        diagnosis = "Pode ser um problema gastrointestinal associado ao cansaço. Mantenha-se hidratado e consulte um médico.";
    } else if (symptomSet.has('dor de cabeça') && symptomSet.has('cansaço')) {
        diagnosis = "Pode ser uma condição de estresse ou fadiga. Considere consultar um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser uma infecção respiratória grave, como COVID-19. Procure um médico imediatamente.";
    } else if (symptomSet.has('tosse') && symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser uma condição respiratória grave. Consulte um médico.";
    } else if (symptomSet.has('dor de cabeça') && symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser uma condição respiratória associada à dor de cabeça. Procure orientação médica.";
    } else if (symptomSet.has('náusea') && symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser um problema gastrointestinal com dificuldade respiratória. Consulte um médico.";
    } else if (symptomSet.has('cansaço') && symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser uma condição respiratória com fadiga. Considere consultar um médico.";
    } else if (symptomSet.has('dificuldade respiratória')) {
        diagnosis = "Pode ser um sinal de um problema respiratório. Consulte um médico imediatamente.";
    }

    // Atualiza o texto do resultado e faz com que ele seja visível
    const resultElement = document.getElementById('result');
    resultElement.innerText = diagnosis;

    // Altera a cor do texto com base no diagnóstico
    if (diagnosis.includes("não possível") || diagnosis.includes("Por favor")) {
        resultElement.style.color = "