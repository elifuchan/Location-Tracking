var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://3.15.28.103:1883');

client.subscribe('location');

client.on('connect', function() {
	console.log('connected!');
	});


client.on('message', function(topic, message) {
	console.log(topic, ' : ', message.toString());
});
