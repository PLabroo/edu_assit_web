var express = require("express");
var app = express();
var session = require('express-session');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = __dirname;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/Landing" + "/landing.html");
});

router.get("/engg.html",function(req,res){
  res.sendFile(path + "/Engineering" + "/engg.html");
});

router.get("/engg/mba.html",function(req,res){
  res.sendFile(path + "/Mba" + "/mba.html");
});

router.get("/engg/mtech-ms.html",function(req,res){
  res.sendFile(path + "/MTechMS" + "/mtech-ms.html");
});

router.get("/engg/upsc.html",function(req,res){
  res.sendFile(path + "/Upsc" + "/civil-services.html");
});

router.get("/team.html",function(req,res){
  res.sendFile(path + "/Team" + "/team.html");
});

router.get("/engg/mtech-ms/resources-mtech-ms.html",function(req,res){
  res.sendFile(path + "/Resources" + "/resource-mtech-ms.html");
});

router.get("/engg/mtech-ms/resources-mtech-ms.html", function (req, res) {
  res.sendFile(path + "/Resources" + "/resource-mtech-ms.html");
});

router.get("/signup.html", function (req, res) {
  res.sendFile(path + "/signup" + "/signup.html");
});

router.get("/login.html", function (req, res) {
  res.sendFile(path + "/login" + "/login.html");
});

router.get("/resell.html", function (req, res) {
	res.sendFile(path + "/Book" + "/resel.html");
});

app.use(express.static(path + '/Landing'))
app.use(express.static(path + '/Engineering'))
app.use('/engg',express.static(path + '/Mba'))
app.use('/engg',express.static(path + '/MtechMS'))
app.use('/engg',express.static(path + '/Upsc'))
app.use(express.static(path + '/Team'))
app.use('/engg/mtech-ms',express.static(path + '/Resources'))
app.use(express.static(path + '/signup'))
app.use(express.static(path + '/login'))
app.use(express.static(path + '/Book'))

// var arry = ["Saab", "Volvo", "BMW"];
// app.get('/sample-api', (req, res) => {
// 	res.json({ text: arry });
// })

//sql database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'nodelogin',
	
});

app.post('/sale',function(request,response){
	var title = request.body.title;
	var price = request.body.price;
	var contact = request.body.contact;
	var desc = request.body.desc;
	var date = request.body.date;
	console.log(title,price,contact,desc,date);

	response.json({status: 'Your book is now up for sale. Interested parties will contact you'});
});


app.post('/auth', function(request, response) {
	var email = request.body.email;
  console.log(email);
	var password = request.body.password;
	if (email && password) {
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});





app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
