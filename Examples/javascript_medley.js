// Variables ======================================================

// Boolean
sunshine = true;
bigfoot = false;

// Numeric
var a = 10
var b = 20;

// basic operations

c = a * b; // 200
c = a / b; // 0.5
c = a - b; // -10
c = a + b; // 30

// Textual (STRING)

a = 'Firstname';
b = 'Lastname';

// Concat
c = a + ' ' + b; // 'Firstname Lastname'


// Lists (Arrays) =====================================================
var list = ['red'];

// Add an element; 
list.push('green'); // ['red', 'green']

var green = list[1]; // green
var red = list[0]; // red

// get the number of elements
list.length; // 2


// Branching (and logical operations) =================================

var a = 10; 
var b = 20;

var c = a > b // false
var c = a < b // true
var c = a === b // false (Note the triple equal sign. a and b are not always numbers)

if (a >= b) {
	// if a bigger or equal to b do stuff here
} else if (a < b) {
	// if a smaller than b do stuff here
} else {
	// None of those are true? Do this 
}

// Loops ===============================================================

// forward

for(var i=0; i <= 10; i++) {
	// do stuff 10 times by increasing i by one every step

	var x = i * 10
	// x = 0
	// x = 10
	// x = 20
	// x = 30
	// x = 40
	// x = 50
	// x = 60
	// x = 70
	// x = 80
	// x = 90
	// x = 100

}

// backward (reverse)

for(var i=10; i >= 0; i--) {
	// do stuff 10 times by decreasing i by one every step

	var x = i * 10
	// x = 100
	// x = 90
	// x = 80
	// x = 70
	// x = 60
	// x = 50
	// x = 40
	// x = 30
	// x = 20
	// x = 10
	// x = 0
}


// functions with return values

function add(a, b) {
	return a + b;
}

x = add(6, 8) // 14

// functions no return value
function sayHelloTo(person) {
	console.log('Hello ' + person);
}

// Call it with name + (arguments)
sayHelloTo('Ubul') // Hello Ubul;

