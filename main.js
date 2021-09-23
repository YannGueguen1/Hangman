var nouns = [
  "mysterious",
  "official",
  "adult",
  "home",
  "work",
  "apple",
  "yes",
  "ciao",
  "champion",
  "france",
  "Moscow",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var wordToFind;
var error = document.getElementById("counter");
var errorCounter;
var dashString = document.createTextNode("-");
var isComplete;
var h;
var t;
var unknownWord;
var tries = document.getElementById("tries");
let allTries=[];

document.addEventListener("keypress", function (event) {
  if (event.key === " ") {
    wordToFind = nouns[getRandomInt(nouns.length)];
    unknownWord = "";
    isComplete = false;
    errorCounter = 0;
    error.innerHTML = errorCounter;
    for (var i = 0; i < wordToFind.length; i++) {
      unknownWord += "-";
    }
    document.getElementById("dash").innerHTML = unknownWord;
  } else if (wordToFind.includes(event.key) === true) {
    for (var i = 0; i < wordToFind.length; i++) {
      if (wordToFind[i] === event.key) {
        splitWord = unknownWord.split("");
        splitWord[i] = event.key;
        unknownWord = splitWord.join("");
        document.getElementById("dash").innerHTML = unknownWord;
        for (var j = 0; j < wordToFind.length; j++) {
          if (unknownWord[j] === "-") {
            isComplete = false;
            break;
          } else {
            isComplete = true;
          }
        }
        if (isComplete) {
          alert("Word is complete");
          finalErrorCount = errorCounter;
        }
      }
    }

  } else {
    errorCounter = errorCounter + 1;
    error.innerHTML = errorCounter;
  }

  if (allTries.includes(event.key)){

  } else {
    allTries.push(event.key)
    let newTry = document.createElement("span");
    newTry.innerHTML = event.key.toUpperCase() + " ";
    tries.appendChild(newTry);
  };
});
