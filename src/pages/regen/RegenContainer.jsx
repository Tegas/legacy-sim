import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import RegenView from './RegenView';

class RegenContainer extends Component {

  componentWillMount() {
    this.props.initialize({
      class: 'druid',
      intellect: 200,
      spirit: 200,
      combatManaRegen: 15,
    });
  }

  computeRegen() {
    const intellect = +this.props.formValues.intellect;
    const spirit = +this.props.formValues.spirit;
    const combatManaRegen = +this.props.formValues.combatManaRegen;

    // math
    //Formulas for mana regeneration based on spirit:
    let formula = undefined;
    switch (this.props.formValues.class) {
      case 'priest':
      case 'mage':
        formula = (intellect, spirit) => 13 + (spirit / 4);
        break;
      case 'druid':
      case 'shaman':
      case 'paladin':
      case 'hunter':
        formula = (intellect, spirit) => 15 + (spirit / 5);
        break;
      case 'warlock':
        formula = (intellect, spirit) => 8 + (spirit / 4);
        break;
      default:
        formula = (intellect, spirit) => 0;
        break;
    }

    const manaPerTick = formula(intellect, spirit);
    const outOfCombat = manaPerTick * 2.5;

    return {
      outOfCombat: (outOfCombat).toFixed(2),
      inCombat: (outOfCombat * (combatManaRegen / 100)).toFixed(2),
    };
  }

  render() {
    return (
      <RegenView
        formValues={ this.props.formValues }
        regen={ this.computeRegen() }
      />
    );
  }
}

RegenContainer.defaultProps = {
  formValues: {},
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('RegenContainer')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

RegenContainer.propTypes = propTypes;

export default reduxForm({ form: 'RegenContainer' })(connect(mapStateToProps, mapDispatchToProps)(RegenContainer));
