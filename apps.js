"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var apps = express();
apps.use(express.json());
var responseData = {
    message: 'Hello, world!',
    date: new Date()
};
apps.get('/data', function(request, response) {
    response.json(responseData.message); 
});
// Start the server
var PORT = 5500;
apps.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
