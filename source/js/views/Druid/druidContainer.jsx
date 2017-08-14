import React, { Component } from 'react';
import { LineChart } from 'react-d3-basic';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import DruidView from './druidView';
import druid from './druid.json';

// import select from 'd3-select';

import {
  getFormValues,
  getHealingTable,

  simulationRequested,
} from './index';

class druidContainer extends Component {

  componentDidMount() {
  
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

export default reduxForm({ form: 'druidForm' })(connect(mapStateToProps, mapDispatchToProps)(druidContainer));
