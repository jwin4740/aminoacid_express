// require express module
var express = require('express');

// new instance of express
var app = express();


var port = 3000;
//Routes

//home

app.get('/', function (request, response) {
	response.send("hello world");
});

// allows user to type in a number in the url (which is optional because question mark)
	// the user input is stored in the episodeNumber variable
app.get('/starwars_episode/:episode_number?', function (request, response) {
	var episodeNumber = request.params.episode_number;
	response.send("This is the page for episode " + episodeNumber);
});

// NOT FOUND (don't need an 'if statement' because requests execute functions sequentially)
app.get('*', function (request, response) {
	response.send("<h1> 404 Page not found </h1");
});

app.listen(port, function () {
	console.log("Server is listening on http://localhost:%s", port);
});