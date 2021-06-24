let word = "found7dnuof";
let answer;
const words = word.toLocaleLowerCase().split("");
let count = 0;
let arrCount = 0;

const newWords = [];

for (let i = 0; i < words.length; i++) {
  if (typeof words[i] === "string") {
    newWords.push(words[i]);
  }
}

for (let i = 0; i < newWords.length / 2; i++) {
  if (newWords[i] === newWords[newWords.length - i - 1]) {
    count++;
  }
}

if (count === parseInt(newWords.length / 2) + 1) {
  answer = "YES";
} else answer = "NO";

console.log(answer);
