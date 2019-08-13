import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class greaterHeal extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.greaterHeal }
        talents={ [
          talents.divineFury,
          talents.improvedHealing,
          talents.spiritualHealing,
          talents.t2Priest8set,
          talents.amplifyMagic,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('greaterHeal')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

greaterHeal.propTypes = propTypes;

export default reduxForm({ form: 'greaterHeal' })(connect(mapStateToProps, mapDispatchToProps)(greaterHeal));
