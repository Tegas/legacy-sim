import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class healingWave extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.healingWave }
        talents={ [
          talents.improvedHealingWave,
          talents.tidalFocus,
          talents.healingWay,
          talents.purification,
          talents.amplifyMagic,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('healingWave')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

healingWave.propTypes = propTypes;

export default reduxForm({ form: 'healingWave' })(connect(mapStateToProps, mapDispatchToProps)(healingWave));
