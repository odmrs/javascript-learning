'use strict'
let message; // Declare message;
message = 'hello'; // assingment hello to message variable, this value will stay on the memory and we can use it using his name:

alert(message); // Call the variable message to alert function

// we can change it as many times as we want and the older value is removed from the variable:

message = "world!";
alert(message);

// Constants

const MY_BIRTHDAY = "25.11.2004"; // this value will never change

// Tasks :

    // Declare two variables: admin and name.
    // Assign the value "John" to name.
    // Copy the value from name to admin.
    // Show the value of admin using alert (must output “John”).
    //

// let admin;
// let name; 
//
// name = "John";
// admin = name; 
//
// alert(admin);

  // 
  //   Create a variable with the name of our planet. How would you name such a variable?
  //   Create a variable to store the name of a current visitor to a website. How would you name that variable?
  //

const ourPlanetName = "Earth";
var newUserName = "Marquin";

      // Examine the following code:
      //
      // const birthday = '18.04.1982';
      //
      // const age = someCode(birthday);
      //
      // Here we have a constant birthday for the date, and also the age constant.
      //
      // The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.
      //
      // Would it be right to use upper case for birthday? For age? Or even for both?
      //
      // const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
      //
      // const AGE = someCode(BIRTHDAY); // make age uppercase?
// Answer -> In this exemple just BIRTHDAY need to be uppercase because it is harded code, and age const will assing when the code run
