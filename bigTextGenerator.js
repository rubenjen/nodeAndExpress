const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
	writeFileSync('./content/bigText.txt', `Hello world, I am ${i}\n`, { flag: 'a' });
}