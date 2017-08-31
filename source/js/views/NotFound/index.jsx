import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class NotFound extends Component {
  render() {
    return (
      <div className='column row'>
        <h1>Not Found</h1>
        <NavLink
          exact
          to={ routeCodes.HOME }
        >
          Home
        </NavLink>
      </div>
    );
  }
}
