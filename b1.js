/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var question = "How old are you?";
var grade = 50;
prompt(question);
if (grade == 50) {
    question = question + "Passed!";
} else {
    question = question + "Failed!";
}
console.log(question);

// Using a ternary operator.
console.log("You " + (grade >= 50 ? "Passed!" : "Failed!"));


///Math
if ("Jon".length * 2 / (2+1) ===  2)
{
    console.log("The answer makes sense!");
} 
else {
    console.log("The answer was wrong")
}

// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript"
// console.log("Javascript".substring(0,4));
console.log("January".substring(0,3));
// "Jan"
console.log("Melbourne is great".substring(0,12));
// Melbourne is
console.log("Hamburgers".substring(3,10));
//burgers

//On line 2, declare a variable myName and give it your name.
var myName = "Lauren";
//On line 4, use console.log to print out the myName variable.
console.log(myName);
//On line 7, change the value of myName to be just the first 2 
//letters of your name.
myName = myName.substring(0,2);

//On line 9, use console.log to print out the myName variable.
console.log(myName);

//Asking for feeback
var feedback = prompt("Please Rate Out The Game Of 10");

if (feedback >= "8") {
    console.log("This is just the beginning of my game empire");
}
else {
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}

/// Don't repeat yourself'
var orangeCost = function(price) {
	var total = price * 5;
	console.log(total);
}
orangeCost(5);

// Return keywork
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(5);
console.log(newNumber);

// Paper Beats Rock
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

console.log(computerChoice);
if ( 0 < computerChoice <= 0.33) {
	var userChoice = "rock";
}
else if (0.34 <= computerChoice <= 0.66) {
	var userChoice = "paper";
}
else {
	var userChoice = "scissor";
}

/////Check type of variable 
var cube = function(x) {
	if (typeof(x) === 'number') {
    return x * x * x;
	}
	if (typeof(x) === 'string') {
		return "NaN";
	}
};

// The cube function works fine with a number...
console.log(cube(5));

// ...but if it's called with a string, it returns NaN!
console.log(cube("test"));

/// If it wasn't a number, we probably shouldn't try to multiple it. We'll just try return 0 in that case
var cube = function (x) {
    if (typeof(x) !== 'number') return 0;
    return x * x * x;
};

// Once you uncomment the type check in line 2,
// the cube() function should return 0.
cube("test");

// Make it start counting from 5. Plrase! Stop the counting when it print out 50
// Only count every fifth number. So we want to increment i by 5
for (i<4; i<=51; i+=5) {
    console.log(i);
}

//Array Position
// Practice array!

var junkData = ["Eddie Murphy", 49, "peanuts", 31];

for (i=0; i< junkData.length; i++) {
    console.log(junkData[i]);
}

var names = ["put", "your", "five", "names", "here"];
for (var i = 0; i < names.length; i ++) {
    console.log("I know someone called " + names[i]);
}
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
// Write your code below!
for (var i = 0; i< array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}


console.log(largest);

/*jshint multistr:true */

var text = "Thao ABn CHL OKFR UYHF TTT YOOU HHH";
var myName = "Thao";
var hits = [];

for(var i = 0; i < text.length; i++) {
    if (text[i] == "T") {
        // If we find it, add characters up to
        // the length of my name to the array
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}

for (var k=0;k < text.length; k +=1) {
    
}
/*jshint multistr:true */

understand = true;

while(understand){
    console.log("I'm learning while loops!");
    understand.false;
    //Change the value of 'understand' here!
    
}

//Remember to set your condition outside the loop!
var loops = 0;
var loop = function(){
    while(loops < 3){
        console.log("I'm looping!");
         loops++;
        //Your code goes here!
    }
};

loop();

// Counting Down
// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

function countdown(i) {
    for (i; i<=10; i--) {
   
    if (i<=0) {
       return;
    }
    console.log(i);
    
    }
}
countdown(10);

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

// if/else 
var isEven = function(number) {
  // the number receives is evenly divisible by 2
  if (number % 2 == 0) {
      return true;
  }
  else {
      return false;
  }
};
isEven(8);

// 
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}