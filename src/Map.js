import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MarkerInfoWindow from './MarkerInfoWindow'
const { compose } = require("recompose");


const Map = compose(
  withScriptjs,
  withGoogleMap
)(props =>

  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: -22.941648,lng: -43.209736}}
  >
    {props.showingVenueName.map(marker =>
      <MarkerInfoWindow
        key={marker.title}
        marker={marker}
        withStateHandlers= {props.withStateHandlers}
        getInfo={() => {props.getInfo(marker)}}
        infoContent={props.infoContent}
        onToggleOpen={() => {props.onToggleOpen(marker.title, marker)}}
        locationToShow={props.locationToShow}
        isOpen = {props.isOpen}
      />
    )}

  </GoogleMap>
);

export default Map
