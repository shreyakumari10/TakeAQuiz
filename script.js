const quizData = [
    {
        question: 'Who is the leader of BTS?',
        a: 'Kim Namjoon',
        b: 'Kim Seokjin',
        c: 'Kim Taehyung',
        d: 'Jeong Hoseok',
        correct: 'a'
    },{
        question: 'When did BTS make their debut?',
        a: '10-06-2013',
        b: '12-06-2013',
        c: '09-06-2013',
        d: '13-06-2013',
        correct: 'd'
    },{
        question: 'Who is the youngest in BTS?',
        a: 'Park Jimin',
        b: 'Jeon Jungkook',
        c: 'Kim Taehyung',
        d: 'Min Yoongi',
        correct: 'b'
    },{
        question: 'TinyTan character RJ was created by which BTS member?',
        a: 'Jeon Jungkook',
        b: 'Min Yoongi',
        c: 'Park Jimin',
        d: 'Kim Seokjin',
        correct: 'd'
    },{
        question: 'Name of BTS variety show running for the longest time?',
        a: 'Bangtan Bomb',
        b: 'BTS: Behind The Scenes',
        c: 'Run BTS',
        d: 'In The Soop',
        correct: 'c'
    }
]

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected(){
    const answerE1s = document.querySelectorAll(".answer");

    let answer = undefined;

    answerE1s.forEach((answerE1) =>{
        if(answerE1.checked) {
            answer = answerE1.id;
         }
    });

    return answer;
}

function deselectAnswers(){
    answerE1s.forEach((answerE1) =>{
        answerE1.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();

    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            //TODO: Show Results
            quiz.innerHTML = 
            `<h2>You correctly  answered ${score}/${quizData.length} questions. </h2>
            <button onclick="location.reload()">Reload</button>`;
            //alert("You have completed the quiz!");
        }
    }
    
    
})