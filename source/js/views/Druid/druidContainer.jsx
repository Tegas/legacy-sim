import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes } from 'redux-form';
import DruidView from './druidView';
import druid from './druid.json';

// import select from 'd3-select';

import {
  getFormValues,
  getHealingTable,

  simulationRequested,
} from './index';

class druidContainer extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  render() {
    return (
      <DruidView
        healingTouchTable={ this.props.healingTouchTable }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues(state),
    healingTouchTable: getHealingTable(getFormValues(state), druid.healingTouch),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    simulationRequested,
  }, dispatch),
});

druidContainer.propTypes = propTypes;

export default reduxForm({ form: 'druidForm' })(connect(mapStateToProps, mapDispatchToProps)(druidContainer));
