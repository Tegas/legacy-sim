import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import ResistancesView from './ResistancesView';
import '../style.css';

class ResistancesContainer extends Component {

  componentWillMount() {
    this.props.initialize({
      health: 5000,
    });
  }

  computeResistanceTable() {
    const health = +this.props.formValues.health;
    const resistances = [];
    for (let resistance = 0; resistance <= 315; resistance++) {
      const reduction = (resistance / 315) * 0.75;
      resistances.push({
        resistance,
        reduction,
        effectiveHealth: health / (1 - reduction),
      });
    }
    return resistances;
  }

  render() {
    return (
      <ResistancesView
        formValues={ this.props.formValues }
        resistancesTable={ this.computeResistanceTable() }
      />
    );
  }
}

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
