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
	var searchitem = req.query.search;

	console.log(searchitem)
	var url = "https://api.themoviedb.org/3/search/movie?api_key=7dbbf8ae82b409623b57d18c80319667&language=en-US&query=" + searchitem

	request(url, function(error, response, body){
		if(response.statusCode == 200 && !error){
			var data = JSON.parse(body)
			res.render('results', {data:data})
		}
		else{
			console.log("error occured, code:" + error)
			console.log("statusCode" + response.statusCode)
		}
	})
	
})

app.listen(port, hostname, function(){
	console.log("Server has started")
})
