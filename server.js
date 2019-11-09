var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/landing.html");
});

router.get("/engg.html",function(req,res){
  res.sendFile(path + "/engg.html");
});

app.use(express.static(path))

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
