document.addEventListener("keydown", handleKeyPress);
var allDrumButtons = document.querySelectorAll("button.drum");
for (var i = 0; i < allDrumButtons.length; i++) {
    allDrumButtons[i].addEventListener("click", handleClick);
    
}
function handleClick(a) {
    var x = a.target.innerHTML;
    if (x == "w") {
        var audio = new Audio('sounds/tom-1.mp3');
    }
    if (x == "a") {
        var audio = new Audio('sounds/tom-2.mp3');
    }
    if (x == "s") {
        var audio = new Audio('sounds/tom-3.mp3');
    }
    if (x == "d") {
        var audio = new Audio('sounds/tom-4.mp3');
    }
    if (x == "j") {
        var audio = new Audio('sounds/snare.mp3');
    }
    if (x == "k") {
        var audio = new Audio('sounds/crash.mp3');
    }
    if (x == "l") {
        var audio = new Audio('sounds/kick-bass.mp3');
    }
    audio.play();

}

function handleKeyPress(a) {
    var x = a.key;
    if (x == "w") {
        var audio = new Audio('sounds/tom-1.mp3');
    }
    else if (x == "a") {
        var audio = new Audio('sounds/tom-2.mp3');
    }
    else if (x == "s") {
        var audio = new Audio('sounds/tom-3.mp3');
    }
    else if (x == "d") {
        var audio = new Audio('sounds/tom-4.mp3');
    }
    else if (x == "j") {
        var audio = new Audio('sounds/snare.mp3');
    }
    else if (x == "k") {
        var audio = new Audio('sounds/crash.mp3');
    }
    else if (x == "l") {
        var audio = new Audio('sounds/kick-bass.mp3');
    }
    else {
        return;
    }
    audio.play();
}