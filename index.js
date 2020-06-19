var mosca = require('mosca');
##


var settings = {
  port: 1883,
  http: {
    port:3000, 
  }
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('biri baglandi', client.id);
});

server.on('clientDisconnected', function(client) {
  console.log('biri cikti', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('push be', packet.payload.toString());
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca kalkti kosuyor');
}