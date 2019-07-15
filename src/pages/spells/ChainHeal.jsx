import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class chainHeal extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.chainHeal }
        talents={ [
          talents.tidalFocus,
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
    formValues: getFormValues('chainHeal')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

chainHeal.propTypes = propTypes;

export default reduxForm({ form: 'chainHeal' })(connect(mapStateToProps, mapDispatchToProps)(chainHeal));
