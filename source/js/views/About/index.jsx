import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='column row'>
          <h1>About Legacy Sim</h1>
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
