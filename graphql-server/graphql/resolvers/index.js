const locations = require("./locations.resolver");
const locationChanged = require("./location-changed.resolver");

const resolvers = {
  Query: {
    locations,
  },
  Subscription: {
    locationChanged,
  },
};

module.exports = resolvers;
