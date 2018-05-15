var nouns = ["home", "work", "apple", "yes", "ciao", "champion", "france"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind;
var error=document.getElementById("counter");
var errorCounter;

document.addEventListener("keypress", function(event) {
    var h;
    var t;
    if (event.key === " "){
        h = document.createElement("div")
        wordToFind = nouns[getRandomInt(nouns.length)];
        errorCounter = 0;
        error.innerHTML = errorCounter;
        for (var i=0 ; i< wordToFind.length; i++){
            t = document.createTextNode("-");
            h.appendChild(t);
            p1 = document.body.appendChild(h);
        }
    }
    else if (wordToFind.includes(event.key) === true){
        for (var i=0 ; i< wordToFind.length; i++){
            if (wordToFind[i] === event.key){
                var ev = document.createTextNode(event.key);
                p1.replaceChild(ev, p1.childNodes[i]);
            }
        }
    }
    else{
        errorCounter = errorCounter + 1;
        error.innerHTML = errorCounter;
    }
})


