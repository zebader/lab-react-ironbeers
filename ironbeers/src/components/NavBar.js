import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
     <nav className="beer-menu">

        <ul>
          <NavLink to={{ pathname: `/` }}>
            <li >
              Home
            </li>
          </NavLink>
          <NavLink to={{ pathname: `/beers` }}>
            <li >
              Beer list
            </li>
          </NavLink>
          <NavLink to={{ pathname: `/randombeer` }}>
            <li >
              Random beer
            </li>
          </NavLink>
        </ul>

     </nav>
    )
  }

export default NavBar
