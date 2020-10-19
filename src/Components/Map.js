import React, { Component } from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps';

function Map() {
  return (
    <div>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -23.209333, lng: -45.875077 }}
    />

    <Marker
          position={{
            lat: -23.209333,
            lng: -45.875077
          }}
    />

    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

class ShowMap extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "400px" }}>
        <MapWrapped
          googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key'}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default ShowMap;
