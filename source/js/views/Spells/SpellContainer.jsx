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
          <div>
            <h2>Druid</h2>
            <p><NavLink exact to={ routeCodes.HEALING_TOUCH } >Healing Touch</NavLink></p>
            <p><NavLink exact to={ routeCodes.REJUVENATION } >Rejuvenation</NavLink></p>
            <p><NavLink exact to={ routeCodes.REGROWTH } >Regrowth</NavLink></p>
          </div>
          <div>
            <h2>Paladin</h2>
            <p><NavLink exact to={ routeCodes.FLASH_OF_LIGHT } >Flash Of Light</NavLink></p>
          </div>
          <div>
            <h2>Priest</h2>
            <p><NavLink exact to={ routeCodes.HEAL }>Heal</NavLink></p>
            <p><NavLink exact to={ routeCodes.GREATER_HEAL }>Greater Heal</NavLink></p>
            <p><NavLink exact to={ routeCodes.FLASH_HEAL }>Flash Heal</NavLink></p>
            <p><NavLink exact to={ routeCodes.RENEW }>Renew</NavLink></p>
            <p><NavLink exact to={ routeCodes.HOLY_NOVA }>Holy Nova</NavLink></p>
            <p><NavLink exact to={ routeCodes.PRAYER_OF_HEALING }>Prayer Of Healing</NavLink></p>
          </div>
        </div>
      </div>
    );
  }
}
