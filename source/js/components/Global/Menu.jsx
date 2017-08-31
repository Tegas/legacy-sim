import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Menu extends Component {
  render() {
    return (
      <div className='top-bar'>
        <div className='row'>
          <div className='top-bar-left'>
            <ul className='dropdown menu' data-dropdown-menu=''>
              <li className='menu-text'>Legacy Sim</li>
              <li>
                <NavLink
                  activeClassName='Menu-link--active'
                  className='Menu-link'
                  exact
                  to={ routeCodes.DASHBOARD }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='Menu-link--active'
                  className='Menu-link'
                  to={ routeCodes.ABOUT }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
