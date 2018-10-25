/**
 * First js code
 * Author: Lori A. Oliver
 * Description: Playing with scopes
 */

// var creates a global variable
var ex1 = "We start here, creating a global variable outside of the function scope.";
console.log(ex1);


// let creates a local variable 
// In order to access inside a function it will need to be passed in.
let ex3 = "Local variable created in a global context";
console.log(ex3);

myFunct();
console.log(ex1 + " available on the outside.");
ex2 = "Changed global variable created inside the function.";
console.log(ex2);

// This local variable was not changed when passed into the function
// To retain the change the variable will need to passed back into original variable
console.log(ex3);
let ex4 = "Recreate same local variable ex4 outside the function";
console.log(ex4);

function myFunct(ex3){
	ex1 =  "Inside the function, we change global variable created outside the function.";
	console.log("\t" + ex1);
	var ex2 = "Created global variable inside the function.";
	console.log("\t" + ex2);
	ex3 = "Local (global) variable changed within the function.";
	console.log("\t" + ex3);

	let ex4 = "Local variable created within the function and will not be available outside of it";
	console.log("\t" + ex4);
}

