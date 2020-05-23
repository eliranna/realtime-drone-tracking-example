import React, { Component } from "react";
import styled from "styled-components";

const Location = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #eee;
  margin: 20px;
`;

export default class LiveMap extends Component {
  componentDidMount() {
    this.props.subscribeToNewLocations();
  }

  _renderLocations(locations) {
    return locations.map(({ id, latitude, longitude, altitude }) => (
      <Location key={id}>
        <span>Location ID: {id}</span>
        <span>Latitude: {latitude}</span>
        <span>Longitude: {longitude}</span>
        <span>Altitude: {altitude}</span>
      </Location>
    ));
  }

  render() {
    return this.props.data
      ? this._renderLocations(this.props.data.locations)
      : null;
  }
}
