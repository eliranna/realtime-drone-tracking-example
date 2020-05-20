const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Subscription {
    locationChanged(droneId: String!): Location
  }

  type Query {
    locations(droneId: String!): [Location]
  }

  type Location {
    id: String!,
    latitude: String,
    longitude: String,
    altitude: String
  }
`;

module.exports = typeDefs;