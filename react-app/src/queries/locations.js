import { gql } from '@apollo/client';

const LOCATION_FIELDS = `
    id
    latitude,
    longitude,
    altitude    
`

export const LOCATIONS_QUERY = gql`
  query Locations($droneId: String!) {
      locations(droneId: $droneId) {
        ${LOCATION_FIELDS}
      }
  }
`;

export const LOCATIONS_SUBSCRIPTION = gql`
  subscription OnLocationChanged($droneId: String!) {
    locationChanged(droneId: $droneId) {
       ${LOCATION_FIELDS}
    }
  }
`;