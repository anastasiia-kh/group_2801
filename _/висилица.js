var words = [
  "город",
  "макака",
  "дерево",
  "лампочка",
  "море",
  "лес",
];
var word = words[Math.floor(Math.random() * words.length)];

var answeArrey = [];
for (var i = 0; i < word.length; i++) {
  answeArrey[i] = "_";
}

var remainLetters = word.length;
var qty = 4;


while (remainLetters > 0) {
  alert(answeArrey.join(" "));

  var guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры');
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите только одну букву');
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase()) {
        answeArrey[j] = guess.toLowerCase();
        remainLetters--;
      } else {
        alert('У тебя осталось мало попыток')
      }

    }
  }
  var qty = 4;



}
alert(answeArrey.join(''));
alert('Отлично! Было загадано слово ' + '*' + word + '*');

words.push('кот');
words.push('солнце');
words.push('небо');
words.push('радуга');
console.log(words)