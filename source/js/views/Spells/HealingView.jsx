import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { routeCodes } from '../../views/App';


const CustomizedLabel = React.createClass({
  render () {
    const { x, y, stroke, value } = this.props;
    return <text x={ x } y={ y } dy={ -4 } fill={ stroke } fontSize={ 10 } textAnchor='middle'>{value}</text>
  }
});

const healingView = ({
  spellName,
  healingTable,
  children,
}) => (
  <div>
    <div>
      <div className='row columns'>
        <nav aria-label='You are here:' role='navigation'>
          <ul className='breadcrumbs'>
            <li>
              <NavLink
                exact
                to={ routeCodes.DASHBOARD }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={ routeCodes.SPELL }
              >
                Spells
              </NavLink>
            </li>
            <li><span className='show-for-sr'>Current:</span> {spellName}</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <div className='medium-8 large-7 columns'>
          <ResponsiveContainer aspect={ 2 } >
            <ComposedChart data={ healingTable } margin={ { top: 10, right: 0, left: 0, bottom: 0 } } >
              <Bar type='monotone' dataKey='base' stackId='1' stroke='#8884d8' fill='#8884d8' isAnimationActive={ false } />
              <Bar type='monotone' dataKey='bonus' stackId='1' stroke='#82ca9d' fill='#82ca9d' isAnimationActive={ false } />
              <Bar type='monotone' dataKey='crit' stackId='1' stroke='#ffc658' fill='#ffc658' isAnimationActive={ false } />
              <Line dataKey='total' stroke='black' isAnimationActive={ false } label={ <CustomizedLabel /> } />
              <Line dataKey='hps' stroke='green' isAnimationActive={ false } />
              <Line dataKey='efficiency' yAxisId='1' stroke='blue' isAnimationActive={ false } />
              <XAxis dataKey='rankDescription' />
              <YAxis />
              <YAxis yAxisId='1' orientation='right' />
              <Legend />
              <Tooltip isAnimationActive={ false } />
              <CartesianGrid strokeDasharray='3 3' />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className='medium-4 large-5 columns'>
          {children}
        </div>
      </div>
      <div className='column row'>
        <hr />
        <table className='medium-12 large-12'>
          <thead>
            <tr>
              <th> Rank </th>
              <th width='19%' className='text-right'> Base Heal</th>
              <th width='19%' className='text-right'> Bonus Heal </th>
              <th width='19%' className='text-right'> Crit Bonus </th>
              <th width='19%' className='text-right'> HPS </th>
              <th width='19%' className='text-right'> Efficiency </th>
            </tr>
          </thead>
          <tbody>
            {healingTable.map(spell => (
              <tr key={ spell.rank }>
                <td>{spell.rank}</td>
                <td className='text-right'>{spell.base}</td>
                <td className='text-right'>{spell.bonus}</td>
                <td className='text-right'>{spell.crit}</td>
                <td className='text-right'>{spell.hps}</td>
                <td className='text-right'>{spell.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <dl>
          <dt>Base Heal</dt>
          <dd>This is the average base heal of the spell without any bonuses from
            spellpower (10% from talents are included).</dd>
          <dt>Bonus Heal</dt>
          <dd>The additional healing provided by bonus healing gear. (Note that
            bonus healing is not affected by talents)</dd>
          <dt>Crit Bonus</dt>
          <dd>This is the average bonus provided by crit. ((base + bonus) * 150%)</dd>
          <dt>HPS</dt>
          <dd>Max healing per second.</dd>
          <dt>Efficiency</dt>
          <dd>The amount of healing provided by 1 point of mana.</dd>
        </dl>
      </div>
    </div>
  </div>
);

healingView.propTypes = {
  healingTable: PropTypes.arrayOf(PropTypes.any),
};

export default healingView;
