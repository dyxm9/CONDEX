function getDiagnosis() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

    let diagnosis = "Por favor, selecione pelo menos um sintoma.";
    let severityClass = "";

    if (selectedSymptoms.length > 0) {
        const symptomsSet = new Set(selectedSymptoms);

        // Diagnóstico baseado nos sintomas selecionados
        if (symptomsSet.has('febre') && symptomsSet.has('tosse')) {
            diagnosis = "Possível gripe ou COVID-19. Procure um médico.";
            severityClass = "moderado";
        } else if (symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea')) {
            diagnosis = "Possível enxaqueca. Procure um médico.";
            severityClass = "leve";
        } else if (symptomsSet.has('cansaço')) {
            diagnosis = "Possível cansaço ou fadiga. Considere descansar e avaliar outros sintomas.";
            severityClass = "leve";
        } else if (symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível problema respiratório. Consulte um médico imediatamente.";
            severityClass = "grave";
        } else {
            diagnosis = "Sintomas não identificados. Consulte um médico.";
            severityClass = "moderado";
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = diagnosis;
    resultElement.className = severityClass;
    resultElement.style.opacity = 1;
}
