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

const armorView = ({
  armorTable,
  armor,
}) => (
  <div>
    <div>
      <div className='row columns'>
        <nav aria-label='You are here:'>
          <ul className='breadcrumbs'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><span className='show-for-sr'>Current:</span> Armor</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <h3>Armor</h3>
      </div>
      <div className='row'>
        <div className='medium-8 large-7 columns'>
          <ResponsiveContainer aspect={ 2 } >
            <ComposedChart data={ armorTable } margin={ { top: 10, right: 0, left: 0, bottom: 0 } } >
              <Line dataKey='effectiveHealth' stroke='green' isAnimationActive={ false } dot={ false } />
              <Line dataKey='reduction %' yAxisId='1' stroke='blue' isAnimationActive={ false } dot={ false } />
              <XAxis dataKey='armor' />
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
              <label htmlFor='armor'>Armor
                <Field name='armor' component='input' type='number' min='0' max='99999' />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='large-6 columns'>
              <label htmlFor='attackerLevel'>Attacker Level
                <Field name='attackerLevel' component='input' type='number' min='1' max='63' />
              </label>
            </div>
            <div className='large-6 columns'>
              <label htmlFor='targetLevel'>Target Level
                <Field name='targetLevel' component='input' type='number' min='1' max='63' />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='column large-12'>
              <table>
                <tbody>
                  <tr>
                    <th>Damage Reduction</th>
                    <td>{armor.damageReduction}%</td>
                  </tr>
                  <tr>
                    <th>Effective Health</th>
                    <td>{armor.effectiveHealth}</td>
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

armorView.propTypes = {
  armorTable: PropTypes.arrayOf(PropTypes.any),
  armor: PropTypes.any,
};

export default armorView;
