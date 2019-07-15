import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class regrowth extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
      improvedRegrowth: true,
      tranquilSpirit: true,
      giftOfNature: true,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.regrowth }
        talents={ [
          talents.improvedRegrowth,
          talents.giftOfNature,
          talents.moonglow,
          talents.naturesGrace,
          talents.amplifyMagic,
          talents.t3Druid4set,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('regrowth')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

regrowth.propTypes = propTypes;

export default reduxForm({ form: 'regrowth' })(connect(mapStateToProps, mapDispatchToProps)(regrowth));
