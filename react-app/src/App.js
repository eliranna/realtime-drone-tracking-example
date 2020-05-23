import React from "react";
import apollo from "./apolloSetup";
import { ApolloProvider } from "@apollo/react-hooks";
import DroneTracker from "./components/DroneTracker";

const App = () => (
  <ApolloProvider client={apollo}>
    <React.Fragment>
      <DroneTracker />
    </React.Fragment>
  </ApolloProvider>
);

export default App;
