// require express module
var express = require('express');

// new instance of express
var app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var port = 3000;
//Routes

//home

app.get('/', function (request, response) {
	response.render("home", {
		tagline : "Let's build a protein"
	});
});

// allows user to type in a number in the url (which is optional because question mark)
	// the user input is stored in the episodeNumber variable
app.get('/amino_acids/:amino_acid?', function (request, response) {
	var aminoAcid = request.params.amino_acid;
	response.send("This is the page for amino acid info " + aminoAcid);
});

// NOT FOUND (don't need an 'if statement' because requests execute functions sequentially)
app.get('*', function (request, response) {
	response.send("<h1> 404 Page not found </h1");
});

app.listen(port, function () {
	console.log("Server is listening on http://localhost:%s", port);
});