import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

const regenerationView = ({
  regen,
}) => (
  <div>
    <div>
      <div className='row columns'>
        <nav aria-label='You are here:'>
          <ul className='breadcrumbs'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><span className='show-for-sr'>Current:</span> Regeneration</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <h3>Regeneration</h3>
      </div>
      <div className='row'>
        <div className='large-4 medium-6 columns'>
          <label htmlFor='class'>Class
            <Field name='class' component='select'>
              <option value=""></option>
              <option value="druid">Druid</option>
              <option value="hunter">Hunter</option>
              <option value="mage">Mage</option>
              <option value="paladin">Paladin</option>
              <option value="priest">Priest</option>
              <option value="rogue">Rogue</option>
              <option value="shaman">Shaman</option>
              <option value="warlock">Warlock</option>
              <option value="warrior">Warrior</option>
            </Field>
          </label>
          <label htmlFor='spirit'>Spirit
            <Field name='spirit' component='input' type='number' min='1' max='999' />
          </label>
          <label htmlFor='combatManaRegen'>Combat Mana Regen %
            <Field name='combatManaRegen' component='input' type='number' min='0' max='100' />
          </label>
        </div>
        <div className='large-4 medium-6 end columns'>
          <table>
            <tbody>
             <tr>
                <th>Mana Regen (MP5)</th>
                <td>{regen.outOfCombat}</td>
              </tr>
              <tr>
                <th>In Combat</th>
                <td>{regen.inCombat}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

regenerationView.propTypes = {
  regenTable: PropTypes.arrayOf(PropTypes.any),
  regen: PropTypes.any,
};

export default regenerationView;
