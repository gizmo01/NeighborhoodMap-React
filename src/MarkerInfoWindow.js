import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

require("recompose");


const iconDefault = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
const iconOpen = 'http://maps.google.com/mapfiles/ms/icons/green.png';


class MarkerInfoWindow extends React.Component {

    render(){
        return (
            <div>
              <Marker
                icon={this.props.placeToShow === this.props.marker.title && this.props.isOpen ? { url: iconOpen } : { url: iconDefault }}
                key={this.props.marker.title}
                position={{lat: this.props.marker.position.lat, lng: this.props.marker.position.lng}}
                onClick={() => this.props.onToggleOpen(this.props.marker.title, this.props.marker)}
              >

              </Marker>



            </div>

        )

    }

}

export default MarkerInfoWindow
