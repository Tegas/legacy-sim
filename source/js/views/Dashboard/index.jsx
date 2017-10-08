import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='column row'>
          <h1>Legayc Sim</h1>
          <p>
            <NavLink
              exact
              to={ routeCodes.SPELL }
            >
              Spells
            </NavLink>
          </p>
          <p>
            <NavLink
              exact
              to={ routeCodes.RESISTANCES }
            >
              Resistances
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}
