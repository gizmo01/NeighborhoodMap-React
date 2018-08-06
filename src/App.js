import React, { Component } from 'react';
import Map from './Map'
import * as locations from './locations.json';

class App extends Component {
  state = {
    venue: locations,
    searchedVenues: '',
    placeToShow: '',
    isOpen: false,
    error: false,
    infoContent: ""
  }

  render() {
    return (
      <div className="App">

        <main className='main-page'>
          <div className='right-section'>
            <section tabIndex='0'>

              <Map
                containerElement={<div className='containerElement'/>}
                mapElement={<div className='mapElement' />}
                loadingElement={<div className='loadingElement' />}
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyB6KuC_x__0u1uAEBxlPIb1LL-r7U8nFwQ&v=3'//rimettere la mia piu tardi
              />

            </section>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
