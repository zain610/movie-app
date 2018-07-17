var express = require('express');
var app = express();
var request = require('request')
var http = require('http')

var hostname = '127.0.0.1';
var port = 3000;

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('search')
})
app.get('/results', function(req,res){
	var searchitem = req.query.moviesearch;

	console.log(searchitem)
	var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + searchitem

	request(url, function(error, response, body){
		if(response.statusCode == 200 && !error){
			var data = JSON.parse(body)
			res.render('results', {data:data})
		}
	})
	
})

app.listen(port, hostname, function(){
	console.log("Server has started")
})
