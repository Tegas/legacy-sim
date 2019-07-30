import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './attackTable.css';

const COLORS = ['OrangeRed', 'purple', 'MediumBlue', 'teal', 'olive', 'black', 'gray'];

const AttackTableView = ({
  attackTables
}) => (
    <div>
      <div>
        <div className='row columns'>
          <nav aria-label='You are here:'>
            <ul className='breadcrumbs'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><span className='show-for-sr'>Current:</span> Attack Table</li>
            </ul>
          </nav>
        </div>
        <div className='row'>
          <h3>Attack Table</h3>
        </div>
        <div className='row'>
          <div className='large-6 columns end'>
            <div className='row'>
              <div className='small-6 medium-4 columns'>
                <label htmlFor='attackerLevel'>Player Level
                <Field name='attackerLevel' component='input' type='number' min='1' max='60' />
                </label>
              </div>
              <div className='small-6 medium-4 columns end'>
                <label htmlFor='targetLevel'>Target Mob Level
                <Field name='targetLevel' component='input' type='number' min='1' max='63' />
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='small-4 columns'>
                <label htmlFor='hit'>Hit %
                <Field name='hit' component='input' type='number' min='0' max='999' />
                </label>
              </div>
              <div className='small-4 columns'>
                <label htmlFor='crit'>Crit %
                <Field name='crit' component='input' type='number' min='0' max='999' />
                </label>
              </div>
              <div className='small-4 columns end'>
                <label htmlFor='skill'>Skill
                <Field name='skill' component='input' type='number' min='0' max='999' />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='columns'>
            <div className='row'>
              <div className='column large-12'>
                <table className="combat-table">
                  <tbody>
                    <tr>
                      <th>
                      </th>
                      <th>
                        <PieChart width={100} height={100}>
                          <Pie nameKey="name" dataKey="value" isAnimationActive={false} data={attackTables.auto.pieChart} outerRadius={50}>
                              { attackTables.auto.pieChart.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>) }
                          </Pie>
                        </PieChart>
                      </th>
                      <th>
                        <PieChart width={100} height={100}>
                          <Pie nameKey="name" dataKey="value" isAnimationActive={false} data={attackTables.special.pieChart} outerRadius={50}>
                              { attackTables.special.pieChart.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>) }
                          </Pie>
                        </PieChart>
                      </th>
                      <th>
                        <PieChart width={100} height={100}>
                          <Pie nameKey="name" dataKey="value" isAnimationActive={false} data={attackTables.dual.pieChart} outerRadius={50}>
                              { attackTables.dual.pieChart.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>) }
                          </Pie>
                        </PieChart>
                      </th>
                    </tr>
                    <tr className="">
                      <th></th>
                      <td>Auto Attack</td>
                      <td>Special Attack</td>
                      <td>Dual Wield</td>
                    </tr>
                    <tr className="combat-table_miss">
                      <th>Miss</th>
                      <td>{attackTables.auto.missChance}% {attackTables.auto.overHitCap > 0 && (
                        <span className="combat-table_note">({attackTables.auto.overHitCap}% over hit cap)</span>
                      )}</td>
                      <td>{attackTables.special.missChance}% {attackTables.special.overHitCap > 0 && (
                        <span className="combat-table_note">({attackTables.special.overHitCap}% over hit cap)</span>
                      )}</td>
                      <td>{attackTables.dual.missChance}% {attackTables.dual.overHitCap > 0 && (
                        <span className="combat-table_note">({attackTables.dual.overHitCap}% over hit cap)</span>
                      )}</td>
                    </tr>
                    <tr className="combat-table_dodge">
                      <th>Dodge</th>
                      <td>{attackTables.auto.dodgeChance}%</td>
                      <td>{attackTables.special.dodgeChance}%</td>
                      <td>{attackTables.dual.dodgeChance}%</td>
                    </tr>
                    <tr className="combat-table_parry">
                      <th>
                      <Field name='hasParry' id='hasParry' component='input' type='checkbox' /> Parry*
                      </th>
                      <td>{attackTables.auto.parryChance}%</td>
                      <td>{attackTables.special.parryChance}%</td>
                      <td>{attackTables.dual.parryChance}%</td>
                    </tr>
                    <tr className="combat-table_block">
                      <th>
                      <Field name='hasBlock' id='hasBlock' component='input' type='checkbox' /> Block
                      </th>
                      <td>{attackTables.auto.blockChance}%</td>
                      <td>{attackTables.special.blockChance}%</td>
                      <td>{attackTables.dual.blockChance}%</td>
                    </tr>
                    <tr className="combat-table_glancing">
                      <th>Glancing</th>
                      <td>{attackTables.auto.glancingChance}% {attackTables.auto.glancingChance > 0 && (
                        <span className="combat-table_note">({attackTables.auto.glancingPenalty}% penalty)</span>
                      )}</td>
                      <td>{attackTables.special.glancingChance}% {attackTables.special.glancingChance > 0 && (
                        <span className="combat-table_note">({attackTables.special.glancingPenalty}% penalty)</span>
                      )}</td>
                      <td>{attackTables.dual.glancingChance}% {attackTables.dual.glancingChance > 0 && (
                        <span className="combat-table_note">({attackTables.dual.glancingPenalty}% penalty)</span>
                      )}</td>
                    </tr>
                    <tr className="combat-table_crit">
                      <th>Crit</th>
                      <td>{attackTables.auto.critChance}% {attackTables.auto.overCritCap > 0 && (
                        <span className="combat-table_note">({attackTables.auto.overCritCap}% over)</span>
                      )}</td>
                      <td>{attackTables.special.critChance}% {attackTables.special.overCri > 0 && (
                        <span className="combat-table_note">({attackTables.special.overCritCap}% over)</span>
                      )}</td>
                      <td>{attackTables.dual.critChance}% {attackTables.dual.overCritCap > 0 && (
                        <span className="combat-table_note">({attackTables.dual.overCritCap}% over)</span>
                      )}</td>
                    </tr>
                    <tr className="combat-table_hit">
                      <th>Hit</th>
                      <td>{attackTables.auto.hitChance}%</td>
                      <td>{attackTables.special.hitChance}%</td>
                      <td>{attackTables.dual.hitChance}%</td>
                    </tr>
                    <tr>
                      <th>Overall</th>
                      <th>{attackTables.auto.overall}% damage</th>
                      <th>{attackTables.special.overall}% damage</th>
                      <th>{attackTables.dual.overall}% damage</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
    <hr />
    <p>* Parry formula is still being determined.</p>
    <p>sources</p>
    <ul>
      <li>
        <a href="https://github.com/magey/classic-warrior/wiki/Attack-table">https://github.com/magey/classic-warrior/wiki/Attack-table</a>
      </li>
      <li>
        <a href="https://vanilla-wow.fandom.com/wiki/Dual_wield">https://vanilla-wow.fandom.com/wiki/Dual_wield</a>
      </li>
    </ul>
      </div>
    </div>
  );

AttackTableView.propTypes = {
  armorTable: PropTypes.arrayOf(PropTypes.any),
  armor: PropTypes.any,
};

export default AttackTableView;
