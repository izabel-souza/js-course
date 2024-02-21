// Our task will be to create a list of contacts. Initially, the list will be quite simple: we will only write three people to it using the data shown in the table below. In the rest of the course, you will return to this script and systematically extend it with new functionality, using the newly learned elements of JavaScript.

// Name	Phone	Email
// Maxwell Wright	(0191) 719 6495	Curabitur.egestas.nunc@nonummyac.co.uk
// Raja Villarreal	0866 398 2895	posuere.vulputate@sed.com
// Helen Richards	0800 1111	libero@convallis.edu

// Declare and initialize the variables where you will store all the information (nine variables in total). Display in the console information about the first and last contact in the form: name/phone/email.

let peopleInfo = {
    "Maxwell Wright": ["(0191) 719 6495", "Curabitur.egestas.nunc@nonummyac.co.uk"],
    "Raja Villarreal": ["0866 398 2895", "posuere.vulputate@sed.com"],
    "Helen Richards": ["0800 1111", "libero@convallis.edu"],
};

function printPeopleInfo() {
    console.log("Names: ", Object.keys(peopleInfo)); 
    console.log(Object.values(peopleInfo));
}
printPeopleInfo();




// Let's play florist. Declare six variables, remembering to name them according to their purpose:

// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)

// Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 

let flowers = {
    "Rose": [8, 70],
    "Lily":[10, 50],
    "Tulip": [2, 120],
}

let priceList = []

function getFlowerPrice(flower_id) {
    const flower = flowers[flower_id];
    
    let price = (flower) ? flower[0] * flower[1] : 0;
    (price > 0) ? console.log(flower_id, "\nTotal price: $", price) : console.log("Flor nao encontrada");

    priceList.push(price);
}
getFlowerPrice("Rose");
getFlowerPrice("Lily");
getFlowerPrice("Tulip");

function getTotalPrice() {

    let totalPrice = 0;

    for(i = 0; i < priceList.length; i++) {
        totalPrice += priceList[i];
    }

    console.log("All flowers' total price: $",totalPrice)
}
getTotalPrice();