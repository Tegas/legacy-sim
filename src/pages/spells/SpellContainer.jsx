import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                  to="/"
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
          <div>
            <h2>Druid</h2>
            <p><NavLink exact to="/healing-touch" >Healing Touch</NavLink></p>
            <p><NavLink exact to="/rejuvenation" >Rejuvenation</NavLink></p>
            <p><NavLink exact to="/regrowth" >Regrowth</NavLink></p>
          </div>
          <div>
            <h2>Paladin</h2>
            <p><NavLink exact to="flash-of-light" >Flash Of Light</NavLink></p>
            <p><NavLink exact to="holy-light" >Holy Light</NavLink></p>
          </div>
          <div>
            <h2>Priest</h2>
            <p><NavLink exact to="/heal">Heal</NavLink></p>
            <p><NavLink exact to="/greater-heal">Greater Heal</NavLink></p>
            <p><NavLink exact to="/flash-heal">Flash Heal</NavLink></p>
            <p><NavLink exact to="/renew">Renew</NavLink></p>
            <p><NavLink exact to="/holy-nova">Holy Nova</NavLink></p>
            <p><NavLink exact to="/prayer-of-healing">Prayer Of Healing</NavLink></p>
          </div>
          <div>
            <h2>Shaman</h2>
            <p><NavLink exact to="/lesser-healing-wave">Lesser Healing Wave</NavLink></p>
            <p><NavLink exact to="/healing-wave">Healing Wave</NavLink></p>
            <p><NavLink exact to="/chain-heal">Chain Heal</NavLink></p>
          </div>
          <div>
            <h2>Warlock</h2>
            <p><NavLink exact to="/shadow-bolt">Shadow Bolt</NavLink></p>
          </div>
        </div>
      </div>
    );
  }
}
