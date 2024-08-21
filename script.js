function getDiagnosis() {
    // Cria um array para armazenar os sintomas selecionados
    const symptoms = [];
    // Seleciona todos os checkboxes marcados
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Adiciona o valor de cada checkbox marcado ao array de sintomas
    checkboxes.forEach(checkbox => {
        symptoms.push(checkbox.value);
    });

    // Inicializa a variável de diagnóstico com uma mensagem padrão
    let diagnosis = "Não foi possível identificar os sintomas. Por favor, consulte um médico.";

    // Cria um conjunto para eliminar duplicatas
    const symptomSet = new Set(symptoms);

    // Verifica combinações de sintomas e atribui um diagnóstico correspondente
    if (symptomSet.has('febre') && symptomSet.has('tosse') && symptomSet.has('dor de cabeça') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma infecção viral grave. Procure um médico imediatamente.";
    } else if (symptomSet.has('febre') && symptomSet.has('tosse')) {
        diagnosis = "Pode ser gripe ou COVID-19. Procure um médico.";
    } else if (symptomSet.has('dor de cabeça') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma enxaqueca. Procure um médico.";
    } else if (symptomSet.has('febre') && symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma gastroenterite. Mantenha-se hidratado e consulte um médico.";
    } else if (symptomSet.has('cansaço') && symptomSet.has('dor de cabeça')) {
        diagnosis = "Pode ser uma condição de fadiga crônica. Considere consultar um médico.";
    } else if (symptomSet.has('tosse')) {
        diagnosis = "Pode ser uma tosse comum ou uma infecção respiratória leve.";
    } else if (symptomSet.has('febre')) {
        diagnosis = "Pode ser uma febre causada por diversas condições. Monitore os sintomas.";
    } else if (symptomSet.has('náusea')) {
        diagnosis = "Pode ser uma indigestão ou outro problema gastrointestinal.";
    } else if (symptomSet.has('cansaço')) {
        diagnosis = "Pode ser um sinal de estresse ou fadiga.";
    }

    // Atualiza o texto do resultado e faz com que ele seja visível
    const resultElement = document.getElementById('result');
    resultElement.innerText = diagnosis;
    resultElement.style.opacity = 1;
    resultElement.style.transform = 'translateY(0)';
}