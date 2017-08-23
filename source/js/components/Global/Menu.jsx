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
              <li className='menu-text'>Yeti Store</li>
              <li className='has-submenu'>
                <a href='#'>One</a>
                <ul className='submenu menu vertical' data-submenu=''>
                  <li>
                    <a href='#'>One</a>
                  </li>
                  <li>
                    <a href='#'>Two</a>
                  </li>
                  <li>
                    <a href='#'>Three</a>
                  </li>
                </ul>
              </li>
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
          <div className='top-bar-right'>
            <ul className='menu'>
              <li><input placeholder='Search' type='search' /></li>
              <li><button className='button' type='button'>Search</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
