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
