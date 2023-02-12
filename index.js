console.log("hello");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
/* ********* */
/* To start going, we need to use push method to go to our friend's house */

let wayToMyhouse = [];
wayToMyhouse.push("pass the gate");
wayToMyhouse.push("turn at the right");
wayToMyhouse.push("turn at the round about");
wayToMyhouse.push("stop at the parking side");
wayToMyhouse.push("ring the bell");
console.log(wayToMyhouse);

/* 
To reverse the way to home, we use pop method
 */
wayToMyhouse.pop();
wayToMyhouse.pop();
wayToMyhouse.pop();
wayToMyhouse.pop();
wayToMyhouse.pop();

console.log(wayToMyhouse);

/* use of slice method */
let arr = "we are the best developper in the world";
console.log(arr.slice(0, 8));

/* 
Math method
***** */
var BodyPart = ["face", "nose", "hair"];
var Adjectives = ["smelly", "boring", "ugly"];
var Words = ["fly", "Marmot", "stick", "monkey", "Rat"];

var randomBodyPart = BodyPart[Math.floor(Math.random() * BodyPart.length)];
console.log(randomBodyPart);
var randomAdjective = Adjectives[Math.floor(Math.random() * Adjectives.length)];
console.log(randomAdjective);
var randomWords = Words[Math.floor(Math.random() * Words.length)];
console.log(randomWords);

var randomInsult =
  "your " +
  randomBodyPart +
  " is " +
  randomAdjective +
  " like a " +
  randomWords;
console.log(randomInsult);

let array = [3, 2, 1];

console.log(array.join(" is bigger than "));

var dinosaurs = [
  { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
  { name: "Stegosaurus", period: "Late Jurassic" },
  { name: "Plateosaurus", period: "Triassic" },
];

console.log(dinosaurs[1]["period"]);
