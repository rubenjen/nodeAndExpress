const { createReadStream } = require('fs');
const stream = createReadStream('./content/bigText.txt', {
	highWaterMark: 90000
});

stream.on('data', (result) => {
	console.log(result)
});

stream.on('error', (result) => {
	console.log(result)
})