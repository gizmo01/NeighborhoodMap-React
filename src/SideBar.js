import React from 'react'

class SideBar extends React.Component {

    render (){

        return (
            <aside tabIndex='0'>
              <nav>
                <h2>Rio de Janeiro</h2>
                <div className='filter-section'>
                  <input
                    type='text'
                    placeholder='Search point of interest'
                    aria-label = "Enter location"
                    onChange={(event) => this.props.searchQuery(event.target.value)}
                  />

                </div>

                <div className='list'>

                  <ul className='list-links'>

                    {this.props.showingVenueName.map(location =>

                      <li

                        key={location.title}

                      tabIndex='0'><a onClick={() => this.props.onToggleOpen(location.title, location)} >{location.name}</a></li>

                    )}

                  </ul>

                </div>

              </nav>

            </aside>

        )

    }

}



export default SideBar
