var nouns = ["home", "work", "apple", "yes", "ciao", "champion", "france"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind;
var error=document.getElementById("counter");
var errorCounter;
var dashString = document.createTextNode("-");
var isComplete = false;
/*
document.addEventListener("keypress", function(event) {
    var h;
    var t;
    if (event.key === " "){
        h = document.createElement("div")
        h.className = "word";
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
                
                for (var j = 0 ; j< wordToFind.length; j++) {
                    
                    //console.log(p1.childNodes[j] !== dashString);
                    if (p1.childNodes[j] !== dashString) {
                    }
                    else {
                        console.log(isComplete);
                        console.log(1);
                        isComplete = true;
                        break;
                    }
                }
                if (isComplete) {
                    alert("Word is complete");                
                }
                
            }
            
        }
    }
    else{
        errorCounter = errorCounter + 1;
        error.innerHTML = errorCounter;
    }
})
*/
var h;
var t;
var unknownWord ="";
document.addEventListener("keypress", function(event) {
    
    if (event.key === " "){
        wordToFind = nouns[getRandomInt(nouns.length)];
        errorCounter = 0;
        error.innerHTML = errorCounter;        
        for (var i=0 ; i< wordToFind.length; i++){
            unknownWord += "-";
        }
        document.getElementById("dash").innerHTML = unknownWord;
        console.log(unknownWord);
    }
    else if (wordToFind.includes(event.key) === true){
        for (var i=0 ; i< wordToFind.length; i++){
            
            if (wordToFind[i] === event.key){
                unknownWord[i] = unknownWord[i].replace("-", event.key);
                
                document.getElementById("dash").innerHTML = unknownWord;
                for (var j = 0 ; j< wordToFind.length; j++) {
                    if (unknownWord[j] !== "-") {
                    }
                    else {
                        isComplete = true;
                        break;
                    }
                }
                if (isComplete) {
                    alert("Word is complete");                
                }
                
            }
            
        }
    }
    else{
        errorCounter = errorCounter + 1;
        error.innerHTML = errorCounter;
    }
})