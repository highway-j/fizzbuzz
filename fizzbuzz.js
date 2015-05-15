$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			document.write("Fizz Buzz");
			console.log("Fizz Buzz");
		} else if (i % 3 == 0) {
			document.write("Fizz");
			console.log("Fizz");
		} else if (i % 5 == 0) {
			document.write("Buzz");
			console.log("Buzz");
		} else {
			document.write(i);
			console.log(i);
		};
	};
});