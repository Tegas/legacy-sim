import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class SpellContainer extends Component {
  render() {
    return (
      <div>
        <div className='row columns'>
          <nav aria-label='You are here:' role='navigation'>
            <ul className='breadcrumbs'>
              <li>
                <NavLink
                  exact
                  to={ routeCodes.DASHBOARD }
                >
                  Home
                </NavLink>
              </li>
              <li><span className='show-for-sr'>Current:</span> spells</li>
            </ul>
          </nav>
        </div>
        <div className='column row'>
          <h1>Spells</h1>
          <h2>Druid</h2>
          <NavLink
            exact
            to={ routeCodes.HEALING_TOUCH }
          >
            Healing Touch
          </NavLink>
        </div>
      </div>
    );
  }
}
