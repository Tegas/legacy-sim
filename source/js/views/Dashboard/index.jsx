import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <h1>Legacy Sim</h1>
        <h2>Classes</h2>
        <ul>
          <li>
            <NavLink
              activeClassName='Menu-link--active'
              className='Menu-link'
              exact
              to={ routeCodes.DRUID }
            >
              DRUID
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
