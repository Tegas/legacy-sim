import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
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


// const CustomizedLabel = React.createClass({
//   render () {
//     const { x, y, stroke, value } = this.props;
//     return <text x={ x } y={ y } dy={ -4 } fill={ stroke } fontSize={ 10 } textAnchor='middle'>{value}</text>
//   }
// });

const casterView = ({
  damageTable,
  children,
  spell,
  talents = [],
}) => (
  <div>
    <div>
      <div className='row columns'>
        <nav aria-label='You are here:' role='navigation'>
          <ul className='breadcrumbs'>
            <li>
              <NavLink
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/spells"
              >
                Spells
              </NavLink>
            </li>
            <li><span className='show-for-sr'>Current:</span> {spell.name}</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <h3>{spell.name}</h3>
        <p>{spell.description}</p>
      </div>
      <div className='row'>
        <div className='medium-8 large-7 columns'>
          <ResponsiveContainer aspect={ 2 } >
            <ComposedChart data={ damageTable } margin={ { top: 10, right: 0, left: 0, bottom: 0 } } >
              {spell.direct && <Bar type='monotone' dataKey='base' stackId='1' stroke='#8884d8' fill='#8884d8' isAnimationActive={ false } />}
              {spell.direct && <Bar type='monotone' dataKey='bonus' stackId='1' stroke='#82ca9d' fill='#82ca9d' isAnimationActive={ false } />}
              {spell.direct && <Bar type='monotone' dataKey='crit' stackId='1' stroke='#ffc658' fill='#ffc658' isAnimationActive={ false } />}
              {spell.dot && <Bar type='monotone' dataKey='dot' stackId='1' stroke='#ccaaee' fill='#ccaaee' isAnimationActive={ false } />}
              {spell.dot && <Bar type='monotone' dataKey='bonusHot' stackId='1' stroke='#ccddff' fill='#ccddff' isAnimationActive={ false } />}
              {/* <Line dataKey='total' stroke='black' isAnimationActive={ false } label={ <CustomizedLabel /> } /> */}
              <Line dataKey='dps' stroke='green' isAnimationActive={ false } />
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
          {talents.map(talent => (
            <div className='row' key={ talent.name }>
              <div className='large-12 columns'>
                <Field name={ talent.field } id={ talent.field } component='input' type='checkbox' />
                <label htmlFor={ talent.field }>
                  <span data-tooltip aria-haspopup='true' className='has-tip tip-bottom' title={ talent.description }>
                    { talent.name }
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='column row'>
        <hr />
        <table className='medium-12 large-12'>
          <thead>
            <tr>
              <th> Rank </th>
              <th width='12%' className='text-right'> Mana</th>
              <th width='12%' className='text-right'> Cast Time</th>
              <th width='12%' className='text-right'> Base Damage</th>
              <th width='12%' className='text-right'> Bonus Damage </th>
              <th width='12%' className='text-right'> Crit Bonus </th>
              <th width='12%' className='text-right'> Total </th>
              <th width='12%' className='text-right'> DPS </th>
              <th width='12%' className='text-right'> Efficiency </th>
            </tr>
          </thead>
          <tbody>
            {damageTable.map(rank => (
              <tr key={ rank.rank }>
                <td>{rank.rank}</td>
                <td className='text-right'>{rank.mana}</td>
                <td className='text-right'>{rank.castTime}</td>
                <td className='text-right'>
                  {spell.direct &&
                    <span>{rank.base}</span>
                  }
                  {spell.dot &&
                    <span>
                      {spell.direct && <span>+</span>}
                      <span>{ rank.dot }</span>
                    </span>
                  }
                </td>
                <td className='text-right'>
                  {spell.direct &&
                    <span>{rank.bonus}</span>
                  }
                  {spell.dot &&
                    <span>
                      {spell.direct && <span>+</span>}
                      <span>{ rank.bonusHot }</span>
                    </span>
                  }
                </td>
                <td className='text-right'>{rank.crit}</td>
                <td className='text-right'>{rank.total}</td>
                <td className='text-right'>{rank.dps}</td>
                <td className='text-right'>{rank.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <dl>
          <dt>Base Damage</dt>
          <dd>This is the average base damage of the spell including talents but without
            any bonuses from spellpower .</dd>
          <dt>Bonus Damage</dt>
          <dd>The additional damage provided by bonus spell power gear. (Note that
            bonus spell power is affected by talents)</dd>
          <dt>Crit Bonus</dt>
          <dd>This is the average damage bonus provided by crit. </dd>
          <dt>HPS</dt>
          <dd>Max damage per second.</dd>
          <dt>Efficiency</dt>
          <dd>The amount of damage provided by 1 point of mana.</dd>
        </dl>
      </div>
    </div>
  </div>
);

casterView.propTypes = {
  damageTable: PropTypes.arrayOf(PropTypes.any),
};

export default casterView;
