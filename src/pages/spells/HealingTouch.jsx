import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class healingTouch extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
      improvedHealingTouch: true,
      tranquilSpirit: true,
      giftOfNature: true,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.healingTouch }
        talents={ [
          talents.improvedHealingTouch,
          talents.giftOfNature,
          talents.tranquilSpirit,
          talents.moonglow,
          talents.naturesGrace,
          talents.amplifyMagic,
          talents.t3Druid4set,
          talents.t3Druid8set,
          talents.idolOfHealth,
          talents.idolOfLongevity,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('healingTouch')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

healingTouch.propTypes = propTypes;

export default reduxForm({ form: 'healingTouch' })(connect(mapStateToProps, mapDispatchToProps)(healingTouch));
