import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
} from 'recharts';

const CombatTableView = ({
  combatTable,
}) => (
  <div>
    <div>
      <div className='row columns'>
        <nav aria-label='You are here:'>
          <ul className='breadcrumbs'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><span className='show-for-sr'>Current:</span> Combat Table</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <h3>Combat Table</h3>
        <h2>Work In progress...</h2>
      </div>
      <div className='row'>
        
        <div className='medium-4 large-5 columns'>
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
            <div className='large-12 columns'>
              <label htmlFor='hit'>Hit %
                <Field name='hit' component='input' type='number' min='0' max='999' />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='large-12 columns'>
              <label htmlFor='crit'>Crit %
                <Field name='crit' component='input' type='number' min='0' max='999' />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='large-12 columns'>
              <label htmlFor='skill'>Weapon Skill
                <Field name='skill' component='input' type='number' min='0' max='999' />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='large-12 columns'>
                <Field name='behind' id='behind' component='input' type='checkbox' />
                <label htmlFor='behind'>
                  <span data-tooltip aria-haspopup='true' className='has-tip tip-bottom' title='Attacking from behind ignores parry.'>
                    Attack from behind
                  </span>
                </label>
              </div>
            </div>
        </div>
        <div className='medium-8 large-7 columns'>
            <PieChart width={240} height={240}>
              <Pie label nameKey="name" dataKey="value" isAnimationActive={false} data={combatTable.pieChart} outerRadius={80} fill="#8884d8" label />
              <Tooltip isAnimationActive={ false } />
            </PieChart>
          <div className='row'>
            <div className='column large-12'>
              <table>
                <tbody>
                  <tr>
                    <th>Hit</th>
                    <td>{combatTable.hitChance}%</td>
                  </tr>
                  <tr>
                    <th>Crit</th>
                    <td>{combatTable.critChance}%</td>
                  </tr>
                  <tr>
                    <th>Miss</th>
                    <td>{combatTable.missChance}%</td>
                  </tr>
                  <tr>
                    <th>Dodge</th>
                    <td>{combatTable.dodgeChance}%</td>
                  </tr>
                  <tr>
                    <th>Parry</th>
                    <td>{combatTable.parryChance}%</td>
                  </tr>
                  <tr>
                    <th>Glancing</th>
                    <td>{combatTable.glancingChance}% ({combatTable.glancingPenalty}% penalty)</td>
                  </tr>
                  <tr>
                    <th>Overall</th>
                    <th>{combatTable.overall}% damage</th>
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

CombatTableView.propTypes = {
  armorTable: PropTypes.arrayOf(PropTypes.any),
  armor: PropTypes.any,
};

export default CombatTableView;
