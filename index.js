const hamburger = document.querySelector('#hamburger-icon')
const nav = document.querySelector('#menu-bar')
const aboutPage = document.querySelector('.about')
const exit = document.querySelector('#close-btn')
const exit2 = document.querySelector('#close-btn2')
const menu = document.querySelector('#menus')
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const resulta = document.querySelector(".result")
const score = document.querySelector(".score")
const homeBox = document.querySelector(".home-box")
const questionBox = document.querySelector(".question-box")
const resultBox = document.querySelector(".result-box")
const totalScrore = document.querySelector(".total-score")
const pic = document.querySelector("#pic2")


let questionCounter = 0;
let scorecounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableOptions = [];

hamburger.addEventListener('click', show)
exit.addEventListener('click', close)
exit2.addEventListener('click', close2)
home.addEventListener('click', close)
about.addEventListener('click', displayInfo)


function show() {
    menu.style.display = 'flex'
    menu.style.top = '0'
}

function close() {
    menu.style.display = 'none'
}

function displayInfo() {
    aboutPage.style.display = 'flex'
    aboutPage.style.top = '0'
}

function close2() {
    aboutPage.style.display = 'none'
    menu.style.display = 'none'
}



const quiz = [
    {   
        image:"image/pic-1.png",
        q: 'who is this pokemon ?',
        options: ['naruto' , 'sasuke' , 'itachi' , 'pikachu'],
        answer:0
    },
    {
        image:"image/pic-2.png",
        q: 'how many tails does kurama have ?',
        options: ['5' , '8' , '7' , '9'],
        answer:3
    },
    {
        image:"image/pic-3.jpg",
        q: 'who is the strongest uchiha ?',
        options: ['Itach' , 'Sasuke' , 'Madara' , 'Obito'],
        answer:2
    },
    {
        image:"image/pic-4.jpg",
        q: 'who is the father of Naruto ?',
        options: ['tobirama' , 'minato' , 'jiraya' , 'danzo'],
        answer:1
    },
    {
        image:"image/pic-5.png",
        q: 'where did kakashis sharingan came from ?',
        options: ['obito' , 'danzo' , 'shishui' , 'sasuke'],
        answer:0
    },
]





function setavailableQuestion(){
  const totalQuestion = quiz.length;
  for(let i = 0 ; i <totalQuestion ; i++){
      availableQuestion.push(quiz[i])
  }
}


function addPic(imageName) {
    const insertImage = document.createElement('img')
    insertImage.src = imageName
    pic.appendChild(insertImage)
}

function getNewQuestion() {
    questionNumber.innerHTML = "Question " + (questionCounter) + " of " + quiz.length
    index = Math.floor(Math.random() * availableQuestion.length)
    const questionIndex = availableQuestion[index]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    addPic((currentQuestion.image))
    const indexcurrent = availableQuestion.indexOf(questionIndex)
    availableQuestion.splice(indexcurrent,1)
    getoption()
    score.innerHTML = "Score:" + (scorecounter)
    questionCounter++
    console.log(currentQuestion.q)

}

function getoption(){
    const optionlength = currentQuestion.options.length

    for(let i = 0 ; i <optionlength;i++ ){
        availableOptions.push[i]
    }

    optionContainer.innerHTML='';
  
    for(let i = 0 ; i < optionlength; i++){
        const optionindex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const currentoption = availableOptions.indexOf(optionindex)
        availableOptions.splice(currentoption,1)
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i]
        option.id = i;
        option.className = "option"
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)",)
        
        
    }
    
}


function unclickableOptions(){
    const optionlength = optionContainer.children.length;
    for(i=0 ; i<optionlength;i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}


function getResult(result){
    const id = parseInt(result.id)
    console.log(result.id)
    console.log(currentQuestion.answer)
    if(id === currentQuestion.answer){
      scorecounter++
      result.classList.add("correct")
        
    }else{
       
      result.classList.add("incorrect")
    }

    unclickableOptions()

}

function resetOption(){
    while(optionContainer.firstChild){
        optionContainer.removeChild(optionContainer.firstChild)
    }
}

function next(){
    
    if(questionCounter === quiz.length + 1){
        quziOver()
    }else{
        getNewQuestion()
    }
}


function quziOver(){
  questionBox.classList.add("hide")
  resultBox.classList.remove("hide")
  quizResult()

}

function quizResult(){
    console.log("score" + scorecounter)
    totalScrore.innerHTML=scorecounter
}

function startQuiz(){
    homeBox.classList.add("hide")
    questionBox.classList.remove("hide")
    setavailableQuestion()
    getNewQuestion()
}
 

function resetQuiz(){
    questionCounter = 0;
    scorecounter = 0;
}


function tryAgain(){
    resultBox.classList.add("hide")
    questionBox.classList.remove("hide")
    resetQuiz()
}

function goToHome(){
    resultBox.classList.add("hide")
    homeBox.classList.remove("hide")
}

window.onload = function(){
    setavailableQuestion();
    getNewQuestion();
}