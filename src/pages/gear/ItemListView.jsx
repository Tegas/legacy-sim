import React from 'react';
import PropTypes from 'prop-types';

const ItemListView = ({
    items,
    columns,
}) => (
        <table className='medium-12 large-12'>
            <thead>
                <tr>
                    <th> Score </th>
                    <th> Item </th>
                    {(columns.strength) && <th className='text-right'> Str</th>}
                    {(columns.agility) && <th className='text-right'> Agi</th>}
                    {(columns.intellect) && <th className='text-right'> Int</th>}
                    {(columns.spirit) && <th className='text-right'> Spi</th>}
                    {(columns.stamina) && <th className='text-right'> Sta</th>}
                    {(columns.attackPower || columns.rangedAttackPower) && <th className='text-right'> Pow</th>}
                    {(columns.meleeHit) && <th className='text-right'> Hit</th>}
                    {(columns.spellHit) && <th className='text-right'> Spell Hit</th>}
                    {(columns.meleeCrit) && <th className='text-right'> Crit</th>}
                    {(columns.spellCrit) && <th className='text-right'> Spell Crit</th>}
                    {(columns.spellDamage) && <th className='text-right'> Spell Dmg</th>}
                    {(columns.healing) && <th className='text-right'> Heal</th>}
                    {(columns.mp5) && <th className='text-right'> Mp5</th>}
                    {(columns.armor) && <th className='text-right'> Arm</th>}
                    {(columns.defense) && <th className='text-right'> Def</th>}
                    {(columns.dodge) && <th className='text-right'> Dodge</th>}
                    <th className='text-right'> Patch</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={`${item.entry}${item.patch}${item.name}`}>
                        <td className='text-right'>{item.score}</td>
                        <td><a href={`https://classicdb.ch/?item=${item.entry}`}>{item.name}</a></td>
                        {(columns.strength) && <td className='text-right'>{item.strength}</td>}
                        {(columns.agility) && <td className='text-right'>{item.agility}</td>}
                        {(columns.intellect) && <td className='text-right'>{item.intellect}</td>}
                        {(columns.spirit) && <td className='text-right'>{item.spirit}</td>}
                        {(columns.stamina) && <td className='text-right'>{item.stamina}</td>}
                        {(columns.attackPower || columns.rangedAttackPower) && <td className='text-right'>{item.attackPower}{item.rangedAttackPower}</td>}
                        {(columns.meleeHit) && <td className='text-right'>{item.meleeHit}</td>}
                        {(columns.spellHit) && <td className='text-right'>{item.spellHit}</td>}
                        {(columns.meleeCrit) && <td className='text-right'>{item.meleeCrit}</td>}
                        {(columns.spellCrit) && <td className='text-right'>{item.spellCrit}</td>}
                        {(columns.spellDamage) && <td className='text-right'>{item.spellDamage}</td>}
                        {(columns.healing) && <td className='text-right'>{item.healing}</td>}
                        {(columns.mp5) && <td className='text-right'>{item.mp5}</td>}
                        {(columns.armor) && <td className='text-right'>{item.armor}</td>}
                        {(columns.defense) && <td className='text-right'>{item.defense}</td>}
                        {(columns.dodge) && <td className='text-right'>{item.dodge}</td>}
                        <td className='text-right'>{+item.patch + 2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

ItemListView.propTypes = {
    items: PropTypes.array,
};

export default ItemListView;
