var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname;

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
  res.sendFile(path + "/MTechMs" + "/mtech-ms.html");
});

router.get("/engg/upsc.html",function(req,res){
  res.sendFile(path + "/UPSC" + "/civil-services.html");
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

app.use(express.static(path + '/Landing'))
app.use(express.static(path + '/Engineering'))
app.use('/engg',express.static(path + '/Mba'))
app.use('/engg',express.static(path + '/MtechMs'))
app.use('/engg',express.static(path + '/UPSC'))
app.use(express.static(path + '/Team'))
app.use('/engg/mtech-ms',express.static(path + '/Resources'))
app.use(express.static(path + '/signup'))
app.use(express.static(path + '/login'))


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
