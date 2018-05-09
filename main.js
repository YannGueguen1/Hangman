var nouns = ["home", "work", "apple", "yes", "ciao"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind = nouns[getRandomInt(nouns.length)];

document.addEventListener("keypress", function(event) {
    if (wordToFind.includes(event.key) === true){
        for (var i=0 ; i< wordToFind.length; i++){
            if (wordToFind[i] === event.key){
                document.getElementById("dash").innerHTML = event.key;
            }
        }
    }
    
})