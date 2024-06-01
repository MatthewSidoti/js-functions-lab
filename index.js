function name(){
console.log('matthew')
}
name()

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
// let x=18
//   name() if (x <= 17){
//     return console.log("Minor")} 
// else {console.log("Adult");}

function isAdult(age){
    if (age <= 17) {console.log("Minor")}
        else {console.log("Adult");}
    
}
isAdult(10)
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const vowel= "aeiou"
function isCharAVowel(letter){
if (vowel.includes(letter)){
console.log("true")}
else{
    console.log("false")
}}
isCharAVowel("b")


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/



function generateEmail (firstName, lastName) {
    console.log(firstName + lastName + "@example.com")
}


generateEmail("Matthew", "Sidoti")

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay){
    // console.log("Good" + timeOfDay + "," + " " + name +"!" )
    console.log(`Good ${timeOfDay}, ${name}!`)
}
greetUser("Matthew", "morning")

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(numberOne, numberTwo, numberThree){
    console.log (Math.max(numberOne, numberTwo, numberThree))
}
maxOfThree(17, 4, 9)

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calcutlateTip(billAmount, tipPercentage){
console.log(billAmount * tipPercentage)
}
calcutlateTip(50, .20)


// console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(integerOne, intergerTwo, operator){
    switch(operator){
    case 'add':
        return integerOne + intergerTwo;
    case 'subtract':
        return integerOne - intergerTwo;
    case 'multiply':
        return integerOne * intergerTwo;
    case 'divide':
         return integerOne / intergerTwo;
        
}}
console.log(basicCalculator(10, 5, 'subtract'));
