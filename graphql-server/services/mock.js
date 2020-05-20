const LOCATIONS_MOCK_LIST = Array.from({length: 4}, () => {
    return {
        id: Math.random(),
        latitude: Math.random(),
        longitude: Math.random(),
        altitude: Math.random()
    }
})

module.exports = { LOCATIONS_MOCK_LIST };