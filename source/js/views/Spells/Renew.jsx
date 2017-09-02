import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues, Field } from 'redux-form';
import _ from 'lodash';
import HealingView from './HealingView';

const RANKS = [
  { 'rank': 1, 'mana': 30, 'level': 8, 'castTime': 1.5, 'min': 45, 'max': 45 },
  { 'rank': 2, 'mana': 65, 'level': 14, 'castTime': 1.5, 'min': 100, 'max': 100 },
  { 'rank': 3, 'mana': 105, 'level': 20, 'castTime': 1.5, 'min': 175, 'max': 175 },
  { 'rank': 4, 'mana': 140, 'level': 26, 'castTime': 1.5, 'min': 245, 'max': 245 },
  { 'rank': 5, 'mana': 170, 'level': 32, 'castTime': 1.5, 'min': 315, 'max': 315 },
  { 'rank': 6, 'mana': 205, 'level': 38, 'castTime': 1.5, 'min': 400, 'max': 400 },
  { 'rank': 7, 'mana': 250, 'level': 44, 'castTime': 1.5, 'min': 510, 'max': 510 },
  { 'rank': 7, 'mana': 305, 'level': 50, 'castTime': 1.5, 'min': 650, 'max': 650 },
  { 'rank': 7, 'mana': 365, 'level': 56, 'castTime': 1.5, 'min': 810, 'max': 810 },
  { 'rank': 7, 'mana': 410, 'level': 60, 'castTime': 1.5, 'min': 970, 'max': 970 },
];

class renew extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
    });
  }

  getSpellDetails(spell, character, target) {
    const coefficient = (spell.castTime / 3.5) * (1 - ((20 - Math.min(spell.level, 20)) * 0.0375));
    const totalCrit = 0;
    const manaReduction = 1.0;
    const mana = spell.mana * manaReduction;
    const castTimeReduction = 0;
    const castTime = Math.max((spell.castTime - castTimeReduction), 1.5);
    const bonusHeal = (coefficient * ((+character.healing || 0) + (target.amplifyMagic ? 150 : 0)));
    const minHeal = spell.min;
    const maxHeal = spell.max;
    const baseAverage = (minHeal + maxHeal) / 2;
    const averageHeal = baseAverage + bonusHeal;
    const averageCritBonus = ((averageHeal / 2) * (totalCrit / 100));
    const totalAverage = (averageHeal + averageCritBonus);
    const manaEfficiency = totalAverage / mana;
    const healingPerSecond = totalAverage / castTime;
    const manaPerSecond = mana * (1 / castTime);
    const rating = ((healingPerSecond / 10) + (manaEfficiency * 10)) * 20;

    return {
      rank: spell.rank,
      rankDescription: `Rank ${ spell.rank }`,
      mana,
      mps: manaPerSecond.toFixed(2),
      castTime,
      base: baseAverage.toFixed(0),
      bonus: bonusHeal.toFixed(2),
      crit: averageCritBonus.toFixed(2),
      total: (baseAverage + bonusHeal + averageCritBonus).toFixed(2),
      hps: healingPerSecond.toFixed(2),
      efficiency: +(manaEfficiency.toFixed(2)),
      rating,
    };
  }

  generateHealingTable(formValues = {}) {
    return _.map(RANKS, spell => {
      return this.getSpellDetails(spell, formValues, {});
    });
  }

  render() {
    return (
      <HealingView
        spellName='Renew'
        healingTable={ this.generateHealingTable(this.props.formValues) }
      >
        <h3>Character</h3>
        <div className='row'>
          <div className='large-4 columns'>
            <label htmlFor='healing'>Healing
              <Field name='healing' component='input' type='number' min='0' max='999' />
            </label>
          </div>
          <div className='large-4 columns' />
          <div className='large-4 columns' />
        </div>
      </HealingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('renew')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

renew.propTypes = propTypes;

export default reduxForm({ form: 'renew' })(connect(mapStateToProps, mapDispatchToProps)(renew));
