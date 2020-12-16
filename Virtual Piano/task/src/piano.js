let allKeys;
document.querySelectorAll("kbd").forEach(function (elem){
    allKeys+=elem.id;
})
document.addEventListener("keypress", function(e){
    let code = e.code;
    code= code[3];
    handleBeepEvent(code);
})
function handleBeepEvent(code){
    if(allKeys.includes(code)){
        console.log("The \'"+code+"\' is pressed.");
    }else{
        console.log("Wrong key pressed.")
        return;
    }
    let audio = new Audio("audio/"+ code + ".mp3");
    audio.play();
}


