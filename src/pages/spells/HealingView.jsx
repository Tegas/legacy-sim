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

const healingView = ({
  healingTable,
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
                to="/spell"
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
            <ComposedChart data={ healingTable } margin={ { top: 10, right: 0, left: 0, bottom: 0 } } >
              {spell.direct && <Bar type='monotone' dataKey='base' stackId='1' stroke='#8884d8' fill='#8884d8' isAnimationActive={ false } />}
              {spell.direct && <Bar type='monotone' dataKey='bonus' stackId='1' stroke='#82ca9d' fill='#82ca9d' isAnimationActive={ false } />}
              {spell.direct && <Bar type='monotone' dataKey='crit' stackId='1' stroke='#ffc658' fill='#ffc658' isAnimationActive={ false } />}
              {spell.hot && <Bar type='monotone' dataKey='hot' stackId='1' stroke='#ccaaee' fill='#ccaaee' isAnimationActive={ false } />}
              {spell.hot && <Bar type='monotone' dataKey='bonusHot' stackId='1' stroke='#ccddff' fill='#ccddff' isAnimationActive={ false } />}
              {/* <Line dataKey='total' stroke='black' isAnimationActive={ false } label={ <CustomizedLabel /> } /> */}
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
              <th width='8%' className='text-right'> Mana</th>
              <th width='8%' className='text-right'> Cast Time</th>
              <th width='14%' className='text-right'> Base Heal</th>
              <th width='14%' className='text-right'> Bonus Heal </th>
              <th width='14%' className='text-right'> Crit Bonus </th>
              <th width='14%' className='text-right'> Total </th>
              {spell.hot &&
                <th width='8%' className='text-right'> Tick </th>
              }
              <th width='12%' className='text-right'> HPS </th>
              <th width='12%' className='text-right'> Efficiency </th>
            </tr>
          </thead>
          <tbody>
            {healingTable.map(rank => (
              <tr key={ rank.rank }>
                <td>{rank.rank}</td>
                <td className='text-right'>{rank.mana}</td>
                <td className='text-right'>{rank.castTime}</td>
                <td className='text-right'>
                  {spell.direct &&
                    <span>{rank.base}</span>
                  }
                  {spell.hot &&
                    <span>
                      {spell.direct && <span>+</span>}
                      <span>{ rank.hot }</span>
                    </span>
                  }
                </td>
                <td className='text-right'>
                  {spell.direct &&
                    <span>{rank.bonus}</span>
                  }
                  {spell.hot &&
                    <span>
                      {spell.direct && <span>+</span>}
                      <span>{ rank.bonusHot }</span>
                    </span>
                  }
                </td>
                <td className='text-right'>{rank.crit}</td>
                <td className='text-right'>{rank.total}</td>
                {spell.hot &&
                  <td className='text-right'>{rank.hotTick}</td>
                }
                <td className='text-right'>{rank.hps}</td>
                <td className='text-right'>{rank.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <dl>
          <dt>Base Heal</dt>
          <dd>This is the average base heal of the spell including talents but without
            any bonuses from spellpower .</dd>
          <dt>Bonus Heal</dt>
          <dd>The additional healing provided by bonus healing gear. (Note that
            bonus healing is not affected by talents)</dd>
          <dt>Crit Bonus</dt>
          <dd>This is the average bonus provided by crit. </dd>
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
