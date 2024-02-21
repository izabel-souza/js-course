"use strict"

// -----OBJECT
// Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:
// starting station (key name from, give the name of the nearest station in your area as a value);
// end station (key name to, give any other station within 100km as a value);
// the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).
// The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.
let train_ticket = {
    starting_station: "Osaka",
    end_station: "Tokyo",
    price_ticket: 45.000,
};

console.log(`My trip starts at ${train_ticket.starting_station} and ends in ${train_ticket.end_station} and I'm gonna pay ${train_ticket.price_ticket} wen for that.`);

// Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.
let person = {};

person.firstName = prompt("Please, inform you first name: ");
person.lastName = prompt("Please, inform you last name: ");

console.log(`Hey, ${person.firstName} ${person.lastName}!`);

// -----ARRAY
// We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

// Speaking JavaScript, Axel Rauschmayer, 460;
// Programming JavaScript Applications, Eric Elliott, 254;
// Understanding ECMAScript 6, Nicholas C. Zakas, 352.

// Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.

let books = [
    {
        title: "Speaking JavaScript", 
        author: "Axel Rauschmayer", 
        numberPages: 460
    },
    {
        title: "Programming JavaScript Applications", 
        author: "Eric Elliot", 
        numberPages: 254
    }, 
    {
        title: "Understaing ECMAScript 6", 
        author: "Nicholas C. Zakas", 
        numberPages: 352
    },
];


// Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.

books[3] = {
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    numberPages: 254,
};

// Use the slice command to copy the last two books to the new array.
console.log(books.slice(2));

// The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.
books.shift();
console.log(books.length);
console.log(books);

// Display the sum of the pages of all the books from the collection.

let totalPages = 0;

for(let i = 0; i < books.length; i++) {
    totalPages = totalPages + books[i].numberPages;
}
console.log(totalPages);