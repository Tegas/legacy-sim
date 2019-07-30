import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='row columns'>
          <h3>Legacy Sim</h3>
        </div>
        <div className='row columns'>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/spell">Spells</NavLink></li>
            <li><NavLink to="/armor">Armor</NavLink></li>
            <li><NavLink to="/resistances">Resistances</NavLink></li>
            <li><NavLink to="/regen">Mana Regeneration</NavLink></li>
            <li><NavLink to="/gear">Gear</NavLink></li>
            <li><NavLink to="/weapon">Weapons</NavLink></li>
            <li><NavLink to="/attack">Attack Table</NavLink></li>
            <li><NavLink to="/defense">Defense Table</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
