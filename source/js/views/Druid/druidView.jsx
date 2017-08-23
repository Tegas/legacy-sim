import React from 'react';
import { Field } from 'redux-form';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const CustomizedLabel = React.createClass({
  render () {
    const {x, y, stroke, value} = this.props;
    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
  }
});



const DruidView = ({
  healingTouchTable,
}) => (
  <div className='Druid'>
    <h1>Healing Touch</h1>
    <ResponsiveContainer aspect={ 2 } >
      <ComposedChart data={ healingTouchTable }>
        <Bar type='monotone' dataKey='Base' stackId='1' stroke='#8884d8' fill='#8884d8' isAnimationActive={ false } />
        <Bar type='monotone' dataKey='Healing' stackId='1' stroke='#82ca9d' fill='#82ca9d' isAnimationActive={ false } />
        <Bar type='monotone' dataKey='Crit' stackId='1' stroke='#ffc658' fill='#ffc658' isAnimationActive={ false } />
        <Line dataKey='Total' stroke='black' isAnimationActive={ false } label={ <CustomizedLabel /> } />
        <Line dataKey='ManaEfficiency' yAxisId='1' stroke='blue' isAnimationActive={ false } />
        <Line dataKey='HPS' stroke='green' isAnimationActive={ false } />
        <XAxis dataKey='rankDescription' />
        <YAxis />
        <YAxis yAxisId='1' orientation='right' />
        <Legend />
        <Tooltip isAnimationActive={ false } />
        <CartesianGrid strokeDasharray='3 3' />
      </ComposedChart>
    </ResponsiveContainer>

    <form className='pure-form pure-form-aligned'>
      <fieldset>
        <div className='pure-control-group'>
          <label htmlFor='healing'>Bonus Healing</label>
          <Field
            name='healing'
            component='input'
            type='number'
            className='pure-input-1-4'
            min='0'
            max='999'
          />
        </div>
        <div className='pure-control-group'>
          <label htmlFor='crit'>Crit %</label>
          <Field
            name='crit'
            component='input'
            type='number'
            className='pure-input-1-4'
            min='0'
            max='100'
          />
        </div>
      </fieldset>
    </form>
    <table className='pure-table-striped'>
      <tbody>
        <tr>
          <th> Rank </th>
          <th> Base </th>
          <th> Bonus Heal </th>
          <th> Crit Bonus </th>
          <th> HPS </th>
          <th> Efficiency</th>
        </tr>
        {healingTouchTable.map(spell => (
          <tr key={ spell.rank } className='rightAlign'>
            <td>{spell.rank}</td>
            <td>{spell.Base}</td>
            <td>{spell.Healing}</td>
            <td>{spell.Crit}</td>
            <td>{spell.HPS}</td>
            <td>{spell.ManaEfficiency.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <dl>
      <dt>Base</dt>
      <dd>This is the average base heal of the spell without any bonuses from spellpower (10% from talents are included).</dd>
      <dt>Bonus Heal</dt>
      <dd>The additional healing provided by bonus healing gear. (Note that bonus healing is not affected by talents)</dd>
      <dt>Crit Bonus</dt>
      <dd>This is the average bonus provided by crit. ((base + bonus) * 150%)</dd>
      <dt>HPS</dt>
      <dd>Max healing per second.</dd>
      <dt>Efficiency</dt>
      <dd>The amount of healing provided by 1 point of mana.</dd>
    </dl>
  </div>
);

export default DruidView;
