// variabel global
var element; //variabel untuk true or false info_box muncul dan hilang
var para1 = document.getElementById("start_btn"); //variabel untuk mengubah title element start button
var countdownDate = new Date().getTime() + 1000*60*60; //variabel untuk mengatur waktu hitung mundur (penjumlahan berfungsi untuk mengatur countdown) 

function show_hide(){
    if(element == 1){
        document.getElementById("info_box").style.display="none";
        return element = 0;
    }
    
    else{
        document.getElementById("info_box").style.display="inline";
        return element=1;
    }
}

function attemp(){
    if(element == 1){
        document.getElementById("info_box").style.display="none";
        para1.innerText = "Continue";
        localStorage.setItem("time" ,countdownDate);
        window.open("questionPage.html", "_blank");
        return element = 0;
    }
    else{
        document.getElementById("info_box").style.display="inline";
        return element=1;
    }
}

var expire = setInterval(function(){
    //mendapatkan waktu realtime ketika user memulai quiz
    var realtimes = new Date().getTime();
    //membuat jarak waktu yang diperlukan countdown
    var localtimer = localStorage.getItem("time");
    var distance = localtimer - realtimes;
    
    //rumus countdown bersadarkan waktu realtime
    var hari = Math.floor(distance / (1000*60*60*24));
    var jam = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var menit = Math.floor((distance % (1000*60*60)) / (1000*60));
    var detik = Math.floor((distance % (1000*60)) / 1000);

    //output untuk html atau interface
    document.getElementById("countdown").innerHTML = jam + ":" + menit + ":" + detik;

    //kondisi jika countdown telah mencapai zero atau 0
    if(distance < 0){
        clearInterval(expire);
        document.getElementById("countdown").innerHTML = "Waktu Habis";
    }
}, 1000);
