import React, { Component } from 'react';
import Map from './Map'
import SideBar from './SideBar'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
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
    let showingVenueName;

    if(this.state.searchedVenues){
        const match = new RegExp(escapeRegExp(this.state.searchedVenues), 'i')
        showingVenueName = this.state.venue.filter(venue => match.test(venue.name))
    } else {
        showingVenueName = this.state.venue
    }

    showingVenueName.sort(sortBy('name'))

    return (
      <div className="App">


        <SideBar
          showingVenueName={showingVenueName}
          searchedVenues={this.state.searchedVenues}

        />

        <main className='main-page'>
          <div className='right-section'>
            <section tabIndex='0'>

              <Map
                showingVenueName={showingVenueName}
                infoContent={this.state.infoContent}
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
