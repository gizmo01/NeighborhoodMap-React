import React from 'react'

const SideBar = (props) => {

        return (
              <nav>
                <h1>Rio de Janeiro</h1>
                <div className='filter-section'>
                  <input
                    type='text'
                    placeholder='Search location...'
                    aria-label = "Enter location"
                    onChange={(event) => props.searchQuery(event.target.value)}
                  />
                </div>
                <div className='list'>
                  <ul className='list-links'>
                    {props.showingLocationName.map(location =>
                      <li
                        key={location.title}
                        tabIndex='0'
                      >
                        <a onClick={() => props.onToggleOpen(location.title, location)} >{location.name}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
        )
}

export default SideBar
