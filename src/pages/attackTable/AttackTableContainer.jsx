import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import AttackTableView from './AttackTableView';

class AttackTableContainer extends Component {
  componentWillMount() {
    this.props.initialize({
      skill: 300,
      hit: 5,
      crit: 10,
      attackerLevel: 60,
      targetLevel: 63,
      hasParry: true,
      hasBlock: false,
    });
  }

  /**
   * Puts the number in a range of zero to one hundred.
   *
   * @param {number} number - The number.
   */
  normalize(number) {
    return Math.max(Math.min(number, 100), 0);
  }

  computeChances(attackType = 'auto') {

    // https://github.com/magey/classic-warrior/wiki/Attack-table
    // https://web.archive.org/web/20070222175829/http://forums.wow-europe.com/thread.html?topicId=166546791&pageNo=1&sid=1

    const skill = +this.props.formValues.skill;
    const hit = +this.props.formValues.hit;
    const crit = +this.props.formValues.crit;
    const attackerLevel = +this.props.formValues.attackerLevel;
    const targetLevel = +this.props.formValues.targetLevel;
    const hasParry = !!this.props.formValues.hasParry;
    const hasBlock = !!this.props.formValues.hasBlock;
    const defense = targetLevel * 5;
    const baseWeaponSkill = Math.min(300, skill);

    let missChance = 0.0;
    if (defense - skill > 10) {
      missChance += 5 + (targetLevel * 5 - skill) * 0.2;
    } else {
      missChance += 5 + (targetLevel * 5 - skill) * 0.1;
    }
    // low level bonus
    missChance *= (Math.min(10, targetLevel) / 10); // Note, unsure if this affects dual weild... but you can't duel wield < lvl 10

    // New science says DualWieldMissChance = NormalMissChance * 0.8 + 20%
    if (attackType === 'dual') {
      missChance = (missChance * 0.8) + 20;
    }

    // Skill difference penalty
    if (defense - skill > 10 && hit >= 1) {
      missChance -= (hit - 1);
    } else {
      missChance -= hit;
    }

    const bossParryBonus = targetLevel === 63 ? 12.5 : 5.0; // ? no idea if this is real but it's close to the test numbers

    const dodgeChance = Math.max(5 + (targetLevel * 5 - skill) * 0.1, 0);
    const critChance = crit + (baseWeaponSkill - defense) * (baseWeaponSkill - defense < 0 ? 0.2 : 0.4) - 1.8;
    const parryChance = hasParry ? Math.max(((defense - skill) * 0.1) + bossParryBonus, 0) : 0.0
    const blockChance = hasBlock ? Math.min(5.0, 5 + (targetLevel * 5 - skill) * 0.1) : 0.0;
    const glancingChance = attackType === 'special' ? 0.0 : 10 + (targetLevel * 5 - Math.min(attackerLevel * 5, skill)) * 2.0;
    const lowend = Math.min(1.3 - 0.05*(defense - skill), 0.91);
    const highend = Math.max(Math.min(1.2 - 0.03*(defense - skill), 0.99), 0.2);
    const glancingPenalty = attackType === 'special' ? 0.0 : (1 - ((lowend + highend) / 2)) * 100;

    return {
      critChance,
      dodgeChance,
      missChance,
      parryChance,
      blockChance,
      glancingChance,
      glancingPenalty,
    }
  }

  computeAttackTable({
    critChance,
    dodgeChance,
    missChance,
    parryChance,
    blockChance,
    glancingChance,
    glancingPenalty,
  }) {

    let remaining = 100.0;
    const miss = this.normalize(missChance);
    remaining -= miss;

    const dodge = Math.min(this.normalize(dodgeChance), remaining);
    remaining -= dodge;

    const parry = Math.min(this.normalize(parryChance), remaining);
    remaining -= parry;

    const block = Math.min(this.normalize(blockChance), remaining);
    remaining -= block;

    const glancing = Math.min(this.normalize(glancingChance), remaining);
    remaining -= glancing;

    const crit = Math.min(this.normalize(critChance), remaining);
    remaining -= crit;

    const hit = remaining;

    const overHitCap = this.normalize(missChance * -1);
    const overCritCap = this.normalize(critChance - crit);
    const overall = +hit + (2.0 * crit) + (glancing * (1 - (glancingPenalty / 100)));

    return {
      hitChance: hit.toFixed(2),
      critChance: crit.toFixed(2),
      dodgeChance: dodge.toFixed(2),
      missChance: miss.toFixed(2),
      parryChance: parry.toFixed(2),
      blockChance: block.toFixed(2),
      glancingChance: glancing.toFixed(2),
      glancingPenalty: glancingPenalty.toFixed(0),
      overHitCap: overHitCap.toFixed(2),
      overCritCap: overCritCap.toFixed(2),
      overall: overall.toFixed(2),
      pieChart: [
        { name: 'Miss', value: miss },
        { name: 'Dodge', value: dodge },
        { name: 'Parry', value: parry },
        { name: 'Block', value: block },
        { name: 'Glancing', value: glancing },
        { name: 'Crit', value: crit },
        { name: 'Hit', value: hit },
      ],
    }
  }

  computeAttackTables() {
    return {
      auto: this.computeAttackTable(this.computeChances('auto')),
      special: this.computeAttackTable(this.computeChances('special')),
      dual: this.computeAttackTable(this.computeChances('dual')),
    };
  };

  render() {
    return (
      <AttackTableView
        formValues={ this.props.formValues }
        attackTables={ this.computeAttackTables() }
      />
    );
  }
}

AttackTableContainer.defaultProps = {
  formValues: {},
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('AttackTableContainer')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

AttackTableContainer.propTypes = propTypes;

export default reduxForm({ form: 'AttackTableContainer' })(connect(mapStateToProps, mapDispatchToProps)(AttackTableContainer));
