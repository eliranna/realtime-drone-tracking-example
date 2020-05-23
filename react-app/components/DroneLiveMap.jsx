import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { LOCATIONS_QUERY, LOCATIONS_SUBSCRIPTION } from "../queries/locations";
import LiveMap from "./LiveMap";

const updateQuery = (prev, { subscriptionData }) => {
  if (!subscriptionData.data) return prev;
  const location = subscriptionData.data.locationChanged;
  return Object.assign({}, prev, {
    locations: [location, ...prev.locations],
  });
};

function DroneLiveMap({ droneId }) {
  const { subscribeToMore, ...result } = useQuery(LOCATIONS_QUERY, {
    variables: { droneId },
  });
  return (
    <LiveMap
      {...result}
      subscribeToNewLocations={() =>
        subscribeToMore({
          document: LOCATIONS_SUBSCRIPTION,
          variables: { droneId },
          updateQuery,
        })
      }
    />
  );
}

export default DroneLiveMap;
