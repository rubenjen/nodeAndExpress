const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/results.txt',
	`Here is the result: ${first + second}`,
	{ flag: 'a' }
	);