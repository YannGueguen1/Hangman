var nouns = ["home", "work", "apple", "yes", "ciao"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind = nouns[getRandomInt(nouns.length)];

console.log(wordToFind);