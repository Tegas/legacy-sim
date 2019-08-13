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
          spell,
          rank,
          modifiedSpell: modifiedSpell,
          modifiedRank: modifiedRank,
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
    const hotCoefficient = spell.hotCoefficient ? (spell.hotCoefficient * lowLevelPenalty) : Math.min(((modifiedRank.duration || 15) / 15), 1) * lowLevelPenalty;

    const totalCrit = Math.min(+modifiedCharacter.crit, 100);
    const mana = modifiedRank.mana;
    const castTime = Math.max(modifiedRank.castTime, 1.5);
    const numberOfTicks = modifiedRank.duration / 3.0;
    const modifiedNumberOfTicks = modifiedRank.duration / 3.0;
    const bonusHot = modifiedSpell.hot ? hotCoefficient * +modifiedCharacter.healing : 0.0;
    const baseHotTick  = Math.floor(modifiedRank.hotTick || 0);
    const bonusHotTick = Math.floor(bonusHot / numberOfTicks);
    const totalBaseHot = baseHotTick * modifiedNumberOfTicks;
    const totalBonusHot = bonusHotTick * modifiedNumberOfTicks;
    const totalHot = totalBaseHot + totalBonusHot || 0.0;
    const hotTick = totalHot / modifiedNumberOfTicks;
    const baseAverage = ((modifiedRank.min || 0) + (modifiedRank.max || 0)) / 2;
    const bonusHeal = modifiedSpell.direct ? directCoefficient * +modifiedCharacter.healing : 0.0;
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
      mana: mana.toFixed(2),
      mps: manaPerSecond.toFixed(2),
      castTime,
      base: baseAverage.toFixed(2),
      hot: totalBaseHot,
      hotTick,
      bonus: bonusHeal.toFixed(2),
      bonusHot: totalBonusHot,
      crit: averageCritBonus.toFixed(2),
      total: totalAverage.toFixed(2),
      hps: healingPerSecond.toFixed(2),
      efficiency: +(manaEfficiency).toFixed(2),
      rating,
      coefficient,
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
    const { modifiedSpell } = this.applyTalents({
      spell: this.props.spell,
      rank: this.props.spell.ranks[0],
      character: this.props.formValues || {},
      target: {},
    }, this.props.talents);
    return (
      <HealingView
        spellName={ modifiedSpell.name }
        spell={ modifiedSpell }
        healingTable={ this.generateHealingTable(this.props.formValues) }
        talents={ this.props.talents }
      >
        <h3>Character</h3>
        <div className='row'>
          <div className='large-4 columns'>
            <label htmlFor='healing'>Healing
              <Field name='healing' component='input' type='number' min='0' max='9999' />
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
