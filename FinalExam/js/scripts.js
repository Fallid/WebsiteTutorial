// variabel global
var element; //variabel untuk true or false info_box muncul dan hilang
var para1 = document.getElementById("start_btn"); //variabel untuk mengubah title element start button
var para2 = document.getElementById("continue_btn");
var countdownDate = new Date().getTime() + 1000 * 60 * 60; //variabel untuk mengatur waktu hitung mundur (penjumlahan berfungsi untuk mengatur countdown) 


function show_hide() {
    if(localStorage.getItem("continue") == null){
        document.getElementById("info_box").style.display = "inline";
        localStorage.setItem("continue", "true");
        return element = 1;
    }
    if(localStorage.getItem("continue").includes("true")){
        window.open("questionPage.html", "_blank");
        return element = 0;
    }
}

function titlebtn(){
    if(localStorage.getItem("start_btn") == null){
        para1.innerHTML = "Attemp Quiz";
    }else{
        para1.innerHTML = localStorage.getItem("start_btn").toString();
    }
}

function cancel(){
    if (element == 1) {
        document.getElementById("info_box").style.display = "none";
        localStorage.removeItem("continue")
        return element = 0;
    }else {
        document.getElementById("info_box").style.display = "inline";
        localStorage.removeItem("continue")
        return element = 1;
    }
}

//function untuk memulai quiz exam
function attemp() {
    if (element == 1) {
        document.getElementById("info_box").style.display = "none";
        localStorage.setItem("start_btn", "Continue");
        localStorage.setItem("time", countdownDate);
        para1.innerHTML = "Continue";
        window.open("questionPage.html", "_blank");
        return element = 0;
    }
    else {
        document.getElementById("info_box").style.display = "inline";
        return element = 1;
    }
}

//Function untuk countdowntimer
var expire = setInterval(function () {
    //mendapatkan waktu realtime ketika user memulai quiz
    var realtimes = new Date().getTime();
    //membuat jarak waktu yang diperlukan countdown
    var localtimer = localStorage.getItem("time");
    var distance = localtimer - realtimes;

    //rumus countdown bersadarkan waktu realtime
    var hari = Math.floor(distance / (1000 * 60 * 60 * 24));
    var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((distance % (1000 * 60)) / 1000);

    //output untuk html atau interface
    document.getElementById("countdown").innerHTML = jam + ":" + menit + ":" + detik;

    //kondisi jika countdown telah mencapai zero atau 0
    if (distance < 0) {
        clearInterval(expire);
        document.getElementById("countdown").innerHTML = "Waktu Habis";
    }
}, 1000);


//Question Display

  
//Question Variabel
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEls =  document.getElementById("question_text");
const questionNumber = document.getElementById("question_number")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const a = document.getElementById("li_a");
const b = document.getElementById("li_b");
const c = document.getElementById("li_c");
const d = document.getElementById("li_d");
const btnNext = document.getElementById("next_btn");
const btnPrev = document.getElementById("prev_btn");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    deselectedAnswerd();
    questionNumber.innerText = currentQuizData.number + ". ";
    questionEls.innerText = currentQuizData.question;
    if(currentQuizData.a == null){
        a.style.display = "none";        

    }else{
        a.style.display = "block";
    }
    if(currentQuizData.b == null){
        b.style.display = "none";        

    }else{
        c.style.display = "block";
    }
    if(currentQuizData.c == null){
        c.style.display = "none";        

    }else{
        c.style.display = "block";
    }
    if(currentQuizData.d == null){
        d.style.display = "none";
    }else{
        d.style.display = "block";
    }

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
}

function deselectedAnswerd(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    localStorage.setItem("option", answer);
    return answer;
}

//for next question btn
btnNext.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
            localStorage.setItem("score", score);
        }
    }
    currentQuiz++;
    if(currentQuiz > quizData.length-1){
        currentQuiz = quizData.length -1;
    }
    if(currentQuiz < quizData.length){
        loadQuiz();
    } else{
        '<button onclick="location.reload()"> Reload </button>'
    } 
})

//for prev question btn
btnPrev.addEventListener('click', () => {
    currentQuiz--;
    if(currentQuiz < 0){
        currentQuiz = 0;
        return currentQuiz;
    }
    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{
        '<button onclick="location.reload()"> Reload </button>'
    }
})