import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

require("recompose");


const MarkerInfoWindow = (props) => {
const iconDefault = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
const iconOpen = 'http://maps.google.com/mapfiles/ms/icons/green.png';

        return (
            <div>
              <Marker
                icon={props.placeToShow === props.marker.title && props.isOpen ? { url: iconOpen } : { url: iconDefault }}
                key={props.marker.title}
                position={{lat: props.marker.position.lat, lng: props.marker.position.lng}}
                onClick={() => props.onToggleOpen(props.marker.title, props.marker)}
              >
                {props.placeToShow === props.marker.title && props.isOpen &&
                  <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div className='info-window'>
                      <p className='source'>Read more on: <a target="_blank" href={`https://en.wikipedia.org/wiki/${props.marker.title}`}>Wikipedia.org</a></p>
                      <h2>{props.marker.name}</h2>
                      <p>{props.infoContent}</p>
                    </div>
                  </InfoWindow>}
              </Marker>

            </div>
        )
}

export default MarkerInfoWindow
