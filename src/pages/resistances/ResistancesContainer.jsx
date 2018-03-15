import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import ResistancesView from './ResistancesView';
//import '../style.css';

class ResistancesContainer extends Component {

  componentWillMount() {
    this.props.initialize({
      health: 5000,
      resistance: 10,
    });
  }

  computeResistanceTable() {
    const health = +this.props.formValues.health;
    const resistances = [];
    for (let resistance = 0; resistance <= 315; resistance += 5) {
      const reduction = (resistance / 315) * 0.75;
      resistances.push({
        resistance,
        'reduction %': +(reduction * 100).toFixed(2),
        effectiveHealth: Math.round(health / (1 - reduction)),
      });
    }
    return resistances;
  }

  computeResistance() {
    const resistance = +this.props.formValues.resistance;
    const baseHealth = +this.props.formValues.health;

    const effectiveHealth = baseHealth / (1 - ((resistance / 315) * 0.75));
    const damageReduction = ((resistance / 315) * 75).toFixed(2);
    const effectiveHealthWithTenMoreHealth = (baseHealth + 10) / (1 - ((resistance / 315) * 0.75));
    const effectiveHealthWithOneMoreResistance = baseHealth / (1 - (((resistance + 1) / 315) * 0.75));
    const valueOfTenHealth = (effectiveHealthWithTenMoreHealth - effectiveHealth).toFixed(2);
    const valueofOneResist = (effectiveHealthWithOneMoreResistance - effectiveHealth).toFixed(2);

    return {
      resistance,
      baseHealth: Math.round(baseHealth),
      damageReduction,
      effectiveHealth: Math.round(effectiveHealth) || 0,
      valueOfTenHealth,
      valueofOneResist,
    };
  }

  render() {
    return (
      <ResistancesView
        formValues={ this.props.formValues }
        resistancesTable={ this.computeResistanceTable() }
        resistances={ this.computeResistance() }
      />
    );
  }
}

ResistancesContainer.defaultProps = {
  formValues: {},
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('ResistancesContainer')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

ResistancesContainer.propTypes = propTypes;

export default reduxForm({ form: 'ResistancesContainer' })(connect(mapStateToProps, mapDispatchToProps)(ResistancesContainer));
