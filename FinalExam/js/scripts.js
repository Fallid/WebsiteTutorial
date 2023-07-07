var element;
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

var para1 = document.getElementById("start_btn");
function attemp(){
    if(element == 1){
        document.getElementById("info_box").style.display="none";
        para1.innerText = "Continue";
        window.open("questionPage.html", "_blank");
        return element = 0;
    }
    else{
        document.getElementById("info_box").style.display="inline";
        return element=1;
    }
}
