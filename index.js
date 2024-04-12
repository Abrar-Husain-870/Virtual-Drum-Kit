//this section detects that which button has been pressed:
var noOfDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrums;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);    //whenever the click is observerd by the button the function named handleClick will run.
   
   function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    }
}


//this section detects that which key has been pressed:
document.addEventListener("keypress",function(event){   //you can also decare a function within the same line of code.
    makeSound(event.key);
    buttonAnimation(event.key);
});


//this section is used to produce sound:
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); 
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;    

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
            break;

            
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
            break;

            
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play(); 
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play(); 
            break;
        
        case "l":    
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play(); 
            break;           

        default:
    }
}


//this function gives a shadow feedback to a key when it is pressed: 
function buttonAnimation(currentKey){                           
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {                        //setTimeout function which when used for a function, will make the function run after a given time(milliseconds). It is used as :  setTimeout( a function, a time in millisecond).
        activeButton.classList.remove("pressed");
    },100);
}