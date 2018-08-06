import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
const { compose } = require("recompose");


const Map = compose(
  withScriptjs,
  withGoogleMap
)(props =>

  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: -22.941648,lng: -43.209736}}
  >

    
  </GoogleMap>
);

export default Map
