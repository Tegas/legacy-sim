import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import CombatTableView from './CombatTableView';

class CombatTableContainer extends Component {
  componentWillMount() {
    this.props.initialize({
      skill: 300,
      hit: 8,
      crit: 10,
      attackerLevel: 60,
      targetLevel: 63,
      behind: true,
    });
  }

  computeCombatTable() {

    // https://github.com/magey/classic-warrior/wiki/Attack-table

    const skill = +this.props.formValues.skill;
    const hit = +this.props.formValues.hit;
    const crit = +this.props.formValues.crit;
    const attackerLevel = +this.props.formValues.attackerLevel;
    const targetLevel = +this.props.formValues.targetLevel;
    const behind = !!this.props.formValues.behind;

    
    let hitChance = 0.0;
    let critChance = 0.0;
    let dodgeChance = 0.0;
    let missChance = 3.0;
    let parryChance = 14.0;
    let glancingChance = 0.0;
    
    
    const defense = targetLevel * 5;
    const baseWeaponSkill = Math.min(300, skill);

    if (baseWeaponSkill - defense < 0) {
      critChance = crit + (baseWeaponSkill - defense) * 0.2;
    } else {
      critChance = crit + (baseWeaponSkill - defense) * 0.4;
    }

    dodgeChance = Math.max(5 + (targetLevel * 5 - skill) * 0.1, 0);

    if (defense - skill > 11) {
      missChance = 5 + (targetLevel * 5 - skill) * 0.2;
    } else {
      missChance = 5 + (targetLevel * 5 - skill) * 0.1;
    }
    // low level bonus
    missChance *= (Math.min(10, targetLevel) / 10);

    if (defense - skill > 10 && hit >= 1) {
      missChance -= (hit - 1);
    } else {
      missChance -= hit;
    }
    missChance = Math.max(missChance, 0);

    glancingChance = Math.max(10 + (targetLevel * 5 - Math.min(attackerLevel * 5, skill)) * 2.0, 0);

    const lowend = Math.min(1.3 - 0.05*(defense - skill), 0.91);
    const highend = Math.max(Math.min(1.2 - 0.03*(defense - skill), 0.99), 0.2);
    const glancingPenalty = (1 - ((lowend + highend) / 2)) * 100;

    parryChance = behind ? 0.0 : Math.max(5.0 + ((defense - skill) * 0.6), 0);

    hitChance = 100 - dodgeChance - missChance - parryChance - glancingChance;
    critChance = Math.max(Math.min(hitChance, critChance), 0);
    hitChance = hitChance - critChance;

    const overall = +hitChance + (2.0 * critChance) + (glancingChance * (1 - (glancingPenalty / 100)));

    return {
      hitChance: hitChance.toFixed(2),
      critChance: critChance.toFixed(2),
      dodgeChance: dodgeChance.toFixed(2),
      missChance: missChance.toFixed(2),
      parryChance: parryChance.toFixed(2),
      glancingChance: glancingChance.toFixed(2),
      glancingPenalty: glancingPenalty.toFixed(0),
      overall: overall.toFixed(2),
      pieChart: [
        { name: 'Hit', value: hitChance },
        { name: 'Crit', value: critChance },
        { name: 'Dodge', value: dodgeChance },
        { name: 'Miss', value: missChance },
        { name: 'Parry', value: parryChance },
        { name: 'Glancing', value: glancingChance },
      ], 
    }
  }

  render() {
    return (
      <CombatTableView
        formValues={ this.props.formValues }
        combatTable={ this.computeCombatTable() }
      />
    );
  }
}

CombatTableContainer.defaultProps = {
  formValues: {},
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('CombatTableContainer')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

CombatTableContainer.propTypes = propTypes;

export default reduxForm({ form: 'CombatTableContainer' })(connect(mapStateToProps, mapDispatchToProps)(CombatTableContainer));
