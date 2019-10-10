// Challenge 1.
// Log message in console saying "I'm Learning Javascript"

// Challenge 2.
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// Challenge 3.
// Use alert function to to show a message saying “Hello World”.

// Challenge 4.
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"

// Challenge 5.
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

// Challenge 6.
// var city = "Dharamshala";
// var country = "India";
// Alert the above variable like "Dharamshala, India";

// -----------------------------
console.log( "Im learning javascript" )//chal 1

let admin; //chal2
let name;
name = "John";
admin = name;
alert(admin);

alert("Hello world"); //chal3

let greetings = prompt("Name of person");//chal4
alert(`Welocme ${greetings}`);

let lengthOfString = prompt("display the length of the string"); // chall 5
let store;
store =lengthOfString.length;
alert(store);

let country1; //cal6
country1= "India";
let city1= "Dharmshala";
alert(`${country1}, ${city1}`);