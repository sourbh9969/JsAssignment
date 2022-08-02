"use strict"

// #1. Using bracket notation select an element from myArray such that myData is equal
// to 8

var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];
var myData = myArray[2][1];
console.log(myData);



// #2. Push ["dog", 3] onto the end of the myArray variable

myArray.push(["dog", 3]);
console.log(myArray);


// #3. Use the .pop() function to remove the last item from myArray, assigning the popped off value to removedFromMyArray.

var removeFromMyArray = myArray.pop();
console.log(removeFromMyArray);



// #4. Use the .shift() function to remove the first item from myArray, assigning the
// "shifted off" value to removedFromMyArray:

var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

// #5. Add ["Paul",35] to the beginning of the myArray variable using unshift() :

myArray.unshift(["Paul", 35]);
console.log(myArray);


// #6. Shopping List :
var myList = [
    ["Pen", 10],
    ["Books", 5],
    ["Cake", 4],
    ["Cookies", 2],
    ["Coke", 2],
    ["Apple", 1]
];
console.log(myList);


// #7 (i). Create a function called reusableFunction which prints the string Hi World
// to the dev console.
// (ii). Call the function :

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();


// #8. Call the function with different Arguments:
function testFun(param1, param2) {
    console.log(param1, param2);
}
testFun("Sourabh", "jadhav");
testFun("Hello", "World");




// #9. Using var, declare a global variable named myGlobal outside of any function.
// Initialize it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var keyword

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
    console.log(oopsGlobal); //op: 5
}

fun1();
console.log(myGlobal); // op:10
console.log(oopsGlobal); //Error due to scope in js


// 10. . Declare a local variable myVar inside
// myLocalScope and run the tests.

function myLocalScope() {
    var myVar = "foo";
}
myLocalScope();
console.log(myVar);



// #11. Add a local variable to myOutfit function to override the value of outerWear with
// the string sweater.

var outerWear = "Jacket";

function myOutfit() {
    outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());



// #12. Create a function timesFive that accepts one argument, multiplies it by 5, and
// returns the new value

function timesFive(num) {
    return num * 5;
}
var answer = timesFive(10);
console.log(answer);


// #13. Create a function addFive without any arguments. This function adds 5 to the sum
// variable, but its returned value is undefined:

var sum = 0;

function addFive() {
    sum = sum + 5;
}
var result = addFive();
console.log(result);



// #14. Call the processArg function with an argument of 7 and assign its return value to
// the variable processed.

var processed = processArg(7);
console.log(processed);

function processArg(params) {
    return params;
}


// #15. Write a function nextInLine which takes an array (arr) and a number (item) as
// arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    arr.push(item);
    var removedItem = arr.shift();
    return removedItem;
}

var queue = nextInLine([1, 2, 3, 4], 5);
console.log(queue);


// #16. Modify the welcomeToBooleans function so that it returns true instead of false
// when the run button is clicked.

var run = false;

function welcomeToBooleans() {
    run = true;
    return run;
}
console.log(welcomeToBooleans());


// #17. Create an if statement inside the function to return Yes, that was true if the
// parameter wasThatTrue is true and return No, that was false otherwise :

var wasThatTrue = (value) => {
    if (value) {
        return "Yes";
    }
    return "No";
}

var wasTrue = wasThatTrue(true);
console.log(wasTrue);



// #18. Add the equality operator to the indicated line so that the function will return the
// string Equal when val is equivalent to 12.


function isEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

var isEqualVariable = isEqual(13); //op: "Not Equal"
var isEqualVariable = isEqual(12); //op: "Equal"
console.log(isEqualVariable);



//Question 18 & 19 are sames
// #19. Add the equality operator to the indicated line so that the function will return the
// string Equal when val is equivalent to 12.


function isEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

var isEqualVariable = isEqual(13); //op: "Not Equal"
console.log(isEqualVariable);

var isEqualVariable = isEqual(12); //op: "Equal"
console.log(isEqualVariable);



// #20. Use the strict equality operator in the if statement so the function will return the
// string Equal when val is strictly equal to 7 :
function isEqual(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

var isEqualVariable = isEqual('7'); //op: "Not Equal"
console.log(isEqualVariable);
var isEqualVariable = isEqual(7); //op: "Equal"
console.log(isEqualVariable);
