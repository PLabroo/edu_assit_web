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

router.get("/mba.html",function(req,res){
  res.sendFile(path + "/mba" + "/mba.html");
});

router.get("/mtech.html",function(req,res){
  res.sendFile(path + "/MTech" + "/mtech.html");
});

router.get("/upsc.html",function(req,res){
  res.sendFile(path + "/UPSC" + "/civil-services.html");
});

router.get("/team.html",function(req,res){
  res.sendFile(path + "/team" + "/team.html");
});

router.get("/resources-mtech.html",function(req,res){
  res.sendFile(path + "/Resources" + "/resource-mtech.html");
});

app.use(express.static(path + '/Landing'))
app.use(express.static(path + '/Engineering'))
app.use(express.static(path + '/mba'))
app.use(express.static(path + '/Mtech'))
app.use(express.static(path + '/UPSC'))
app.use(express.static(path + '/team'))
app.use(express.static(path + '/Resources'))


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
