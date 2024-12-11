const questions = {
    reseuro: {
        "Formation RH": [
            {
                question: "Quel type de formation ResEuro propose-t-il principalement ?",
                choices: ["Formations techniques", "Formations managériales", "Formations en soft skills", "Tous ces types de formations"],
                answer: "Tous ces types de formations"
            },
            {
                question: "Quelle est la durée moyenne d'une formation chez ResEuro ?",
                choices: ["1 jour", "2-3 jours", "1 semaine", "1 mois"],
                answer: "2-3 jours"
            },
            {
                question: "Quel format de formation ResEuro privilégie-t-il ?",
                choices: ["En présentiel", "En ligne", "Mixte (présentiel et en ligne)", "Sur le terrain"],
                answer: "Mixte (présentiel et en ligne)"
            }
        ],
        "Gestion des talents": [
            {
                question: "Quel outil ResEuro utilise-t-il pour l'évaluation des compétences ?",
                choices: ["DISC", "MBTI", "Big Five", "Tous ces outils"],
                answer: "Tous ces outils"
            },
            {
                question: "Quelle approche ResEuro privilégie-t-il dans la gestion des talents ?",
                choices: ["Approche standardisée", "Approche sur-mesure", "Approche théorique", "Approche à court terme"],
                answer: "Approche sur-mesure"
            },
            {
                question: "Quel est l'objectif principal de la gestion des talents selon ResEuro ?",
                choices: ["Réduire les coûts", "Améliorer la performance", "Fidéliser les employés", "Tous ces éléments"],
                answer: "Tous ces éléments"
            }
        ],
        "Droit du travail": [
            {
                question: "Dans quel domaine du droit du travail ResEuro est-il spécialisé ?",
                choices: ["Contentieux", "Négociations collectives", "Audits de conformité", "Toutes ces réponses"],
                answer: "Toutes ces réponses"
            },
            {
                question: "Quelle est la fréquence recommandée par ResEuro pour les audits de conformité en droit du travail ?",
                choices: ["Tous les mois", "Tous les trimestres", "Tous les ans", "Tous les 2 ans"],
                answer: "Tous les ans"
            },
            {
                question: "Quel type de support ResEuro offre-t-il en matière de droit du travail ?",
                choices: ["Conseil ponctuel", "Accompagnement continu", "Formation", "Toutes ces options"],
                answer: "Toutes ces options"
            }
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

