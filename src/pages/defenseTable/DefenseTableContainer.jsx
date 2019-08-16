import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import DefenseTableView from './defenseTableView';

class DefenseTableContainer extends Component {
  componentWillMount() {
    this.props.initialize({
      skill: 300,
      plusBlock: 0,
      plusDodge: 0,
      plusParry: 0,
      hasParry: true,
      hasBlock: true,
      playerLevel: 60,
      mobLevel: 63,
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

    const skill = +this.props.formValues.skill;
    const plusBlock = +this.props.formValues.plusBlock;
    const plusDodge = +this.props.formValues.plusDodge;
    const plusParry = +this.props.formValues.plusParry;
    // const playerLevel = +this.props.formValues.playerLevel;
    const mobLevel = +this.props.formValues.mobLevel;
    const hasParry = !!this.props.formValues.hasParry;
    const hasBlock = !!this.props.formValues.hasBlock;
    const mobSkill = mobLevel * 5;
    const baseDefenseSkill = Math.min(300, skill);    

    const skillDifference = skill - mobSkill;
    const baseSkillDifference = mobSkill - baseDefenseSkill;

    const missChance = 5 + skillDifference * 0.04;
    const dodgeChance = 5 + plusDodge + skillDifference * 0.04;
    const parryChance = hasParry ? 5 + plusParry + skillDifference * 0.04 : 0;
    const blockChance = hasBlock ? 5 + plusBlock + skillDifference * 0.04 : 0;
    const critChance = attackType === 'special' ? 0 : 5 - skillDifference * 0.04
    const crushingChance = baseSkillDifference >= 15 && attackType === 'auto' ? (baseSkillDifference * 2) - 15 : 0;

    return {
      critChance,
      dodgeChance,
      missChance,
      parryChance,
      blockChance,
      crushingChance,
    }
  }

  computeDefenseTable({
    critChance,
    dodgeChance,
    missChance,
    parryChance,
    blockChance,
    crushingChance,
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

    const crushing = Math.min(this.normalize(crushingChance), remaining);
    remaining -= crushing;

    const crit = Math.min(this.normalize(critChance), remaining);
    remaining -= crit;

    const hit = remaining;

    const overHitCap = this.normalize(missChance * -1);
    const overCritCap = this.normalize(critChance - crit);
    const overall = +hit + (2.0 * crit) + (crushing * 1.5) + (block * 0.9);

    return {
      hitChance: hit.toFixed(2),
      critChance: crit.toFixed(2),
      dodgeChance: dodge.toFixed(2),
      missChance: miss.toFixed(2),
      parryChance: parry.toFixed(2),
      blockChance: block.toFixed(2),
      crushingChance: crushing.toFixed(2),
      overHitCap: overHitCap.toFixed(2),
      overCritCap: overCritCap.toFixed(2),
      overall: overall.toFixed(2),
      pieChart: [
        { name: 'Miss', value: miss },
        { name: 'Dodge', value: dodge },
        { name: 'Parry', value: parry },
        { name: 'Block', value: block },
        { name: 'Crushing', value: crushing },
        { name: 'Crit', value: crit },
        { name: 'Hit', value: hit },
      ],
    }
  }

  computeDefenseTables() {
    return {
      auto: this.computeDefenseTable(this.computeChances('auto')),
      special: this.computeDefenseTable(this.computeChances('special')),
    };
  };

  render() {
    return (
      <DefenseTableView
        formValues={ this.props.formValues }
        defenseTables={ this.computeDefenseTables() }
      />
    );
  }
}

DefenseTableContainer.defaultProps = {
  formValues: {},
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('DefenseTableContainer')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

DefenseTableContainer.propTypes = propTypes;

export default reduxForm({ form: 'DefenseTableContainer' })(connect(mapStateToProps, mapDispatchToProps)(DefenseTableContainer));
