

const  quizData = [
    {
        question : "HTML stand for?",
        a:"Hyper text markup",
        b: "Text markup",
        c: "a and b",
        d: "none of above"
    },
    {
        question : "Most popular launge?",
        a: "java",
        b: "paythan",
        c: "Javascript",
        d: "none of above"
    },
    {
        question : "RAM stand for?",
        a:"Random access memorey",
        b: "Read only memorey",
        c: "low light",
        d: "none of above"
    },{
        question : "ROM stand for?",
        a:"Random access memorey",
        b: "Read only memorey",
        c: "low light",
        d: "none of above"
    },
    {
        question : "JavaScript was launhed?",
        a:"2023",
        b: "2001",
        c: "2003",
        d: "1995"
    }
]
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const SubmitBtn = document.getElementById("submit")
 let currentQuiz = 0;
 let score = 0

loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData
    .question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function getSelected() {
  const answerELS = document.querySelectorAll(".answer");
  let answer= undefined;

  answerELS.forEach((answerEl) => {
  if (answerEl.checked) {
    answer = answerEl.id;
  } 
  }); 

  return answer;
}



SubmitBtn.addEventListener("click",()=>{

   const answer = getSelected()
   
   if (answer){   
   currentQuiz++;
if (currentQuiz < quizData.length) {
      loadQuiz(); 
  } else {
      alert("Quzi is Finished")
  }
   }
      
   
  
  
});
