const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('response', (name, id) => {
	console.log(`Data received from ${name} with id ${id}`);
});

customEvent.on('response', () => {
	console.log(`Data is being processed`);
});

customEvent.emit('response', 'John', 34);

// Illustration 2

const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
	res.end('Welcone')
});

server.listen(5000, () => {
	console.log('Server listening in port 5000...')
})