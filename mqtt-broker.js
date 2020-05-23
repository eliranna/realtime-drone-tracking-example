const mosca = require("mosca");

const server = new mosca.Server({
  port: 1883,
});

server.on("ready", function () {
  console.log("Broker is ready");
});
