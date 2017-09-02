import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues, Field } from 'redux-form';
import _ from 'lodash';
import HealingView from './HealingView';

const RANKS = [
  { 'rank': 1, 'mana': 120, 'level': 12, 'castTime': 2, 'min': 84, 'max': 99, 'hot': 98 },
  { 'rank': 2, 'mana': 205, 'level': 18, 'castTime': 2, 'min': 164, 'max': 189, 'hot': 175 },
  { 'rank': 3, 'mana': 280, 'level': 24, 'castTime': 2, 'min': 240, 'max': 275, 'hot': 259 },
  { 'rank': 4, 'mana': 350, 'level': 30, 'castTime': 2, 'min': 318, 'max': 361, 'hot': 343 },
  { 'rank': 5, 'mana': 420, 'level': 36, 'castTime': 2, 'min': 405, 'max': 458, 'hot': 427 },
  { 'rank': 6, 'mana': 510, 'level': 42, 'castTime': 2, 'min': 511, 'max': 576, 'hot': 546 },
  { 'rank': 7, 'mana': 615, 'level': 48, 'castTime': 2, 'min': 646, 'max': 725, 'hot': 686 },
  { 'rank': 8, 'mana': 740, 'level': 54, 'castTime': 2, 'min': 809, 'max': 906, 'hot': 861 },
  { 'rank': 9, 'mana': 880, 'level': 60, 'castTime': 2, 'min': 1003, 'max': 1120, 'hot': 1064 },
];

class regrowth extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
      improvedRegrowth: true,
      tranquilSpirit: true,
      giftOfNature: true,
    });
  }

  getSpellDetails(spell, character, target) {
    // Coefficients https://github.com/elysium-project/server/pull/860
    const coefficient = 0.325;
    const hotCoefficient = 0.513;
    const critFromInt = ((+character.intellect || 0) / 60.0);
    const totalCrit = Math.min((critFromInt + +character.crit) * (character.improvedRegrowth ? 1.5 : 1.0), 100);
    const manaReduction = (character.moonGlow ? 0.91 : 1.0) * (character.tranquilSpirit ? 0.9 : 1.0);
    const mana = spell.mana * manaReduction;
    const castTimeReduction = (character.naturesGrace ? (0.5 * (totalCrit / 100)) : 0.0);
    const castTime = Math.max((spell.castTime - castTimeReduction), 1.5);
    const bonusHeal = (coefficient * ((+character.healing || 0) + (target.amplifyMagic ? 150 : 0)));
    const bonusHot = (hotCoefficient * ((+character.healing || 0) + (target.amplifyMagic ? 150 : 0)));
    const minHeal = (spell.min * (character.giftOfNature ? 1.1 : 1.0));
    const maxHeal = (spell.max * (character.giftOfNature ? 1.1 : 1.0));
    const baseHot = (spell.hot * (character.giftOfNature ? 1.1 : 1.0));
    const baseAverage = ((minHeal + maxHeal) / 2) + baseHot;
    const averageHeal = baseAverage + bonusHeal + baseHot + bonusHot;
    const averageCritBonus = (((baseAverage + bonusHeal) / 2) * (totalCrit / 100));
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
        spellName='Regrowth'
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
            <Field name='improvedRegrowth' id='improvedRegrowth' component='input' type='checkbox' />
            <label htmlFor='improvedRegrowth'>Improved Regrowth</label> (50% improved crit)
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
    formValues: getFormValues('regrowth')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

regrowth.propTypes = propTypes;

export default reduxForm({ form: 'regrowth' })(connect(mapStateToProps, mapDispatchToProps)(regrowth));
