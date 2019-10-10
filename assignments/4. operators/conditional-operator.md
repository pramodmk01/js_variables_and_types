<!-- ## If Statement
1.  🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div -->

  function simpleCal () {
    let a = +prompt("enter a no");
    let b = +prompt("enter a no");
    let c = prompt("select a operator + - * /");

    switch (c) {
  	case "+":
			c = a + b;
      alert( c )
      break;

      case "-":
      c = a - b;
      alert( c )
      break;

      case "*":
      c = a * b;
      alert( c )
      break;

      case "/":
      c = a / b;
      alert( c )
      break;
  }
  
  
}
simpleCal ()
    

2. 🎖Write a if else statement which checks if the status is single `console.log` the message `John is single` or else `John is married`
```js
var firstName = 'John';
var status = 'single';
// Your code goes here
```
var firstName = 'John';
var status = 'single';
 if (firstName == status) {
   console.log('john is single');
 } else {
     console.log('john is married');
   }
if (firstName)

3. 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
```js
// your code goes here
```
let a = prompt("enter a no");
let b = prompt("enter another no");
if (a > b) {
	alert(a);
} else 
	alert(b);

4. 🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.

```js
// Your code goes here
```
let num1 = +prompt( "enter first no");
let num2 = +prompt( "enter second no");
let num3 = +prompt( "enter third no");
let product = num1 * num2 * num3;
alert(product);

## Switch Statement

1. 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
```js
// Your code goes here
```
 var a = +prompt("enter your number")
    switch(a) {
    case 1:
    alert("ONE");
    break;
    case 2:
    alert("TWO");
    break;
    case 3:
    alert("THREE");
    break;
    case 4:
    alert("FOUR");
    break;
    case 5:
    alert("FIVE");
    break;
    case 6:
    alert("SIX");
    break;
    case 7:
    alert("SEVEN");
    break;
    case 8:
    alert("EIGHT");
    break;
    case 9:
    alert("NINE");
    break;
    default:
    alert("PLEASE TRY AGAIN");
    }

2. 🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
```js
// Your code goes here
```
 var usermarks = +prompt("enter marks inbetween 0-100")
    switch(true) {
        case (usermarks>90):
        alert("Your Grade is AA");
    break;
    case (usermarks<=90 && usermarks>80):
        alert("Your Grade is AB");
    break;
    case (usermarks<=80 && usermarks>70):
        alert("Your Grade is BB");
    break;
    case (usermarks<=70 && usermarks>60):
        alert("Your Grade is BC");
    break;
    case (usermarks<=60 && usermarks>50):
        alert("Your Grade is CC");
    break;
    case (usermarks<=50 && usermarks>40):
        alert("Your Grade is CD");
    break;
    case (usermarks<=40 && usermarks>30):
        alert("Your Grade is cc");
    break;
    case (usermarks<=30):
        alert("Your Grade is FF");
    break;
    default:
    alert("error");
    }

