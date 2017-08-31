import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues, Field } from 'redux-form';
import _ from 'lodash';
import HealingView from './HealingView';

const RANKS = [
  { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.5, 'min': 37, 'max': 51 },
  { 'rank': 2, 'mana': 55, 'level': 8, 'castTime': 2, 'min': 88, 'max': 112 },
  { 'rank': 3, 'mana': 110, 'level': 14, 'castTime': 2.5, 'min': 195, 'max': 243 },
  { 'rank': 4, 'mana': 185, 'level': 20, 'castTime': 3, 'min': 363, 'max': 445 },
  { 'rank': 5, 'mana': 270, 'level': 26, 'castTime': 3.5, 'min': 572, 'max': 694 },
  { 'rank': 6, 'mana': 335, 'level': 32, 'castTime': 3.5, 'min': 742, 'max': 894 },
  { 'rank': 7, 'mana': 405, 'level': 38, 'castTime': 3.5, 'min': 936, 'max': 1120 },
  { 'rank': 8, 'mana': 495, 'level': 44, 'castTime': 3.5, 'min': 1199, 'max': 1427 },
  { 'rank': 9, 'mana': 600, 'level': 50, 'castTime': 3.5, 'min': 1516, 'max': 1796 },
  { 'rank': 10, 'mana': 720, 'level': 56, 'castTime': 3.5, 'min': 1890, 'max': 2230 },
];

class healingTouch extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
      improvedHealingTouch: true,
      tranquilSpirit: true,
      giftOfNature: true,
    });
  }

  getSpellDetails(spell, character, target) {
    const coefficient = (spell.castTime / 3.5) * (1 - ((20 - Math.min(spell.level, 20)) * 0.0375));
    const critFromInt = ((+character.intellect || 0) / 60.0);
    const totalCrit = Math.min(critFromInt + (+character.crit || 0), 100);
    const manaReduction = (character.moonGlow ? 0.91 : 1.0) * (character.tranquilSpirit ? 0.9 : 1.0);
    const mana = spell.mana * manaReduction;
    const castTimeReduction = (character.naturesGrace ? (0.5 * (totalCrit / 100)) : 0.0)
    + (character.improvedHealingTouch ? 0.5 : 0.0);
    const castTime = Math.max((spell.castTime - castTimeReduction), 1.5);
    const bonusHeal = (coefficient * ((+character.healing || 0) + (target.amplifyMagic ? 150 : 0)));
    const minHeal = (spell.min * (character.giftOfNature ? 1.1 : 1.0));
    const maxHeal = (spell.max * (character.giftOfNature ? 1.1 : 1.0));
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
          <div className='large-4 columns'>
            <label htmlFor='crit'>Crit %
              <Field name='crit' component='input' type='number' min='0' max='100' />
            </label>
          </div>
          <div className='large-4 columns' />
        </div>
        <div className='row'>
          <div className='large-12 columns'>
            <Field name='improvedHealingTouch' id='improvedHealingTouch' component='input' type='checkbox' />
            <label htmlFor='improvedHealingTouch'>Improved HT</label> (0.5 reduced cast time)
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
            <Field name='naturesGrace' id='naturesGrace' component='input' type='checkbox' />
            <label htmlFor='naturesGrace'>Natures Grace</label> (0.5 reduced cast time after crit)
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
    formValues: getFormValues('healingTouch')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

healingTouch.propTypes = propTypes;

export default reduxForm({ form: 'healingTouch' })(connect(mapStateToProps, mapDispatchToProps)(healingTouch));
