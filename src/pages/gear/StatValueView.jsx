import React from 'react';
import { Field } from 'redux-form';

const StatValueView = () => (
        <div className='row columns'>
            <div className='row'>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Class</h4>
                    <label htmlFor='class'>Class
						<Field name='class' component='select'>
                            <option value="">Any</option>
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
                </div>
                <div className='large-3 medium-4 small-6 columns'>
                    <h4>Patch</h4>
                    <label htmlFor='patch'>Patch
						<Field name='patch' component='select'>
                            <option value="10">1.12</option>
                            <option value="9">1.11 Naxxramas</option>
                            <option value="8">1.10 Tier 0.5</option>
                            <option value="7">1.09 AQ</option>
                            <option value="6">1.08 Dragons</option>
                            <option value="5">1.07 Zul'Gurub</option>
                            <option value="4">1.06 Blackwing Lair</option>
                            <option value="3">1.05 Alterac Valley</option>
                            <option value="2">1.04 Item Updates</option>
                            <option value="1">1.03 Dire Maul</option>
                            <option value="0">1.02 Molten Core</option>
                        </Field>
                    </label>
                </div>
                <div className='large-3 medium-4 small-6 columns'>

                </div>
                <div className='large-4 columns' />
            </div>
            <div className='row'>
                <div className='large-2 medium-3 small-3 columns'>
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
                <div className='large-2 medium-3 small-3 columns'>
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
                <div className='large-2 medium-3 small-3 columns'>
                    <h4>Physical</h4>
                    <label htmlFor='meleeHit'>Hit %
						<Field name='meleeHit' component='input' type='number' />
                    </label>
                    <label htmlFor='meleeCrit'>Crit %
						<Field name='meleeCrit' component='input' type='number' />
                    </label>
                    <label htmlFor='attackPower'>Attack
						<Field name='attackPower' component='input' type='number' />
                    </label>
                </div>
                <div className='large-2 medium-3 small-3 columns'>
                    <h4>Tank</h4>
                    <label htmlFor='dodge'>Dodge %
						<Field name='dodge' component='input' type='number' />
                    </label>
                    <label htmlFor='defense'>Defense %
						<Field name='defense' component='input' type='number' />
                    </label>
                    <label htmlFor='armor'>Armor
						<Field name='armor' component='input' type='number' />
                    </label>
                </div>
                <div className='large-4 columns' />
            </div>
        </div>
    );

StatValueView.propTypes = {
};

export default StatValueView;
