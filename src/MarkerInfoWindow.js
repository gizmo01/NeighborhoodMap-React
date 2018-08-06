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
                icon={this.props.locationToShow === this.props.marker.title && this.props.isOpen ? { url: iconOpen } : { url: iconDefault }}
                key={this.props.marker.title}
                position={{lat: this.props.marker.position.lat, lng: this.props.marker.position.lng}}
                onClick={() => this.props.onToggleOpen(this.props.marker.title, this.props.marker)}
              >
                {this.props.locationToShow === this.props.marker.title && this.props.isOpen &&
                  <InfoWindow onCloseClick={this.props.onToggleOpen}>
                    <div>
                      <p className='source'>Read more on: <a target="_blank" href={`https://en.wikipedia.org/wiki/${this.props.marker.title}`}>Wikipedia.org</a></p>
                      <h1>{this.props.marker.name}</h1>
                      <p>{this.props.infoContent}</p>
                    </div>
                  </InfoWindow>}
              </Marker>

            </div>
        )
    }
}

export default MarkerInfoWindow
