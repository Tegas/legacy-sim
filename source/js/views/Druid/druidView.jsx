import React from 'react';
import { Field } from 'redux-form';
import {
  LineChart,
  Line,
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
    <LineChart width={ 600 } height={ 300 } data={ healingTouchTable }>
      <Line type='monotone' dataKey='averageHeal' stroke='#8884d8' />
      <Line type='monotone' dataKey='minHeal' stroke='#8884d8' />
      <Line type='monotone' dataKey='maxHeal' stroke='#8884d8' />
      <XAxis dataKey='rankDescription' />
      <YAxis />
      <Legend />
      <Tooltip/>
      <CartesianGrid strokeDasharray='3 3' />
    </LineChart>
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
      <button>Calculate</button>
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
            <td>{spell.averageHeal.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DruidView;
