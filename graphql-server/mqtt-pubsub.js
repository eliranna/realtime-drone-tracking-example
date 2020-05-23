const { MQTTPubSub } = require("graphql-mqtt-subscriptions");
const { connect } = require("mqtt");

const client = connect("mqtt://127.94.0.2", {
  reconnectPeriod: 1000,
});

const pubsub = new MQTTPubSub({
  client,
});

module.exports = pubsub;
