import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import ArmorView from './ArmorView';
//import '../style.css';

class ArmorContainer extends Component {

  componentWillMount() {
    this.props.initialize({
      health: 7500,
      resistance: 10,
      armor: 10000,
      attackerLevel: 63,
      targetLevel: 60,
    });
  }

  computeArmorTable() {
    const health = +this.props.formValues.health;
    const attackerLevel = +this.props.formValues.attackerLevel;
    const targetLevel = +this.props.formValues.targetLevel;
    const armorTable = [];
    for (let armor = 0; armor <= 17500; armor += 100) {
      const reduction = this.computeDamageReduction(armor, attackerLevel, targetLevel);
      armorTable.push({
        armor,
        'reduction %': +(reduction * 100).toFixed(2),
        effectiveHealth: Math.round(health / (1 - reduction)),
      });
    }
    return armorTable;
  }

  computeDamageReduction(armor, attackerLevel, targetLevel) {
    return Math.min(
      armor / (armor + 400 + 85 * attackerLevel),
      0.75);
  }

  computeArmor() {
    const armor = +this.props.formValues.armor;
    const baseHealth = +this.props.formValues.health;
    const attackerLevel = +this.props.formValues.attackerLevel;
    const targetLevel = +this.props.formValues.targetLevel;

    const damageReduction = this.computeDamageReduction(armor, attackerLevel, targetLevel);
    const effectiveHealth = baseHealth / (1 - (damageReduction));

    return {
      baseHealth: Math.round(baseHealth),
      damageReduction: (damageReduction * 100).toFixed(2),
      effectiveHealth: Math.round(effectiveHealth) || 0,
    };
  }

  render() {
    return (
      <ArmorView
        formValues={ this.props.formValues }
        armorTable={ this.computeArmorTable() }
        armor={ this.computeArmor() }
      />
    );
  }
}

ArmorContainer.defaultProps = {
  formValues: {},
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('ArmorContainer')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

ArmorContainer.propTypes = propTypes;

export default reduxForm({ form: 'ArmorContainer' })(connect(mapStateToProps, mapDispatchToProps)(ArmorContainer));
