$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			document.write("Fizz Buzz\n");
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
});