javascript
   function getDiagnosis() {
       const symptoms = document.getElementById('symptoms').value.trim().toLowerCase();
       let diagnosis = "Não foi possível identificar os sintomas. Por favor, consulte um médico.";
       let resultClass = 'error';

       if (!symptoms) {
           diagnosis = "Por favor, descreva seus sintomas.";
       } else if (symptoms.includes('febre') && symptoms.includes('tosse')) {
           diagnosis = "Pode ser gripe ou COVID-19. Procure um médico.";
           resultClass = 'success';
       } else if (symptoms.includes('dor de cabeça') && symptoms.includes('náusea')) {
           diagnosis = "Pode ser uma enxaqueca. Procure um médico.";
           resultClass = 'success';
       } else if (symptoms.includes('febre') && symptoms.includes('dor atrás dos olhos') && symptoms.includes('dor muscular') && symptoms.includes('manchas vermelhas na pele')) {
           diagnosis = "Pode ser dengue. Procure um médico imediatamente.";
           resultClass = 'success';
       } else if (symptoms.includes('febre') && symptoms.includes('dor de garganta') && symptoms.includes('cansaço')) {
           diagnosis = "Pode ser gripe. Procure um médico se os sintomas persistirem.";
           resultClass = 'success';
       } else if (symptoms.includes('febre') && symptoms.includes('dor no corpo') && symptoms.includes('mal-estar') && symptoms.includes('diarreia')) {
           diagnosis = "Pode ser uma virose. Mantenha-se hidratado e consulte um médico se necessário.";
           resultClass = 'success';
       }

       const groupNames = " - Diagnóstico por: Miguel, Ester, Lara, Yarah, Thomás.";
       const additionalAdvice = resultClass === 'success' ? " Por favor, procure orientação médica imediatamente." : "";
       const resultElement = document.getElementById('result');
       resultElement.innerText = diagnosis + additionalAdvice + groupNames;
       resultElement.className = resultClass;
   }
