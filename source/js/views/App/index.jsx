import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';
import DruidContainer from 'views/Druid';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  DRUID: `${ publicPath }druid`,
  ABOUT: `${ publicPath }about`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route path={ routeCodes.DRUID } component={ DruidContainer } />
              <Route path={ routeCodes.ABOUT } component={ About } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
