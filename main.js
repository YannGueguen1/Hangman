var nouns = ["home", "work", "apple", "yes", "ciao"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind;

document.addEventListener("keypress", function(event) {
    var h = document.createElement("H1");
    if (event.key === " "){
        wordToFind = nouns[getRandomInt(nouns.length)];
        HTMLFormElement.reset()
        //var t = document.createTextNode(" ");
        //h.appendChild(t);
        //document.body.replaceChild(t,h);
        for (var i=0 ; i< wordToFind.length; i++){
            t = document.createTextNode("-");
            h.appendChild(t);
            document.body.appendChild(h);
        }
    }
})

document.addEventListener("keypress", function(event) {
    if (wordToFind.includes(event.key) === true){
        for (var i=0 ; i< wordToFind.length; i++){
            if (wordToFind[i] === event.key){
                document.getElementById("dash").innerHTML = event.key;
            }
        }
    }
})
