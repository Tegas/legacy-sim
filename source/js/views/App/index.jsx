import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style.css';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';
import Footer from 'components/Global/Footer';
import SpellContainer from 'views/Spells/SpellContainer';
import HealingTouch from 'views/Spells/HealingTouch';
import Rejuvenation from 'views/Spells/Rejuvenation';
import Regrowth from 'views/Spells/Regrowth';
import GreaterHeal from 'views/Spells/GreaterHeal';
import FlashHeal from 'views/Spells/FlashHeal';
import Renew from 'views/Spells/Renew';
import FlashOfLight from 'views/Spells/FlashOfLight';
import HolyNova from 'views/Spells/HolyNova';
import Heal from 'views/Spells/Heal';
import PrayerOfHealing from 'views/Spells/PrayerOfHealing';
import LesserHealingWave from 'views/Spells/LesserHealingWave';
import HealingWave from 'views/Spells/HealingWave';
import ChainHeal from 'views/Spells/ChainHeal';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  SPELL: `${ publicPath }spell`,
  HEALING_TOUCH: `${ publicPath }healingTouch`,
  REJUVENATION: `${ publicPath }rejuvenation`,
  REGROWTH: `${ publicPath }regrowth`,
  GREATER_HEAL: `${ publicPath }greaterHeal`,
  FLASH_HEAL: `${ publicPath }flashHeal`,
  RENEW: `${ publicPath }renew`,
  FLASH_OF_LIGHT: `${ publicPath }flashOfLight`,
  HEAL: `${ publicPath }heal`,
  HOLY_NOVA: `${ publicPath }holyNova`,
  PRAYER_OF_HEALING: `${ publicPath }prayerOfHealing`,
  LESSER_HEALING_WAVE: `${ publicPath }lesserHealingWave`,
  HEALING_WAVE: `${ publicPath }healingWave`,
  CHAIN_HEAL: `${ publicPath }chainHeal`,
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
              <Route path={ routeCodes.REGROWTH } component={ Regrowth } />
              <Route path={ routeCodes.GREATER_HEAL } component={ GreaterHeal } />
              <Route path={ routeCodes.FLASH_HEAL } component={ FlashHeal } />
              <Route path={ routeCodes.RENEW } component={ Renew } />
              <Route path={ routeCodes.FLASH_OF_LIGHT } component={ FlashOfLight } />
              <Route path={ routeCodes.HEAL } component={ Heal } />
              <Route path={ routeCodes.HOLY_NOVA } component={ HolyNova } />
              <Route path={ routeCodes.PRAYER_OF_HEALING } component={ PrayerOfHealing } />
              <Route path={ routeCodes.LESSER_HEALING_WAVE } component={ LesserHealingWave } />
              <Route path={ routeCodes.HEALING_WAVE } component={ HealingWave } />
              <Route path={ routeCodes.CHAIN_HEAL } component={ ChainHeal } />
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
