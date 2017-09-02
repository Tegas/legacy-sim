import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues, Field } from 'redux-form';
import _ from 'lodash';
import HealingView from './HealingView';

const RANKS = [
  { 'rank': 1, 'mana': 125, 'level': 20, 'castTime': 1.5, 'min': 193, 'max': 238 },
  { 'rank': 2, 'mana': 155, 'level': 26, 'castTime': 1.5, 'min': 258, 'max': 315 },
  { 'rank': 3, 'mana': 185, 'level': 32, 'castTime': 1.5, 'min': 327, 'max': 394 },
  { 'rank': 4, 'mana': 215, 'level': 38, 'castTime': 1.5, 'min': 400, 'max': 479 },
  { 'rank': 5, 'mana': 265, 'level': 44, 'castTime': 1.5, 'min': 518, 'max': 617 },
  { 'rank': 6, 'mana': 315, 'level': 50, 'castTime': 1.5, 'min': 644, 'max': 765 },
  { 'rank': 7, 'mana': 380, 'level': 56, 'castTime': 1.5, 'min': 812, 'max': 959 },
];

class flashHeal extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  getSpellDetails(spell, character, target) {
    const coefficient = (spell.castTime / 3.5) * (1 - ((20 - Math.min(spell.level, 20)) * 0.0375));
    const critFromInt = ((+character.intellect || 0) / 60.0);
    const totalCrit = Math.min(critFromInt + (+character.crit || 0), 100);
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
        spellName='Flash Heal'
        healingTable={ this.generateHealingTable(this.props.formValues) }
      >
        <h3>Character</h3>
        <div className='row'>
          <div className='large-4 columns'>
            <label htmlFor='healing'>Healing
              <Field name='healing' component='input' type='number' min='0' max='999' />
            </label>
          </div>
          <div className='large-4 columns'>
            <label htmlFor='crit'>Crit %
              <Field name='crit' component='input' type='number' min='0' max='100' />
            </label>
          </div>
          <div className='large-4 columns' />
        </div>
      </HealingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('flashHeal')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

flashHeal.propTypes = propTypes;

export default reduxForm({ form: 'flashHeal' })(connect(mapStateToProps, mapDispatchToProps)(flashHeal));
