import React, { Component } from 'react';
import Map from './Map'
import SideBar from './SideBar'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as locations from './locations.json';

class App extends Component {
  state = {
    locations: locations,
    searchedLocations: '',
    locationToShow: '',
    isOpen: false,
    error: false,
    infoContent: ""
  }

  /* Fetch from Wikipedia API */
  getInfo = (marker) => {
    let url = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&format=json&limit=1&search=${marker.title}`;
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then( (data) => {
      this.setState({
          infoContent: data[2][0]//selecting a small descriptive paragraph from WikiAPI Response Array
      });
    })
    .catch(err => {
      alert("an error occurred while fetching")
      this.setState({ error: true });
    })
  }

  searchQuery = (query) => {
    this.setState({ searchedLocations: query })
  }

  onToggleOpen = (title, marker) => {
    this.setState({
      locationToShow: title,
      isOpen: true
    })
    this.getInfo(marker);
  }

  render() {

    let showingVenueName;
    if(this.state.searchedLocations){
      const match = new RegExp(escapeRegExp(this.state.searchedLocations), 'i')
      showingVenueName = this.state.locations.filter(locations => match.test(locations.name))
    } else {
      showingVenueName = this.state.locations
    }
    showingVenueName.sort(sortBy('name'))

    return (
      <div className="App">
        <aside tabIndex='0'>

          <SideBar
            showingVenueName={showingVenueName}
            searchQuery={this.searchQuery}
            onToggleOpen={this.onToggleOpen}
          />

        </aside>
        <main>
          <section tabIndex='0'>

            <Map
              showingVenueName={showingVenueName}
              infoContent={this.state.infoContent}
              locationToShow={this.state.locationToShow}
              onToggleOpen={this.onToggleOpen}
              getInfo={this.getInfo}
              isOpen={this.state.isOpen}
              containerElement={<div className='containerElement'/>}
              mapElement={<div className='mapElement' />}
              loadingElement={<div className='loadingElement' />}
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyB6KuC_x__0u1uAEBxlPIb1LL-r7U8nFwQ&v=3'//rimettere la mia piu tardi
            />

          </section>
        </main>
      </div>
    );
  }
}

export default App;
