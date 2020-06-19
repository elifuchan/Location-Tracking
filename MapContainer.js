import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

import mqtt from 'mqtt';

export class MapContainer extends React.Component {
	state = {
		lat: -34.397, 
		lng: 150.644,
		altitude: 0,
		speed: 0, 
		course: 0
	}

	updateMap(message){
		var [lat, lng, altitude, speed, course] = message.toString().split(',');

		this.setState({
			lat,
			lng,
			altitude,
			speed, 
			course
		})
	}

	componentDidMount() {
		var client = mqtt.connect('ws://3.15.28.103:3000');

		client.subscribe('LOCATION');
		client.subscribe('TEMP');

		client.on('connect', function() {
			console.log('connected!');
		});

		client.on('message', (topic, message) => {
			console.log(topic, ' : ', message.toString());
			switch (topic) {
				case 'LOCATION':
					this.updateMap(message);
					break;
				default:
					break;
			}

			
		});


	}
	
	render(){
		const {lat,lng, altitude, speed, course } = this.state;
		return(
			<div style={{ width: '100%', height: '100%' }}>
				<Map
          google={this.props.google}
          initialCenter={{
						lat, 
						lng
					}}
					center={{
						lat,
						lng
					}}
          zoom={18}
        >
					<Marker
						icon= {{
							path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
							fillColor: 'blue',
							fillOpacity: 0.8,
							strokeWeight: 3,
							scale: 7,
							rotation: parseFloat(course),
						}}
						position={{ lat, lng }}
					/>
				</Map>

				<div id="info">
					<h2>{speed} km/h</h2>
					
					<h2><span id="TEMP"> </span>°C</h2>

					<h2>{altitude} msl</h2>
				</div>
			</div>
		)
	}
}

##api key para odenecek
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCJ7QPj_9a3CJbnF20tMK4JA_3pvRpjMfY")
})(MapContainer)