/**
 * Counter js
 * Author: Lori Oliver
 * Description: Demonstrating arrow functions and this object
 */

 // Counter function
 // Right now it creates a new object everytime whereas we need the instance of the object
 // to be consistent.
 function Counter() {
 	this.num = 0;

 	this.timer = setInterval(function add(){
 		this.num++;
 		console.log(this.num);
 	}, 1000);
 }

 var b = new Counter();

 // Clears the NaN error, but now there is no timer
 clearInterval(b.timer);

// Creating the inner function using arrows
// This allows us to bind the this
function CounterArrow() {
	this.num = 0;
  	this.timer = setInterval(() => {
    	this.num++;
    	console.log(this.num);
  }, 1000);
}
var c = CounterArrow();

// The original this binding created by the Counter constructor 
// function is preserved. Inside the setInterval function, 
// this is still bound to our newly created b object!