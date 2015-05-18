$(document).ready(function() {

var number = prompt("What number should we count up to?");

	if (number != null && isNaN(+number) == false) {
		for (var i = 1; i <= +number; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				document.write("FizzBuzz\n");
				console.log("Fizz Buzz");
			} else if (i % 3 == 0) {
				document.write("Fizz\n");
				console.log("Fizz");
			} else if (i % 5 == 0) {
				document.write("Buzz\n");
				console.log("Buzz");
			} else {
				document.write(i + "\n");
				console.log(i);
				};	
		}; 
	} else {
		var newNumber = prompt("Input must be an integer");
		for (var i = 1; i <= +newNumber; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				document.write("FizzBuzz\n");
				console.log("Fizz Buzz");
			} else if (i % 3 == 0) {
				document.write("Fizz\n");
				console.log("Fizz");
			} else if (i % 5 == 0) {
				document.write("Buzz\n");
				console.log("Buzz");
			} else {
				document.write(i + "\n");
				console.log(i);
				};	
		}};
});