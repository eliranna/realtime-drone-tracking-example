const locations = async (_source, { droneId }, { dataSources }) => {
    const loc = dataSources.locationsAPI.getHistory(droneId);
    console.log(loc)
    return loc;
}

module.exports = locations;