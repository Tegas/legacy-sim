import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';
import Footer from 'components/Global/Footer';
import SpellContainer from 'views/Spells/SpellContainer';
import HealingTouch from 'views/Spells/HealingTouch';
import Rejuvenation from 'views/Spells/Rejuvenation';
import GreaterHeal from 'views/Spells/GreaterHeal';
import FlashHeal from 'views/Spells/FlashHeal';
import Renew from 'views/Spells/Renew';
import FlashOfLight from 'views/Spells/FlashOfLight';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  SPELL: `${ publicPath }spell`,
  HEALING_TOUCH: `${ publicPath }healingTouch`,
  REJUVENATION: `${ publicPath }rejuvenation`,
  GREATER_HEAL: `${ publicPath }greaterHeal`,
  FLASH_HEAL: `${ publicPath }flashHeal`,
  RENEW: `${ publicPath }renew`,
  FLASH_OF_LIGHT: `${ publicPath }flashOfLight`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <HashRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route path={ routeCodes.SPELL } component={ SpellContainer } />
              <Route path={ routeCodes.HEALING_TOUCH } component={ HealingTouch } />
              <Route path={ routeCodes.REJUVENATION } component={ Rejuvenation } />
              <Route path={ routeCodes.GREATER_HEAL } component={ GreaterHeal } />
              <Route path={ routeCodes.FLASH_HEAL } component={ FlashHeal } />
              <Route path={ routeCodes.RENEW } component={ Renew } />
              <Route path={ routeCodes.FLASH_OF_LIGHT } component={ FlashOfLight } />
              <Route path={ routeCodes.ABOUT } component={ About } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
