
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const resulta = document.querySelector(".result")
const score = document.querySelector(".score")

let questionCounter = 0;
let scorecounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableOptions = [];

function setavailableQuestion(){
  const totalQuestion = quiz.length;
  for(let i = 0 ; i <totalQuestion ; i++){
      availableQuestion.push(quiz[i])
  }
}

function getNewQuestion(){
  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length
  const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  const indexcurrent = availableQuestion.indexOf(questionIndex)
  availableQuestion.splice(indexcurrent,1)
  getoption()
  
 

  score.innerHTML = "Score:" + (scorecounter)
  questionCounter++

}

function getoption(){
    const optionlength = currentQuestion.options.length

    for(let i = 0 ; i <optionlength;i++ ){
        availableOptions.push[i]
    }
  
    for(let i = 0 ; i < optionlength; i++){
        const optionindex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const currentoption = availableOptions.indexOf(optionindex)
        availableOptions.splice(currentoption,1)
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i]
        option.id = i;
        option.className = "option"
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)")
        
        
    }
    
}

function getResult(result){
    const id = parseInt(result.id)
    console.log(result.id)
    console.log(currentQuestion.answer)
    if(id === currentQuestion.answer){
        scorecounter++
      resulta.innerHTML = "Correct"
        
    }else{
      resulta.innerHTML = "Incorrect"
    }

}

function next(){
    
    if(questionCounter === quiz.length){

    }else{
        
        getNewQuestion()
    }
}

window.onload = function(){
    setavailableQuestion();
    getNewQuestion();
}