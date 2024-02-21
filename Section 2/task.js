"use strict"

// Write a piece of code that will create variables and initialize them with values of Boolean, Number, BigInt, String and undefined types using (whenever possible) literals and constructor functions.
const name = "Max"; //string
let age = 23; //integer
let likeGame = "Super Mario World"; //string
let major = "SC"; //string
const isMale = true; //boolean
let patner = undefined; //undefined
let work = null; //null
let record = 2n; //BigInt

// Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, for example, in the following form: 1000 [number].
console.log(`Info: \nName: ${name} [string], Age: ${age} [number - integer]\nIdentify as a male: ${isMale} [boolean]\nLikes: ${likeGame} [string] and his record in the game is ${record} [BigInt].\nHe's in university and studies: ${major} [string]\nHis partner is ${patner} [undefined]\nCurrently working at ${work} [null]`);

// Carry out a chain of convertions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
let string = "1234";
let stringToNum = String(string);
let numToBigInt = BigInt(stringToNum);
let bigIntToBol = Boolean(numToBigInt);

console.log(`Convertion:\nString: ${string} -> Number: ${stringToNum} -> BigInt: ${numToBigInt} -> Boolean: ${bigIntToBol}`);

// Try adding two values of the same type and check the result type. Try it for all primitive types.

    //number
    console.log(4 + 4);

    //string
    console.log("Super " + "Mario " + "World");

    //boolean
    console.log(true + false);

    //bigInt
    console.log(4n + 7n);

    //undefined
    console.log(undefined + undefined);

    //null
    console.log(null + null);

// Try adding two values of different types and check the results.
let count = true + 5;
console.log(count)

// Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1) 
let result = 42 + Number("1");
console.log(result);