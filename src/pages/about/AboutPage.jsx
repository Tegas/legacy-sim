import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='row columns'>
          <nav aria-label='You are here:'>
            <ul className='breadcrumbs'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><span className='show-for-sr'>Current:</span> About</li>
            </ul>
          </nav>
        </div>
        <div className='row'>
          <h3>About Legacy Sim</h3>
        </div>
        <div className='row columns'>
          <p>
            Legacy Sim is a theorycrafting combat simulation tool for vanilla WoW.
          </p>
          <p>
            <a href='https://github.com/Tegas/legacy-sim'>Github</a>
          </p>
        </div>
      </div>
    );
  }
}
