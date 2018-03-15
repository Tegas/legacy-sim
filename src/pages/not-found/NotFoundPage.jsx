import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className='column row'>
        <h1>Not Found</h1>
        <NavLink
          exact
          to='/'
        >
          Home
        </NavLink>
      </div>
    );
  }
}
