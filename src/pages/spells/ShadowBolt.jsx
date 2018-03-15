import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import CasterContainer from './CasterContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class shadowBolt extends Component {

  componentWillMount() {
    this.props.initialize({
      damage: 400,
      crit: 20,
      improvedShadowBolt: true,
      bane: true,
      cataclysm: true,
      shadowMastery: true,
      ruin: true,
    });
  }

  render() {
    return (
      <CasterContainer
        spell={ spells.shadowBolt }
        talents={ [
          talents.improvedShadowBolt,
          talents.bane,
          talents.cataclysm,
          talents.ruin,
          talents.shadowMastery,
          talents.demonicSacrifice,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('shadowBolt')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

shadowBolt.propTypes = propTypes;

export default reduxForm({ form: 'shadowBolt' })(connect(mapStateToProps, mapDispatchToProps)(shadowBolt));
