import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues, Field } from 'redux-form';
import _ from 'lodash';
import HealingView from './HealingView';

const RANKS = [
  { 'rank': 1, 'mana': 25, 'level': 4, 'castTime': 1.5, 'min': 32, 'max': 32 },
  { 'rank': 2, 'mana': 40, 'level': 10, 'castTime': 1.5, 'min': 56, 'max': 56 },
  { 'rank': 3, 'mana': 75, 'level': 16, 'castTime': 1.5, 'min': 116, 'max': 116 },
  { 'rank': 4, 'mana': 105, 'level': 22, 'castTime': 1.5, 'min': 180, 'max': 180 },
  { 'rank': 5, 'mana': 135, 'level': 28, 'castTime': 1.5, 'min': 244, 'max': 244 },
  { 'rank': 6, 'mana': 160, 'level': 34, 'castTime': 1.5, 'min': 304, 'max': 304 },
  { 'rank': 7, 'mana': 195, 'level': 40, 'castTime': 1.5, 'min': 388, 'max': 388 },
  { 'rank': 8, 'mana': 235, 'level': 46, 'castTime': 1.5, 'min': 488, 'max': 488 },
  { 'rank': 9, 'mana': 280, 'level': 52, 'castTime': 1.5, 'min': 608, 'max': 608 },
  { 'rank': 10, 'mana': 335, 'level': 58, 'castTime': 1.5, 'min': 756, 'max': 756 },
  { 'rank': 11, 'mana': 360, 'level': 60, 'castTime': 1.5, 'min': 888, 'max': 888 },
];

class rejuvenation extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
      improvedRejuvenation: true,
      tranquilSpirit: true,
      giftOfNature: true,
    });
  }

  getSpellDetails(spell, character, target) {
    const coefficient = (spell.castTime / 3.5) * (1 - ((20 - Math.min(spell.level, 20)) * 0.0375));
    const manaReduction = (character.moonGlow ? 0.91 : 1.0) * (character.tranquilSpirit ? 0.9 : 1.0);
    const mana = spell.mana * manaReduction;
    const castTimeReduction = 0.0;
    const castTime = Math.max((spell.castTime - castTimeReduction), 1.5);
    const bonusHeal = (coefficient * ((+character.healing || 0) + (target.amplifyMagic ? 150 : 0)));
    const minHeal = (spell.min * (character.improvedRejuvenation ? 1.15 : 1.0) * (character.giftOfNature ? 1.10 : 1.0));
    const maxHeal = (spell.max * (character.improvedRejuvenation ? 1.15 : 1.0) * (character.giftOfNature ? 1.10 : 1.0));
    const baseAverage = (minHeal + maxHeal) / 2;
    const averageHeal = baseAverage + bonusHeal;
    const averageCritBonus = 0.0;
    const totalAverage = (averageHeal);
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
        spellName='Healing Touch'
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
        <div className='row'>
          <div className='large-12 columns'>
            <Field name='improvedRejuvenation' id='improvedRejuvenation' component='input' type='checkbox' />
            <label htmlFor='improvedRejuvenation'>Improved Rejuv</label> (15% increased healing)
          </div>
        </div>
        <div className='row'>
          <div className='large-12 columns'>
            <Field name='tranquilSpirit' id='tranquilSpirit' component='input' type='checkbox' />
            <label htmlFor='tranquilSpirit'>Tranquil Spirit</label> (10% reduced mana cost)
          </div>
        </div>
        <div className='row'>
          <div className='large-12 columns'>
            <Field name='giftOfNature' id='giftOfNature' component='input' type='checkbox' />
            <label htmlFor='giftOfNature'>Gift Of Nature</label> (10% increased base heal)
          </div>
        </div>
        <div className='row'>
          <div className='large-12 columns'>
            <Field name='moonGlow' id='moonGlow' component='input' type='checkbox' />
            <label htmlFor='moonGlow'>Moonglow</label> (9% reduced mana cost)
          </div>
        </div>
      </HealingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('rejuvenation')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

rejuvenation.propTypes = propTypes;

export default reduxForm({ form: 'rejuvenation' })(connect(mapStateToProps, mapDispatchToProps)(rejuvenation));
