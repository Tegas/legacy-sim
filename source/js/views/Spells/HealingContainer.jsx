import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import _ from 'lodash';
import HealingView from './HealingView';
import '../style.css';

class HealingContainer extends Component {

  applyTalents({ spell, rank, character, target }, talents) {
    const modifiedSpell = Object.assign({}, spell);
    const modifiedRank = Object.assign({}, rank);
    const modifiedCharacter = Object.assign({}, character);
    const modifiedTarget = Object.assign({}, target);

    _.forOwn(talents, (value) => {
      if (character[value.field]) {
        value.effect({
          spell: modifiedSpell,
          rank: modifiedRank,
          character: modifiedCharacter,
          target: modifiedTarget,
        });
      }
    });
    return {
      modifiedSpell,
      modifiedRank,
      modifiedCharacter,
      modifiedTarget,
      spell,
      rank,
      character,
      target,
    };
  }

  computeSpellDetails({ modifiedSpell, modifiedRank, modifiedCharacter, target, spell, rank }) {
    const lowLevelPenalty = (1 - ((20 - Math.min(rank.level, 20)) * 0.0375));
    const coefficient = (Math.min(rank.castTime, 3.5) / 3.5) * lowLevelPenalty;
    const directCoefficient = spell.coefficient ? (spell.coefficient * lowLevelPenalty) : coefficient;
    const hotCoefficient = spell.hotCoefficient ? (spell.hotCoefficient * lowLevelPenalty) : coefficient;

    const totalCrit = Math.min(+modifiedCharacter.crit, 100);
    const mana = modifiedRank.mana;
    const castTime = Math.max(modifiedRank.castTime, 1.5);
    const baseHot = (modifiedRank.hot || 0);
    const bonusHot = spell.hot ? hotCoefficient * +modifiedCharacter.healing : 0.0;
    const totalHot = baseHot + bonusHot;
    const baseAverage = ((modifiedRank.min || 0) + (modifiedRank.max || 0)) / 2;
    const bonusHeal = spell.direct ? directCoefficient * +modifiedCharacter.healing : 0.0;
    const averageCritBonus = ((baseAverage + bonusHeal) / 2) * (totalCrit / 100);
    const totalDirect = (baseAverage + bonusHeal + averageCritBonus);
    const totalAverage = (totalDirect + totalHot);
    const manaEfficiency = totalAverage / mana;
    const healingPerSecond = totalAverage / castTime;
    const manaPerSecond = mana * (1 / castTime);
    const rating = ((healingPerSecond / 10) + (manaEfficiency * 10)) * 20;

    return {
      rank: rank.rank,
      rankDescription: `Rank ${ rank.rank }`,
      mana,
      mps: manaPerSecond.toFixed(2),
      castTime,
      base: baseAverage.toFixed(0),
      hot: modifiedRank.hot.toFixed(0),
      bonus: bonusHeal.toFixed(2),
      bonusHot: bonusHot.toFixed(2),
      crit: averageCritBonus.toFixed(2),
      total: totalAverage.toFixed(2),
      hps: healingPerSecond.toFixed(2),
      efficiency: +(manaEfficiency.toFixed(2)),
      rating,
    };
  }

  generateHealingTable(formValues = {}) {
    return _.map(this.props.spell.ranks, rank => {
      return this.computeSpellDetails(
        this.applyTalents({
          spell: this.props.spell,
          rank,
          character: formValues,
          target: {},
        }, this.props.talents));
    });
  }

  render() {
    return (
      <HealingView
        spellName={ this.props.spell.name }
        spell={ this.props.spell }
        healingTable={ this.generateHealingTable(this.props.formValues) }
        talents={ this.props.talents }
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
export default connect()(HealingContainer);
