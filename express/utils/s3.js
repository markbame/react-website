var Jimp  = require('jimp')
var fs = require('fs')
var AWS = require('aws-sdk')

var s3 = new AWS.S3();
exports.upload = (req, res, next) => {
    Jimp.read(req.file.buffer, function (err, image) {
          var newname = Number(new Date())+"_"+req.file.originalname
           image.resize( 800, 533 )           // resize
           .quality(60)                       // set JPEG quality
           .write("./express/temp/"+newname, function(){
                fs.readFile("./express/temp/"+newname, function (err, data) {
                    s3.putObject({
                      Bucket: 'abenyu-uploads',
                      Key: newname,
                      Body: data,
                      ACL: 'public-read',
                      Metadata: {
                          'Content-Type': req.file.mimetype
                      }
                    },function (resp) {
                      fs.unlink("./express/temp/"+ newname, function(){
                        res.setHeader('Content-Type', 'application/json')
                        res.send({"status":"ok","newname":newname})
                      });
                    });
                })
            })
      });
}

exports.delete = (req, res, next) => {
  s3.deleteObject({
    Bucket: 'abenyu-uploads',
     Key: req.body.filename
   }, function(err, data) {
    if (err) {
      return console.log(err);
    }
    res.setHeader('Content-Type', 'application/json')
    res.send({"status":"ok","newname":newname})
  });
}
