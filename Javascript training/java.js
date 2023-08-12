alert('seen');

const animals = [ 'dog', 'cat', 'lion', 'elephant', 'tiger', 'rhino'];
console.log(animals)
console.log(animals.join(','));

const spelling = "House-keepers-are-great-helpers";
console.log(spelling);
console.log(spelling.split('-'));

const firstname = "Julius";
const message = "Hello "+firstname+" Good afternoon";
console.log(firstname);
console.log(message);

const hobby = "playing volleyball";
const sentence = ""+hobby+" is my favorite exercising sport";
console.log(sentence);

const isWeekend = true;
if (isWeekend) {
  console.log("Time to relax!");
} else {
  console.log("Keep working!");
}

const number = 48; 
if (number % 2 === 0) {
  console.log(number + " is even."); 
} else {
  console.log(number + " is odd.");
}

const username = "Basil";
const message1 = ""+firstname+" "+username+" is my fullname!";
console.log(message1);

const length = 7;
const width = 4;   
const area = length * width;
//console.log("Area of the rectangle: " + area + ");//
console.log("Area of the rectangle: " + area );

const fruits = ['Mango', 'Orange', 'Apple', 'Pineapple'];
console.log(fruits);
const vegetables = ['lettuce', 'carbage', 'carrot'];
console.log(vegetables);
const merged = fruits.concat(vegetables);
console.log(merged);

const logic = ['10, 20, 30, 40, 50, 60, 70, 80, 90, 100'];
console.log(logic);
console.log(logic.join(','));

const fruits2 = ['Mango', 'Orange', 'Apple', 'Pineapple', 'banana', 'watermelon'];
console.log(fruits2);

fruits2.splice(1, 2);
console.log(fruits2);

