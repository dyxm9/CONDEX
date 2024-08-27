### *script.js*

javascript
function getDiagnosis() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

    let diagnosis = "Por favor, selecione pelo menos um sintoma.";
    let severityClass = "";

    if (selectedSymptoms.length > 0) {
        const symptomsSet = new Set(selectedSymptoms);

        // Diagnóstico para combinação de 6 sintomas
        if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 grave. Procure ajuda médica imediatamente.";
            severityClass = "grave";
        } 
        // Diagnósticos para combinações de 5 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe severa. Procure um médico.";
            severityClass = "moderado";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "Possível COVID-19 leve. Monitore seus sintomas.";
            severityClass = "moderado";
        }
        // Diagnósticos para combinações de 4 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea')) {
            diagnosis = "Possível gripe moderada. Repouse e hidrate-se.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe severa. Repouse e consulte um médico.";
            severityClass = "moderado";
        }
        // Diagnósticos para combinações de 3 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível resfriado forte. Repouse e tome líquidos.";
            severityClass = "moderado";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível gripe leve. Repouse.";
            severityClass = "leve";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('náusea')) {
            diagnosis = "Possível virose. Repouse, hidrate-se, e monitore seus sintomas.";
            severityClass = "moderado";
        }
        // Diagnósticos para combinações de 2 sintomas
        else if (symptomsSet.has('febre') && symptomsSet.has('tosse')) {
            diagnosis = "Possível resfriado ou início de gripe. Descanse e mantenha-se hidratado.";
            severityClass = "leve";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Possível resfriado. Repouse e mantenha-se hidratado.";
            severityClass = "leve";
        } else if (symptomsSet.has('febre') && symptomsSet.has('cansaço')) {
            diagnosis = "Possível cansaço por desidratação. Beba líquidos e descanse.";
            severityClass = "leve";
        }
        // Diagnósticos para sintomas individuais
        else if (symptomsSet.has('febre')) {
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
