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

const DruidView = ({
  healingTouchTable,
}) => (
  <div className='Druid'>
    <h1>Druid</h1>
    <ResponsiveContainer aspect={ 2 } >
      <ComposedChart data={ healingTouchTable }>
      { /*
        <Area type='monotone' dataKey='Base' stackId='1' stroke='#8884d8' fill='#8884d8' isAnimationActive={ false } />
        <Area type='monotone' dataKey='Healing' stackId='1' stroke='#82ca9d' fill='#82ca9d' isAnimationActive={ false } />
        <Area type='monotone' dataKey='Crit' stackId='1' stroke='#ffc658' fill='#ffc658' isAnimationActive={ false } />
        */}
        <Bar type='monotone' dataKey='Base' stackId='1' stroke='#8884d8' fill='#8884d8' isAnimationActive={ false } />
        <Bar type='monotone' dataKey='Healing' stackId='1' stroke='#82ca9d' fill='#82ca9d' isAnimationActive={ false } />
        <Bar type='monotone' dataKey='Crit' stackId='1' stroke='#ffc658' fill='#ffc658' isAnimationActive={ false } />
        <Line dataKey='ManaEfficiency' legendType='circle' yAxisId='1' dot={ { stroke: 'blue', strokeWidth: 2 } } isAnimationActive={ false } />
        <XAxis dataKey='rankDescription' />
        <YAxis />
        <YAxis yAxisId='1' orientation='right' />
        <Legend iconType='square' />
        <Tooltip isAnimationActive={ false } />
        <CartesianGrid strokeDasharray='3 3' />
      </ComposedChart>
    </ResponsiveContainer>

    <form className='pure-form pure-form-aligned'>
      <fieldset>
        <div className='pure-control-group'>
          <label htmlFor='spirit'>Spirit</label>
          <Field
            name='spirit'
            component='input'
            type='number'
            className='pure-input-1-4'
            min='0'
            max='999'
          />
        </div>
        <div className='pure-control-group'>
          <label htmlFor='intellect'>Intellect</label>
          <Field
            name='intellect'
            component='input'
            type='number'
            className='pure-input-1-4'
            min='0'
            max='999'
          />
        </div>
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
    <table>
      <tbody>
        <tr>
          <td>Rank</td>
          <td>Average Heal</td>
        </tr>
        {healingTouchTable.map(spell => (
          <tr key={ spell.rank }>
            <td>{spell.rank}</td>
            <td>{ /* spell.Average.toFixed(2) */}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DruidView;
