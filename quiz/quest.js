const quizData=[
    {
        question: "Which of the following sorting algorithms has the lowest worst-case complexity?",
        a: "Quick Sort",
        b: "Merge Sort",
        c: "Selection Sort",
        d: "Insertion Sort",
        correct: "b",
    },
    {
        question: "Which of the following is useful in traversing a given graph by breadth first search?",
        a: "Stack",
        b: "List",
        c: "Set",
        d: "Queue",
        correct: "d",
    },
    {
        question: "The minimum number of edges required to create a cyclic graph of n vertices is ______",
        a: "n-1",
        b: "n",
        c: "n+1",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "A connected graph T without any cycles is called ______",
        a: "No Cycle Graph",
        b: "Non-Cyclic Graph",
        c: "Free Graph",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "The number of edges in a simple, n-vertex, complete graph is ______",
        a: " n*(n-1)/2",
        b: "n*(n+1)/2",
        c: "n*(n-2)",
        d: "None of the above",
        correct: "a",
    }
];

const quiz=document.getElementById("quiz")
const ans=document.querySelectorAll(".answer")
const question=document.getElementById("question")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")

let currentq=0
let score=0

load_quiz()

function load_quiz(){
    deselect_answers()
    const currentData=quizData[currentq]
    question.innerHTML=`${currentq+1}. ${currentData.question}`
    a_text.innerHTML=currentData.a
    b_text.innerHTML=currentData.b
    c_text.innerHTML=currentData.c
    d_text.innerHTML=currentData.d 
}

function deselect_answers(){
    ans.forEach(ansEle => ansEle.checked=false)
}
function get_selected(){
    let answer
    ans.forEach(ansEle=>{
        if(ansEle.checked){
            answer=ansEle.id
        }
    })
    return answer
}

function next(){
    const answer=get_selected()
    if(answer){
        if(answer===quizData[currentq].correct)
            score++
    currentq++
    }
    else{
    window.alert("Please select an option!");
    }
    if(currentq<quizData.length)
        load_quiz()
    else
        quiz.innerHTML=`
        <h3>Your score: ${score}/${quizData.length}</h3>
        <h3>Percentage score: ${(score/quizData.length)*100}%</h3>
        <button onclick="location.reload()">Reload</button>
        `
}