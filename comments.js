// Create web server
// Create a request handler
// Create a response handler
// Create a server
// Start the server

// Load required modules
var http = require("http");
var url = require("url");

// Create a web server
http.createServer(function(req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
}).listen(8080);

console.log("Server running at http://
