const os = require('os');

// Log free and total memory
console.log(os.freemem());
console.log(os.totalmem());

// Log user information
console.log(os.userInfo());

// Log total system uptime
console.log(`The system has been up for ${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release()
}

console.log(currentOS);