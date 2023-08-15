const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, res) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = res;
	readFile('./content/second.txt', 'utf-8', (err, res) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = res;
		writeFile('./content/resultAsync.txt',
			`Here is the result: ${first + second}`,
			(err, res) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(res);
		})
	})
});