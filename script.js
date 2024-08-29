function getDiagnosis() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

    let diagnosis = "Nenhum sintoma selecionado.";
    let medications = "N/A";
    let daysOff = "N/A";

    if (selectedSymptoms.length > 0) {
        const symptomsSet = new Set(selectedSymptoms);

        if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('náusea') && symptomsSet.has('cansaço') && symptomsSet.has('dificuldade respiratória')) {
            diagnosis = "COVID-19 grave. Procure ajuda médica.";
            medications = "Remdesivir, Dexametasona";
            daysOff = "14 dias de repouso.";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça') && symptomsSet.has('cansaço')) {
            diagnosis = "Gripe severa.";
            medications = "Paracetamol, Ibuprofeno";
            daysOff = "7 dias de repouso.";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Resfriado forte.";
            medications = "Paracetamol";
            daysOff = "3 dias de repouso.";
        } else if (symptomsSet.has('febre') && symptomsSet.has('tosse')) {
            diagnosis = "Resfriado ou início de gripe.";
            medications = "Antitérmicos, Antitussígenos";
            daysOff = "2 dias de repouso.";
        } else if (symptomsSet.has('tosse') && symptomsSet.has('dor de cabeça')) {
            diagnosis = "Resfriado.";
            medications = "Analgésicos, Antitussígenos";
            daysOff = "2 dias de repouso.";
        } else {
            diagnosis = "Sintomas indefinidos. Consulte um médico.";
            medications = "N/A";
            daysOff = "N/A";
        }
    }

    document.getElementById("result").textContent = `Diagnóstico: ${diagnosis}`;
    document.getElementById("medications").textContent = `Medicações Prescritas: ${medications}`;
    document.getElementById("medical-leave").textContent = `Dias de atestado: ${daysOff}`;
}