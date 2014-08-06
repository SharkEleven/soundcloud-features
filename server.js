var http = require("http");
var url = require("url");
var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get( '/', function( request, response) {

	response.render( 'pages/index');

} );


function onRequest( request, response ) {

  	
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

  

  response.writeHead( 200, {"Content-Type": "text/plain"} );
  // response.write("test hello world");
  response.render(pathname);
  
  response.end(pathname);

}

http.createServer( app ).listen(8888);

console.log("Server has started.");