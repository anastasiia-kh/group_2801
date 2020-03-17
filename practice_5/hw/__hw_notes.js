var firstFunction = function () {
  console.log('Hello');
};

var sayHelloTo = function (name) {
  console.log('Hello, ' + name + '!');
};

var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};

var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

var double = function (number) {
  return number * 2;
};
// ______________________
var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];

// ___________________________
// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// var randomWord = randomWords[Math.floor(Math.random() * 5)];
// var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";


// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

// var generateRandomInsult = function () {
//   var randomBodyParts = ["глаз", "нос", "череп"];
//   var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//   var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//   var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//   return randomString;
// };

// 

// var fifthLetter = function (name) {
//   if (name.length < 5) {
//     return;
//   }
//   return "Пятая буква вашего имени: " + name[4] + ".";
// };


// _____________________________
