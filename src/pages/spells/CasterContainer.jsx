import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import _ from 'lodash';
import CasterView from './CasterView';
import '../style.css';

class CasterContainer extends Component {

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
    const dotCoefficient = spell.dotCoefficient ? (spell.dotCoefficient * lowLevelPenalty) : coefficient;

    const totalCrit = Math.min(+modifiedCharacter.crit, 100);
    const mana = modifiedRank.mana;
    const castTime = Math.max(modifiedRank.castTime, 1.5);
    const baseDot = (modifiedRank.dot || 0);
    const bonusDot = modifiedSpell.dot ? dotCoefficient * +modifiedCharacter.damage : 0.0;
    const totalDot = baseDot + bonusDot;
    const baseAverage = ((modifiedRank.min || 0) + (modifiedRank.max || 0)) / 2;
    const bonusDamage = modifiedSpell.direct ? directCoefficient * +modifiedCharacter.damage : 0.0;
    const averageCritBonus = ((baseAverage + bonusDamage) * (modifiedSpell.critMultiplier || 0.5)) * (totalCrit / 100);
    const totalDirect = (baseAverage + bonusDamage + averageCritBonus);
    const totalAverage = (totalDirect + totalDot);
    const manaEfficiency = totalAverage / mana;
    const damagePerSecond = totalAverage / castTime;
    const manaPerSecond = mana * (1 / castTime);
    const rating = ((damagePerSecond / 10) + (manaEfficiency * 10)) * 20;

    return {
      rank: rank.rank,
      rankDescription: `Rank ${ rank.rank }`,
      mana: mana.toFixed(0),
      mps: manaPerSecond.toFixed(2),
      castTime: castTime.toFixed(2),
      base: baseAverage.toFixed(0),
      dot: modifiedRank.dot.toFixed(0),
      bonus: bonusDamage.toFixed(2),
      bonusDot: bonusDot.toFixed(2),
      crit: averageCritBonus.toFixed(2),
      total: totalAverage.toFixed(2),
      dps: damagePerSecond.toFixed(2),
      efficiency: +(manaEfficiency.toFixed(2)),
      rating,
    };
  }

  generateDamageTable(formValues = {}) {
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
      <CasterView
        spellName={ this.props.spell.name }
        spell={ this.props.spell }
        damageTable={ this.generateDamageTable(this.props.formValues) }
        talents={ this.props.talents }
      >
        <h3>Character</h3>
        <div className='row'>
          <div className='large-4 columns'>
            <label htmlFor='damage'>damage
              <Field name='damage' component='input' type='number' min='0' max='999' />
            </label>
          </div>
          <div className='large-4 columns'>
            <label htmlFor='crit'>Crit %
              <Field name='crit' component='input' type='number' min='0' max='100' />
            </label>
          </div>
          <div className='large-4 columns' />
        </div>
      </CasterView>
    );
  }
}
export default connect()(CasterContainer);
