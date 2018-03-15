import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
// import { routeCodes } from '../../views/App';

const resistancesView = ({
  resistancesTable,
  resistances,
}) => (
  <div>
    <div>
      <div className='row columns'>
        <nav aria-label='You are here:'>
          <ul className='breadcrumbs'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><span className='show-for-sr'>Current:</span> Resistances</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <h3>Resistances</h3>
      </div>
      <div className='row'>
        <div className='medium-8 large-7 columns'>
          <ResponsiveContainer aspect={ 2 } >
            <ComposedChart data={ resistancesTable } margin={ { top: 10, right: 0, left: 0, bottom: 0 } } >
              <Line dataKey='effectiveHealth' stroke='green' isAnimationActive={ false } dot={ false } />
              <Line dataKey='reduction %' yAxisId='1' stroke='blue' isAnimationActive={ false } dot={ false } />
              <XAxis dataKey='resistance' />
              <YAxis />
              <YAxis yAxisId='1' orientation='right' />
              <Legend />
              <Tooltip isAnimationActive={ false } />
              <CartesianGrid strokeDasharray='3 3' />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className='medium-4 large-5 columns'>
          <div className='row'>
            <div className='large-6 columns'>
              <label htmlFor='health'>Health
                <Field name='health' component='input' type='number' min='0' max='25000' />
              </label>
            </div>
            <div className='large-6 columns'>
              <label htmlFor='resistance'>Resistance
                <Field name='resistance' component='input' type='number' min='0' max='315' />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='column large-12'>
              <table>
                <tbody>
                  <tr>
                    <th>Damage Reduction</th>
                    <td>{resistances.damageReduction}%</td>
                  </tr>
                  <tr>
                    <th>Effective Health</th>
                    <td>{resistances.effectiveHealth}</td>
                  </tr>
                  <tr>
                    <th>Value of Stamina</th>
                    <td>{resistances.valueOfTenHealth}</td>
                  </tr>
                  <tr>
                    <th>Value of Resistance</th>
                    <td>{resistances.valueofOneResist}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

resistancesView.propTypes = {
  resistancesTable: PropTypes.arrayOf(PropTypes.any),
  resistances: PropTypes.any,
};

export default resistancesView;
