import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Menu extends Component {
  render() {
    return (
      <div className='row column'>
        <hr />
        <ul className='menu'>
          <li>Legacy Sim</li>
          <li>
            <NavLink
              exact
              to={ routeCodes.DASHBOARD }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={ routeCodes.ABOUT }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
