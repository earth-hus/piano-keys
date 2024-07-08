document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

var numOfPianoKeys = document.querySelectorAll(".piano-key").length;
for (var i = 0; i < numOfPianoKeys; i++) {
    document.querySelectorAll(".piano-key")[i].addEventListener("click", handClick);
}

function makeSound(key) {
    switch (key) {
        case "c":
            var c = new Audio("sounds/c.wav");
            c.play();
            break;
        case "d":
            var d = new Audio("sounds/d.wav");
            d.play();
            break;
        case "e":
            var e = new Audio("sounds/e.wav");
            e.play();
            break;
        case "f":
            var f = new Audio("sounds/f.wav");
            f.play();
            break;
        case "g":
            var g = new Audio("sounds/g.wav");
            g.play();
            break;
        case "a":
            var a = new Audio("sounds/a.wav");
            a.play();
            break;
        case "b":
            var b = new Audio("sounds/b.wav");
            b.play();
            break;
        case "h":
            var h = new Audio("sounds/c2.wav");
            h.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function handClick() {
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
