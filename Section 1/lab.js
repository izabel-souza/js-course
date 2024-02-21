// Our task will be to create a list of contacts. Initially, the list will be quite simple: we will only write three people to it using the data shown in the table below. In the rest of the course, you will return to this script and systematically extend it with new functionality, using the newly learned elements of JavaScript.

// Name	Phone	Email
// Maxwell Wright	(0191) 719 6495	Curabitur.egestas.nunc@nonummyac.co.uk
// Raja Villarreal	0866 398 2895	posuere.vulputate@sed.com
// Helen Richards	0800 1111	libero@convallis.edu

// Declare and initialize the variables where you will store all the information (nine variables in total). Display in the console information about the first and last contact in the form: name/phone/email.

let person1_name = "Maxwell Wright";
let person1_cel = "(0191) 719 6495";
let person1_email = "Curabitur.egestas.nunc@nonummyac.co.uk";

let person2_name = "Raja Villarreal";
let person2_cel = "0866 398 2895";
let person2_email = "posuere.vulputate@sed.com";

let person3_name = "Helen Richards";
let person3_cel = "0800 1111";
let person3_email = "libero@convallis.edu";

console.log("People Info: \n")
function printPeopleInfo(name, cel, email) {
    console.log("Name: ", name);
    console.log("Cel: ", cel);
    console.log("Email: ", email);
    console.log("\n");
}
printPeopleInfo(person1_name, person1_cel, person1_email);
printPeopleInfo(person2_name, person2_cel, person2_email);
printPeopleInfo(person3_name, person3_cel, person3_email);