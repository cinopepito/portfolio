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
dinosaurs.forEach((ele) => {
  console.log(ele);
});
console.log(dinosaurs[1]["period"]);
/* let's track our money like a bank with an array */
var ownedMoney = {};
ownedMoney["john"] = 5;
ownedMoney["anna"] = 10;
ownedMoney["kokou"] = "";

ownedMoney["john"] += 3;
ownedMoney["anna"] += 20;
console.log(ownedMoney["john"]);
console.log(ownedMoney["anna"]);

/* Storing infrmation about movies */
var movies = {
  "findind Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD",
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD",
  },
  "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray",
  },
};
var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blu-ray",
};
movies["cars"] = cars;
console.log(movies)