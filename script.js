function getDiagnosis() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

    let diagnosis = "Por favor, selecione pelo menos um sintoma.";
    let severityClass = "";

    if (selectedSymptoms.length > 0) {
        const symptomsSet = new Set(selectedSymptoms);

        // Diagnóstico baseado nos sintomas selecionados
        if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 grave. Procure ajuda médica imediatamente.";
            severityClass = "grave";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe severa. Procure um médico.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea')) {
            diagnosis = "Possível gripe moderada. Repouse e hidrate-se.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível resfriado forte. Repouse e tome líquidos.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse')) {
            diagnosis = "Possível resfriado ou início de gripe. Descanse e mantenha-se hidratado.";
            severityClass = "leve";
        } else if (symptomsSet.has('febre') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível enxaqueca febril. Repouse em um ambiente tranquilo.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('náusea')) {
            diagnosis = "Possível infecção estomacal. Consulte um médico se os sintomas persistirem.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível início de gripe. Repouse e mantenha-se hidratado.";
            severityClass = "leve";
        } else if (symptomsSet.has('febre') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível infecção respiratória. Consulte um médico.";
            severityClass = "grave";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 leve. Monitore seus sintomas.";
            severityClass = "moderado";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe leve. Descanse e beba líquidos.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea')) {
            diagnosis = "Possível resfriado com enxaqueca. Procure um ambiente calmo e hidrate-se.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível resfriado comum. Repouse e mantenha-se hidratado.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('náusea')) {
            diagnosis = "Possível infecção viral leve. Monitore os sintomas e consulte um médico se necessário.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível resfriado ou gripe leve. Repouse.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível problema respiratório. Consulte um médico.";
            severityClass = "grave";
        } else if (symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 leve. Monitore os sintomas.";
            severityClass = "moderado";
        } else if (symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível enxaqueca com fadiga. Descanse.";
            severityClass = "leve";
        } else if (symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea')) {
            diagnosis = "Possível enxaqueca. Repouse em um ambiente tranquilo.";
            severityClass = "leve";
        } else if (symptomsSet.has('dor de cabeça') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível enxaqueca com fadiga leve. Repouse.";
            severityClass = "leve";
        } else if (symptomsSet.has('dor de cabeça') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível problema respiratório com enxaqueca. Consulte um médico.";
            severityClass = "grave";
        } else if (symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível infecção respiratória grave. Consulte um médico.";
            severityClass = "grave";
        } else if (symptomsSet.has('náusea') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível cansaço extremo ou infecção estomacal leve. Descanse.";
            severityClass = "leve";
        } else if (symptomsSet.has('náusea') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível infecção respiratória ou reação alérgica. Consulte um médico.";
            severityClass = "grave";
        } else if (symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível problema respiratório. Consulte um médico.";
            severityClass = "grave";
        } else if (symptomsSet.has('febre')) {
            diagnosis = "Possível febre leve. Monitore seus sintomas.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse')) {
            diagnosis = "Possível resfriado. Descanse e beba líquidos.";
            severityClass = "leve";
        } else if (symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível enxaqueca leve. Procure um ambiente tranquilo.";
            severityClass = "leve";
        } else if (symptomsSet.has('náusea')) {
            diagnosis = "Possível mal-estar estomacal. Beba água e descanse.";
            severityClass = "leve";
        } else if (symptomsSet.has('cansaço')) {
            diagnosis = "Possível cansaço ou fadiga leve. Descanse.";
            severityClass = "leve";
        } else if (symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível problema respiratório leve. Monitore e consulte um médico se necessário.";
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
