var express = require("express")
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express();

app.use(express.static("public"))

app.get("/", function(req,res){
    res.send("hello")
})

app.post('/filesize', upload.any(), function (req, res, next) {
    var size = req.files[0]['size']
  res.send("{'size':  "+ size+"}")
})

app.listen(8080, function(){
    console.log("app listening at 8080")
})