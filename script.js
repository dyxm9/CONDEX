function getDiagnosis() {
    const selectedGroup = document.querySelector('input[name="symptomGroup"]:checked')?.value;
    let diagnosis = "Não foi possível identificar os sintomas. Por favor, consulte um médico.";
    let resultClass = 'error';

    if (!selectedGroup) {
        diagnosis = "Por favor, selecione um grupo de sintomas.";
    } else {
        switch (selectedGroup) {
            case 'gripeCOVID':
                diagnosis = "Pode ser gripe ou COVID-19. Procure um médico.";
                resultClass = 'success';
                break;
            case 'enxaqueca':
                diagnosis = "Pode ser uma enxaqueca. Procure um médico.";
                resultClass = 'success';
                break;
            case 'dengue':
                diagnosis = "Pode ser dengue. Procure um médico imediatamente.";
                resultClass = 'success';
                break;
            case 'gripe':
                diagnosis = "Pode ser gripe. Procure um médico se os sintomas persistirem.";
                resultClass = 'success';
                break;
            case 'virose':
                diagnosis = "Pode ser uma virose. Mantenha-se hidratado e consulte um médico se necessário.";
                resultClass = 'success';
                break;
            case 'problemaCardiaco':
                diagnosis = "Pode ser um problema cardíaco. Procure atendimento médico de urgência.";
                resultClass = 'success';
                break;
            case 'sinusite':
                diagnosis = "Pode ser sinusite. Procure um médico para tratamento.";
                resultClass = 'success';
                break;
            case 'alergia':
                diagnosis = "Pode ser uma alergia. Evite alérgenos conhecidos e procure um médico.";
                resultClass = 'success';
                break;
            case 'asma':
                diagnosis = "Pode ser asma. Consulte um médico para tratamento adequado.";
                resultClass = 'success';
                break;
            case 'gastrite':
                diagnosis = "Pode ser gastrite. Evite alimentos irritantes e consulte um médico.";
                resultClass = 'success';
                break;
            case 'infarto':
                diagnosis = "Pode ser um infarto. Procure atendimento médico de urgência.";
                resultClass = 'success';
                break;
            case 'hipertensao':
                diagnosis = "Pode ser hipertensão. Consulte um médico para avaliação.";
                resultClass = 'success';
                break;
            case 'diabetes':
                diagnosis = "Pode ser diabetes. Procure um médico para avaliação.";
                resultClass = 'success';
                break;
            case 'hepatite':
                diagnosis = "Pode ser hepatite. Procure atendimento médico.";
                resultClass = 'success';
                break;
            case 'apendicite':
                diagnosis = "Pode ser apendicite. Procure atendimento médico de urgência.";
                resultClass = 'success';
                break;
            case 'calculorenal':
                diagnosis = "Pode ser cálculo renal. Consulte um médico para tratamento.";
                resultClass = 'success';
                break;
            case 'pancreatite':
                diagnosis = "Pode ser pancreatite. Procure atendimento médico imediatamente.";
                resultClass = 'success';
                break;
            case 'meningite':
                diagnosis = "Pode ser meningite. Procure atendimento médico de urgência.";
                resultClass = 'success';
                break;
            case 'anemia':
                diagnosis = "Pode ser anemia. Consulte um médico para diagnóstico e tratamento.";
                resultClass = 'success';
                break;
            case 'depressao':
                diagnosis = "Pode ser depressão. Procure um psicólogo ou psiquiatra para tratamento.";
                resultClass = 'success';
                break;
            case 'ansiedade':
                diagnosis = "Pode ser ansiedade. Consulte um profissional de saúde mental.";
                resultClass = 'success';
                break;
            case 'hipotiroidismo':
                diagnosis = "Pode ser hipotireoidismo. Consulte um endocrinologista.";
                resultClass = 'success';
                break;
            case 'hipertiroidismo':
                diagnosis = "Pode ser hipertireoidismo. Procure um endocrinologista para avaliação.";
                resultClass = 'success';
                break;
            case 'dermatite':
                diagnosis = "Pode ser dermatite. Consulte um dermatologista para tratamento.";
                resultClass = 'success';
                break;
            case 'pneumonia':
                diagnosis = "Pode ser pneumonia. Procure atendimento médico.";
                resultClass = 'success';
                break;
            case 'colicaRenal':
                diagnosis = "Pode ser cólica renal. Procure um médico para diagnóstico.";
                resultClass = 'success';
                break;
            default:
                diagnosis = "Não foi possível identificar os sintomas. Por favor, consulte um médico.";
                resultClass = 'error';
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = diagnosis;
    resultElement.className = resultClass;
    resultElement.style.opacity = 1;
    resultElement.style.transform = "translateY(0)";
}