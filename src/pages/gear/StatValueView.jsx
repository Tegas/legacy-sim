import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

const StatValueView = ({

}) => (
        <div className='row columns'>
            <div className='row'>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Attributes</h4>
                    <label htmlFor='Type'>Type
						<Field name='type' component='select'>
                            <option value="plate">Plate</option>
                            <option value="mail">Mail</option>
                            <option value="leather">Leather</option>
                            <option value="cloth">Cloth</option>
                        </Field>
                    </label>
                </div>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Patch</h4>
                    <label htmlFor='patch'>Patch
						<Field name='patch' component='select'>
                            <option value="10">1.12</option>
                            <option value="9">1.11</option>
                            <option value="8">1.10</option>
                            <option value="7">1.09</option>
                            <option value="6">1.08</option>
                            <option value="5">1.07</option>
                            <option value="2">1.04</option>
                            <option value="3">1.03</option>
                            <option value="2">1.02</option>
                        </Field>
                    </label>
                </div>
                <div className='large-4 columns' />
            </div>
            <div className='row'>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Attributes</h4>
                    <label htmlFor='strength'>Strength
						<Field name='strength' component='input' type='number' />
                    </label>
                    <label htmlFor='agility'>Agility
						<Field name='agility' component='input' type='number' />
                    </label>
                    <label htmlFor='intellect'>Intellect
						<Field name='intellect' component='input' type='number' />
                    </label>
                    <label htmlFor='spirit'>Spirit
						<Field name='spirit' component='input' type='number' />
                    </label>
                    <label htmlFor='stamina'>Stamina
						<Field name='stamina' component='input' type='number' />
                    </label>
                </div>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Melee</h4>
                    <label htmlFor='hit'>Hit %
						<Field name='hit' component='input' type='number' />
                    </label>
                    <label htmlFor='crit'>Crit %
						<Field name='crit' component='input' type='number' />
                    </label>
                    <label htmlFor='attack'>Attack
						<Field name='attack' component='input' type='number' />
                    </label>
                    <label htmlFor='armor'>Armor
						<Field name='armor' component='input' type='number' />
                    </label>
                </div>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Spell</h4>
                    <label htmlFor='spellHit'>Hit %
						<Field name='spellHit' component='input' type='number' />
                    </label>
                    <label htmlFor='spellCrit'>Crit %
						<Field name='spellCrit' component='input' type='number' />
                    </label>
                    <label htmlFor='healing'>Healing
						<Field name='healing' component='input' type='number' />
                    </label>
                    <label htmlFor='spellDamage'>Damage
						<Field name='spellDamage' component='input' type='number' />
                    </label>
                    <label htmlFor='mp5'>Mp5
						<Field name='mp5' component='input' type='number' />
                    </label>
                </div>
                <div className='large-4 columns' />
            </div>
        </div>
    );

StatValueView.propTypes = {
};

export default StatValueView;
