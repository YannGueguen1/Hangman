var nouns = ["home", "work", "apple", "yes", "ciao", "champion", "france"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind;

document.addEventListener("keypress", function(event) {
    var h = document.createElement("H1");
    if (event.key === " "){
        wordToFind = nouns[getRandomInt(nouns.length)];
        //document.getElementById("dash").innerHTML = " ";
        var t;
        //h.appendChild(t);
        //document.body.removeChild(m);
        for (var i=0 ; i< wordToFind.length; i++){
            t = document.createTextNode("-");
            h.appendChild(t);
            p1 = document.body.appendChild(h);
        }
    }
})

document.addEventListener("keypress", function(event) {
    if (wordToFind.includes(event.key) === true){
        for (var i=0 ; i< wordToFind.length; i++){
            if (wordToFind[i] === event.key){
                var ev = document.createTextNode(event.key);
                document.getElementById("dash").innerHTML = event.key;
                p1.replaceChild(ev, p1.childNodes[i]);
            }
        }
    }
})

