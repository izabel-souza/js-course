// Let's play florist. Declare six variables, remembering to name them according to their purpose:

// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)

// Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 

let rosesCounter = 70;
let rosePrice = 8;

let lilyCounter = 50;
let lilyPrice = 10;

let tulipCounter = 120;
let tulipPrice = 2;

function getFlowerPrice(flowerCounter, flowerPrice) {
    return flowerCounter * flowerPrice;
}

let rosesTotalPrice = getFlowerPrice(rosesCounter, rosePrice);
let liliesTotalPrice = getFlowerPrice(lilyCounter, lilyPrice);
let tulipsTotalPrice = getFlowerPrice(tulipCounter, tulipPrice);

function returnMessage(message) {
    console.log(message);
}

returnMessage(rosesTotalPrice);
returnMessage(liliesTotalPrice);
returnMessage(tulipsTotalPrice);

let totalPriceFlowers = (rosesTotalPrice + liliesTotalPrice + tulipsTotalPrice);
returnMessage(totalPriceFlowers);