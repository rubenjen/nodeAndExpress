//Illustration 1
// console.log("Task 1 starting...");

// setTimeout(() => {
// 	console.log("Tast 2 executing...");
// }, 0);

// console.log("Task 3 starting...");

// Illustration 2

const { readFile } = require('fs');

console.log("starting task 1...");

readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return
	}
	console.log(result);
	console.log("Task 1 Completed!!");
});

console.log("Now starting task 2...");

// RESULT

// starting task 1...
// Now starting task 2...
// Hi! I am the first text file.
// Task 1 Completed!!

// Illustration 3

setInterval(() => {
	console.log("Hello world!");
}, 2000);

console.log("I will run before the callback");

// Illustration 4
const http = require('http');
const server = http.createServer((req, res) => {
	console.log("request event");
	res.end("Hello World");
});

server.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});