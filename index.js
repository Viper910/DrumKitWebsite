var no_ofdrums = document.getElementsByClassName("drum");
for (let index = 0; index < no_ofdrums.length; index++) {
      document.querySelectorAll(".drum")[index].addEventListener("click", handleclick);
    }
function handleclick() {
    var insidebuttonhtml = this.innerHTML;
    check(insidebuttonhtml);
    buttonAnimation(insidebuttonhtml);
    document.addEventListener("keypress",printconsole);
    function printconsole(event){
        check(event.key);
        buttonAnimation(event.key);
    }
}
function check(element){
    switch(element){
        case "w": 
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a": 
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s": 
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d": 
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case "j": 
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        
        case "k": 
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();

            break;
            
        case "l": 
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            buttonAnimation("l");
            break;
    }
}


function buttonAnimation(currentkey){
    var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed")
    setTimeout(function(){activebutton.classList.remove("pressed");},100);
}