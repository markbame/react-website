var cluster = require('cluster');
const https = require('https');
const fs = require('fs');
var privateKey  = fs.readFileSync('./express/certs/server.key', 'utf8');
var certificate = fs.readFileSync('./express/certs/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};


if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;
    console.log('CPU count: %d', cpuCount);
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
    cluster.on('exit', function (worker) {
        console.log('Worker %d daied :(', worker.id);
        cluster.fork();
    });
} else {
    var api_entry = require('./express/api');
    var httpsServer = https.createServer(credentials, api_entry.api);
    httpsServer.listen(3031, '0.0.0.0');
    console.log('Worker %d running!!', cluster.worker.id);
}
