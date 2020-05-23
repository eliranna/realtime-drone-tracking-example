const { withFilter } = require("apollo-server");
const pubsub = require("../../mqtt-pubsub");

const DRONE_MOVED = "DRONE_MOVED";

const locationChanged = {
  subscribe: withFilter(
    () => pubsub.asyncIterator(DRONE_MOVED),
    (payload, variables) => {
      return payload.locationChanged.droneId === variables.droneId;
    }
  ),
  resolve: (data) => {
    return data.locationChanged.location;
  },
};

module.exports = locationChanged;
