const LocationsAPI = require("../../services/locations.js");

const dataSources = () => {
  return {
    locationsAPI: new LocationsAPI(),
  };
};

module.exports = dataSources;
