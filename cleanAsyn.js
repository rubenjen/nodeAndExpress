const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const readText = (path) => {
// 	return new Promise ((resolve, reject) => {
// 		readFile(path, 'utf-8', (err, data) => {
// 			if (err) {
// 				reject(err);
// 			}else{
// 				resolve(data);
// 			}

// 		});
// 	});
// }

// readText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

const start = async () => {
	try{
		const first = await readFile('./content/first.txt', 'utf-8');
		const second = await readFile('./content/second.txt', 'utf-8');
		console.log(first, second);
		await writeFile('./content/result-mind-grenade.txt', `HELLO, THIS IS MIND-BLOWING: ${first} ${second}`, { flag: 'a'});
	} catch(e){
		console.log(e);
	}
}

start();