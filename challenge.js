/* this is an algorithm that track the sore my friends */
var scores = {
    "abla":{
        score:10,
        age:12,
        quartier:'baguida'
    },
    "akou":{
        score:10,
        age:12,
        quartier:'baguida'
    },
    "koko":{
        score:10,
        age:12,
        quartier:'baguida'
    },
    "yaovi":{
        score:10,
        age:12,
        quartier:'baguida'
    },
}
var ablaScore = scores['abla']['score']+=5;
console.log('le score de abla est' ,ablaScore);

var akouScore = scores['akou']['score']+=10;
console.log(akouScore);

var kokoScore = scores['koko']['score']+=3;
console.log(kokoScore);

var yaoviScore = scores['yaovi']['score']+=20;
console.log(yaoviScore);

var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
    };
    console.log(myCrazyObject['some array'][2].number)