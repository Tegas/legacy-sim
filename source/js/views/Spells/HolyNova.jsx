import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class holyNova extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.holyNova }
        talents={ [
          talents.mentalAgility,
          talents.spiritualHealing,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('holyNova')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

holyNova.propTypes = propTypes;

export default reduxForm({ form: 'holyNova' })(connect(mapStateToProps, mapDispatchToProps)(holyNova));