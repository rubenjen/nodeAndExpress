const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end("Welcome to our home page");
	}
	if (req.url === '/about') {
		res.end("Here is a short history about our company");
	}
	res.end(`<h1>Oops!</h1>
		<p>You lost mate? This page doesn't exists.</p>
		<a href="/">Go back home mate.</a>
		`);
});

server.listen(5000);