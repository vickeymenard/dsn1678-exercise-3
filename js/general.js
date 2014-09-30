/*
	Alert is a function
	We know that it's a function because it has open/close brackets
	immediately after a word.

	A function is a reusable piece of code.
*/

//alert("YEAH, it works!");

/*
	Variables allow us to capture and hold any information.
	They are just container for putting things inside.
*/

var personsName = prompt('What is your name?');

/*
	Console.log() is for debugging
	It will output to the web inspector
*/

console.log(personsName);

/*
	A counter variable is used as part of a loop to keep a tally
	of how many times the loop has executed
*/

var counter = 0;

/*
	A loop is used to execute some code multiple times
	for(start; test if done; counter++)
*/

for (counter = 0; counter < 10; counter++) {
	/*
		Spit some content out to the bottom of the HTML document
	*/
	document.write('<h1>' + personsName + '</h1>');
}

/*
	If statement: one of two possible scenarios will be executed
	but never both.
	The if-statement will take the "true" path of the "false" path
*/

if (personsName == 'Vickey') {
	// True path
	alert('Your name is amazing!')

} else{
	// False path
	alert('Ugh. Really...')
}
