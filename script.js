const questions = {
    reseuro: {
        "Risques Psychosociaux": [
            { question: "Parmi les éléments suivants, lequel est considéré comme un risque psychosocial ?", choices: ["Les équipements de sécurité", "Le manque de soutien social", "La conformité aux normes de construction", "L'ergonomie des postes de travail"], answer: "Le manque de soutien social" },
            { question: "Quel terme désigne une situation où les exigences du travail dépassent les ressources disponibles pour y faire face, souvent associé aux RPS ?", choices: ["Stress organisationnel", "Désengagement", "Burnout", "Charge mentale"], answer: "Stress organisationnel" },
            { question: "L'impact potentiel des risques psychosociaux sur les salariés peut être :", choices: ["L’augmentation de la productivité", "Des risques accrus d'accidents du travail", "L’amélioration de la santé mentale", "La réduction des congés de maladie"], answer: "Des risques accrus d'accidents du travail" },
            { question: "Parmi les éléments suivants, lequel est souvent cité comme un indicateur précoce de risques psychosociaux dans une entreprise de BTP ?", choices: ["Augmentation des accidents du travail", "Diminution de la qualité des matériaux utilisés", "Fluctuation des prix des contrats", "Changement fréquent de fournisseurs"], answer: "Augmentation des accidents du travail" },
            { question: "Quel cadre légal ou régulation en France oblige les entreprises à prévenir les risques psychosociaux ?", choices: ["Code du travail", "Loi sur la santé au travail", "Accord national interprofessionnel (ANI)", "Directive européenne sur la sécurité et la santé au travail"], answer: "Accord national interprofessionnel (ANI)" },
            { question: "Vrai ou Faux : Les travailleurs du BTP sont moins susceptibles d'exprimer leurs problèmes de santé mentale en raison de la culture de la virilité dans ce secteur.", choices: ["Vrai", "Faux"], answer: "Vrai" },
            { question: "Vrai ou Faux : Les risques psychosociaux peuvent augmenter le taux de turnover parmi les employés dans le secteur du BTP.", choices: ["Vrai", "Faux"], answer: "Vrai" },
            { question: "Dans le secteur du BTP, les principaux facteurs de risques psychosociaux sont :", choices: ["Des horaires de travail irréguliers", "Des conditions de travail difficiles", "La pression liée aux délais", "Toutes les réponses ci-dessus"], answer: "Toutes les réponses ci-dessus" },
            { question: "Qu'est-ce qui peut être un signe avant-coureur de stress lié au travail ?", choices: ["Une augmentation des absences injustifiées", "Une plus grande satisfaction au travail", "Une productivité en constante augmentation", "Une diminution des conflits entre collègues"], answer: "Une augmentation des absences injustifiées" },
            { question: "Quel est l’objectif principal de la prévention des risques psychosociaux dans une entreprise ?", choices: ["Réduire les coûts de production", "Renforcer la compétitivité de l’entreprise", "Améliorer le bien-être des salariés et limiter les impacts sur leur santé", "Augmenter le chiffre d’affaires"], answer: "Améliorer le bien-être des salariés et limiter les impacts sur leur santé" }
        ],
        "Gestion des conflits sociaux": [
            { question: "Qu'est-ce qu'une grève de solidarité ?", choices: ["Une chaîne humaine solidaire", "Une grève en soutien à d'autres salariés de l'entreprise ou d'entreprises tierces", "Une grève des agents du public en solidarité avec les salariés du privé"], answer: "Une grève en soutien à d'autres salariés de l'entreprise ou d'entreprises tierces" },
            { question: "Qu'est-ce qu'une grève perlée ?", choices: ["Arrêt de travail spontané de courte durée", "Mouvement de protestation consistant à ralentir la cadence de travail", "Mouvement de protestation consistant à verser un seau d'eau sur une personne"], answer: "Mouvement de protestation consistant à ralentir la cadence de travail" },
            { question: "Quelle est la caractéristique d'une grève du zèle ?", choices: ["Refuser toute initiative dans le travail", "Exécuter le travail de manière rigoureuse et excessive pour ralentir la production", "Dénoncer les collègues zélés"], answer: "Exécuter le travail de manière rigoureuse et excessive pour ralentir la production" },
            { question: "Qu'est-ce qu'une grève tournante ?", choices: ["Une grève où les grévistes défilent en rond", "Une grève alternant les arrêts de travail par secteur ou service", "Une grève reconduite chaque semaine en alternant les jours"], answer: "Une grève alternant les arrêts de travail par secteur ou service" },
            { question: "Quelle est la particularité d'une grève bouchon ?", choices: ["Une grève qui bloque toute l'activité dans un secteur névralgique", "Une grève consistant à remplacer la grève de la faim par une grève de la boisson", "Un rassemblement de grévistes pour bloquer les entrées et sorties de l'entreprise"], answer: "Une grève qui bloque toute l'activité dans un secteur névralgique" },
            { question: "Une grève de solidarité est-elle licite ?", choices: ["Oui, si elle soutient des salariés d'autres entreprises", "Non, elle est toujours illicite", "Oui, si elle est accompagnée de revendications professionnelles"], answer: "Oui, si elle est accompagnée de revendications professionnelles" },
            { question: "Pourquoi une grève perlée peut-elle être jugée illicite ?", choices: ["Elle ne respecte pas le préavis", "Elle ralentit ou exécute délibérément le travail de façon défectueuse", "Elle dure plus de 24 heures sans interruption"], answer: "Elle ralentit ou exécute délibérément le travail de façon défectueuse" },
            { question: "Quelles conditions rendent une grève surprise licite ?", choices: ["La grève est spontanée et soutenue par une majorité de salariés", "La grève est accompagnée de revendications professionnelles", "Elle ne nécessite pas de préavis dans le secteur public"], answer: "La grève est accompagnée de revendications professionnelles" },
            { question: "Quelle est la définition légale d'une grève ?", choices: ["Une cessation individuelle du travail pour une durée limitée", "Une cessation collective et concertée du travail pour appuyer des revendications professionnelles", "Une manifestation organisée par les syndicats pour un droit spécifique"], answer: "Une cessation collective et concertée du travail pour appuyer des revendications professionnelles" },
            { question: "Qu'est-ce qu'une grève d’autosatisfaction ?", choices: ["Une grève consistant à fournir des services gratuitement", "Une grève d'une seule personne", "Une cessation de la prestation de travail visée par une revendication"], answer: "Une cessation de la prestation de travail visée par une revendication" }
        ],
        "Harcèlement sexuel et des agissements sexistes": [
            { question: "Quelle est la définition légale du harcèlement sexuel en France ?", choices: ["Tout comportement visant à nuire à autrui", "Toute pression exercée dans le but d'obtenir un acte de nature sexuelle", "Toute insulte ou menace proférée sur le lieu de travail"], answer: "Toute pression exercée dans le but d'obtenir un acte de nature sexuelle" },
            { question: "Que stipule l'article 222-33 du code pénal concernant le harcèlement sexuel ?", choices: ["Il interdit toute discrimination au travail", "Il définit et sanctionne les comportements de harcèlement sexuel", "Il protège uniquement les femmes victimes de violences"], answer: "Il définit et sanctionne les comportements de harcèlement sexuel" },
            { question: "Offrir toutes les semaines un bouquet de roses à une collègue non réceptive est considéré comme :", choices: ["Harcèlement sexuel", "Pas de harcèlement sexuel", "Un comportement nécessitant vigilance"], answer: "Un comportement nécessitant vigilance" },
            { question: "Complimenter un collègue en disant : 'Ça te fait un joli petit cul !' est considéré comme :", choices: ["Pas de harcèlement sexuel", "Harcèlement sexuel", "Une remarque amicale"], answer: "Pas de harcèlement sexuel" },
            { question: "Proposer une promotion en échange d’une 'faveur sexuelle' est :", choices: ["Une pratique légale", "Harcèlement sexuel", "Pas de harcèlement sexuel"], answer: "Harcèlement sexuel" },
            { question: "Parmi les mesures suivantes, laquelle est essentielle pour prévenir le harcèlement sexuel au travail ?", choices: ["Une formation régulière des employés", "L’installation de caméras dans les bureaux", "L'obligation de dénoncer tout collègue suspecté"], answer: "Une formation régulière des employés" },
            { question: "Qui peut être désigné comme référent pour le harcèlement sexuel et les agissements sexistes dans une entreprise ?", choices: ["Le manager d'équipe", "Une personne formée et identifiée par l'entreprise", "Tout salarié volontaire"], answer: "Une personne formée et identifiée par l'entreprise" },
            { question: "Quels facteurs peuvent favoriser le harcèlement sexuel au travail ?", choices: ["La hiérarchisation extrême des rapports sociaux", "L'isolement des travailleurs", "Les deux réponses précédentes"], answer: "Les deux réponses précédentes" },
            { question: "Quel est un indicateur clé de risques d'agissements sexistes dans une entreprise ?", choices: ["Un taux élevé de turnover parmi les salariés", "Une égalité stricte dans les promotions", "Une absence de tensions relationnelles"], answer: "Un taux élevé de turnover parmi les salariés" },
            { question: "Quel est le rôle principal d’un référent harcèlement sexuel ?", choices: ["Ignorer les plaintes pour ne pas créer de conflits", "Sensibiliser, accompagner les victimes et proposer des actions préventives", "S'assurer que les accusés soient sanctionnés immédiatement"], answer: "Sensibiliser, accompagner les victimes et proposer des actions préventives" }

        ]
    },
    cseAssistance: {
        "Rôle du CSE": [
            {
                question: "Que signifie CSE ?",
                choices: ["Comité Social et Économique", "Conseil Supérieur de l'Emploi", "Centre de Services aux Entreprises", "Coordination Syndicale Européenne"],
                answer: "Comité Social et Économique"
            },
            {
                question: "À partir de combien de salariés une entreprise doit-elle mettre en place un CSE ?",
                choices: ["5", "11", "50", "100"],
                answer: "11"
            },
            {
                question: "Quelle est la durée du mandat des membres du CSE ?",
                choices: ["2 ans", "3 ans", "4 ans", "5 ans"],
                answer: "4 ans"
            }
        ],
        "Négociations collectives": [
            {
                question: "Qui peut participer aux négociations collectives au sein du CSE ?",
                choices: ["Uniquement les délégués syndicaux", "Tous les membres du CSE", "Uniquement l'employeur", "Les représentants de proximité"],
                answer: "Tous les membres du CSE"
            },
            {
                question: "Quelle est la périodicité minimale des négociations sur les salaires dans les entreprises où sont constituées une ou plusieurs sections syndicales représentatives ?",
                choices: ["Tous les ans", "Tous les 2 ans", "Tous les 3 ans", "Tous les 5 ans"],
                answer: "Tous les ans"
            },
            {
                question: "Quel est le rôle du CSE dans les accords d'entreprise ?",
                choices: ["Il les signe", "Il donne son avis", "Il les valide", "Il n'a aucun rôle"],
                answer: "Il donne son avis"
            }
        ],
        "Santé au travail": [
            {
                question: "Quel est le rôle principal du CSE en matière de santé et sécurité ?",
                choices: ["Prévention", "Inspection", "Enquête", "Toutes ces réponses"],
                answer: "Toutes ces réponses"
            },
            {
                question: "À quelle fréquence le CSE doit-il être consulté sur la politique de prévention des risques professionnels de l'entreprise ?",
                choices: ["Tous les mois", "Tous les trimestres", "Tous les ans", "Tous les 2 ans"],
                answer: "Tous les ans"
            },
            {
                question: "Qui peut déclencher une expertise en matière de santé et de sécurité au travail ?",
                choices: ["L'employeur", "Le CSE", "L'inspection du travail", "Toutes ces réponses"],
                answer: "Toutes ces réponses"
            }
        ]
    }
};


let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;

function loadThemes() {
    const themesContainer = document.getElementById('themes');
    const currentPage = window.location.pathname.includes('reseuro') ? 'reseuro' : 'cseAssistance';

    Object.keys(questions[currentPage]).forEach(theme => {
        const button = document.createElement('button');
        button.textContent = theme;
        button.onclick = () => startQuiz(currentPage, theme);
        themesContainer.appendChild(button);
    });
}

function startQuiz(category, theme) {
    localStorage.setItem('quizCategory', category);
    localStorage.setItem('quizTheme', theme);
    window.location.href = category === 'reseuro' ? 'reseuro-quiz.html' : 'cse-quiz.html';
}

function loadQuiz() {
    const category = document.body.classList.contains('reseuro-theme') ? 'reseuro' : 'cseAssistance';
    const theme = localStorage.getItem('quizTheme');
    currentQuestions = questions[category][theme];
    displayQuestion();
}

function displayQuestion() {
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const currentQuestion = currentQuestions[currentQuestionIndex];

    updateProgress();
    resetTimer();

    questionEl.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}: ${currentQuestion.question}`;
    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectAnswer(choice);
        choicesEl.appendChild(button);
    });
}

function selectAnswer(choice) {
    clearInterval(timer);
    const buttons = document.querySelectorAll('#choices button');
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = choice === currentQuestion.answer;

    buttons.forEach(button => {
        button.classList.add('disabled');
        if (button.textContent === currentQuestion.answer) {
            button.classList.add('correct');
        } else if (button.textContent === choice) {
            button.classList.add('incorrect');
        }
    });

    const resultIndicator = document.createElement('div');
    resultIndicator.className = isCorrect ? 'result-indicator correct' : 'result-indicator incorrect';
    resultIndicator.textContent = isCorrect ? 'Vrai ✓' : 'Faux ✗';
    resultIndicator.style.position = 'absolute';
    resultIndicator.style.top = '10px';
    resultIndicator.style.left = '50%';
    resultIndicator.style.transform = 'translateX(-50%)';
    resultIndicator.style.zIndex = '1000';
    document.getElementById('quiz-container').appendChild(resultIndicator);

    if (isCorrect) {
        score++;
    }

    setTimeout(() => {
        resultIndicator.remove();
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 20;
    clearInterval(timer);
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft === 0) {
            selectAnswer('');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = timeLeft;
}

function updateProgress() {
    const progress = document.getElementById('progress');
    if (progress) {
        const percentage = (currentQuestionIndex / currentQuestions.length) * 100;
        progress.style.width = `${percentage}%`;
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Résultats du quiz</h2>
        <p>Votre score : ${score} / ${currentQuestions.length}</p>
        <button onclick="location.href='index.html'">Retour à l'accueil</button>
    `;
}

// Détecter la page actuelle et charger la fonction appropriée
if (window.location.pathname.includes('quiz')) {
    document.addEventListener('DOMContentLoaded', loadQuiz);
} else if (window.location.pathname.includes('reseuro.html') || window.location.pathname.includes('cse-assistance.html')) {
    document.addEventListener('DOMContentLoaded', loadThemes);
}

