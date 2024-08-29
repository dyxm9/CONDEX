function getDiagnosis() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

    let diagnosis = "Por favor, selecione pelo menos um sintoma.";
    let medications = "N/A";
    let daysOff = "N/A";
    let severityClass = "";

    if (selectedSymptoms.length > 0) {
        const symptomsSet = new Set(selectedSymptoms);

        // Diagnóstico para combinação de 6 sintomas
        if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 grave. Procure ajuda médica imediatamente.";
            medications = "Remdesivir, Dexametasona";
            daysOff = "14 dias de repouso.";
            severityClass = "grave";
        } 
        // Diagnósticos para combinações de 5 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe severa. Procure um médico.";
            medications = "Paracetamol, Ibuprofeno";
            daysOff = "7 dias de repouso.";
            severityClass = "moderado";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 leve. Monitore seus sintomas.";
            medications = "Analgésicos, Antitussígenos";
            daysOff = "7 dias de repouso.";
            severityClass = "moderado";
        }
        // Diagnósticos para combinações de 4 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea')) {
            diagnosis = "Possível gripe moderada. Repouse e hidrate-se.";
            medications = "Paracetamol, Dipirona";
            daysOff = "5 dias de repouso.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe severa. Repouse e consulte um médico.";
            medications = "Ibuprofeno, Antitérmicos";
            daysOff = "5 dias de repouso.";
            severityClass = "moderado";
        }
        // Diagnósticos para combinações de 3 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível resfriado forte. Repouse e tome líquidos.";
            medications = "Paracetamol";
            daysOff = "3 dias de repouso.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe leve. Repouse.";
            medications = "Dipirona";
            daysOff = "3 dias de repouso.";
            severityClass = "leve";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('náusea')) {
            diagnosis = "Possível virose. Repouse, hidrate-se, e monitore seus sintomas.";
            medications = "Soro, Antieméticos";
            daysOff = "3 dias de repouso.";
            severityClass = "moderado";
        }
        // Diagnósticos para combinações de 2 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse')) {
            diagnosis = "Possível resfriado ou início de gripe. Descanse e mantenha-se hidratado.";
            medications = "Antitérmicos, Antitussígenos";
            daysOff = "2 dias de repouso.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível resfriado. Repouse e mantenha-se hidratado.";
            medications = "Analgésicos, Antitussígenos";
            daysOff = "2 dias de repouso.";
            severityClass = "leve";
        } else if (symptomsSet.has('febre') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível cansaço por desidratação. Beba líquidos e des