const { RESTDataSource } = require("apollo-datasource-rest");
const { LOCATIONS_MOCK_LIST } = require("./mock");

class LocationsAPI extends RESTDataSource {
  constructor() {
    super();
  }

  async getHistory(droneId) {
    return LOCATIONS_MOCK_LIST;
  }
}

module.exports = LocationsAPI;
