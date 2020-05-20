# Drone-Tracker-Example

This is a sample code created for [this blog post].

[this blog post]: https://www.upnext.blog/chasing-drones-with-graphql

### Description
This sample outlines an e2e implementation of an Real-time Drone-tracking application using MQTT, GraphQL, Apollo Server, Apollo Client, Node.js and React. 

## How to run

#### Install the Broker app
```
npm i
```


#### Run the MQTT Broker
```
node mqtt-broker.js
```

#### Run the MQTT publisher
This is a mock for any MQTT publisher, including a real drone. 
```
node mqtt-publisher.js
```

#### Run the React app
This is a mock for any MQTT publisher, including a real drone. Drones can be connected to the same WIFI network and act as MQTT publishers. 
```
cd react-app
npm i
npm run start
```
