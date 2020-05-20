const mqtt = require('mqtt');

const publisher = mqtt.connect('mqtt://127.94.0.2');

const drones = [
    'drone1',
    'drone2',
    'drone3',
    'drone4'
]

const DRONE_MOVED = 'DRONE_MOVED';

publisher.on('connect', function () {
    let id = 0;
    setInterval(function() {
        const droneId = drones[Math.floor(Math.random() * Math.floor(50)) % 4]
        publisher.publish(DRONE_MOVED, JSON.stringify({
            locationChanged: {
                droneId, 
                location: { 
                    id: `${Math.random()}`,
                    latitude: Math.random(),
                    longitude: Math.random(),
                    altitude: Math.random()
                }
            }
          }));
        id++;
        console.log('Message Sent');
    }, 500);
});
