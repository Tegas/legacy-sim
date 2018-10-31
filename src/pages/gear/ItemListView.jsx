import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

const ItemListView = ({
    items,
}) => (
        <table className='medium-12 large-12'>
            <thead>
                <tr>
                    <th> Score </th>
                    <th> Item </th>
                    <th width='20%' className='text-right'> Str</th>
                    <th className='text-right'> Agi</th>
                    <th className='text-right'> Int</th>
                    <th className='text-right'> Spi</th>
                    <th className='text-right'> Sta</th>
                    {/* <th className='text-right'> Damage </th> */}
                    {/* <th className='text-right'> Speed </th> */}
                    <th className='text-right'> Power </th>
                    <th className='text-right'> Hit </th>
                    <th className='text-right'> Crit </th>
                    <th className='text-right'> Healing </th>
                    <th className='text-right'> Mp5 </th>
                    <th className='text-right'> Armor </th>
                    <th className='text-right'> Slot </th>
                    <th className='text-right'> Patch </th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={`${item.entry}${item.patch}`}>
                        <td className='text-right'>{item.score}</td>
                        <td><a href={`https://classicdb.ch/?item=${item.entry}`}>{item.name}</a></td>
                        <td className='text-right'>{item.strength}</td>
                        <td className='text-right'>{item.agility}</td>
                        <td className='text-right'>{item.intellect}</td>
                        <td className='text-right'>{item.spirit}</td>
                        <td className='text-right'>{item.stamina}</td>
                        {/* <td className='text-right'>{item.dmg_min1}-{item.dmg_max1} {item.dmg_type1}</td> */}
                        {/* <td className='text-right'>{item.speed}</td> */}
                        <td className='text-right'>{item.attackPower}{item.rangedAttackPower}{item.spellDamage}</td>
                        <td className='text-right'>{item.meleeHit}{item.spellHit}</td>
                        <td className='text-right'>{item.meleeCrit}{item.spellCrit}</td>
                        <td className='text-right'>{item.healing}</td>
                        <td className='text-right'>{item.mp5}</td>
                        <td className='text-right'>{item.armor}</td>
                        <td className='text-right'>{item.slot}</td>
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
