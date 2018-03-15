import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import GearView from './GearView';
import items from '../../assets/data/items';

class GearPage extends Component {

  constructor() {
    super();
    this.state = {
      tab: 'Head',
    };
    this._handleTabClick = this._handleTabClick.bind(this);
    this._getItems = this._getItems.bind(this);
  }

  componentWillMount() {
    this.props.initialize({
      strength: 0,
      agility: 0,
      intellect: 0,
      spirit: 0,
      stamina: 0,
      hit: 0,
      crit: 0,
      attack: 0,
      spellHit: 0,
      spellCrit: 0,
      healing: 0,
      spellDamage: 0,
      mp5: 0,
      armor: 0
    });
  }

  _handleTabClick(event) {
    console.log('clicked', event.target);

    this.setState(Object.assign({}, this.state, {
      tab: event.target.innerText,
    }));
    console.log('state', this.state);
  }

  _getItems(slot) {
    const formValues = this.props.formValues || {};
    const slotItems = _.filter(items, (item) => (item.slot === slot));
    const slotItemValues = _.map(slotItems, (item) => {
      const score = Math.round(
        (item.strength || 0) * +formValues.strength
        + (item.agility || 0) * +formValues.agility
        + (item.intellect || 0) * +formValues.intellect
        + (item.spirit || 0) * +formValues.spirit
        + (item.stamina || 0) * +formValues.stamina
        + (item.hit || 0) * +formValues.hit
        + (item.crit || 0) * +formValues.crit
        + (item.attack || 0) * +formValues.attack
        + (item.spellHit || 0) * +formValues.spellHit
        + (item.spellCrit || 0) * +formValues.spellCrit
        + (item.healing || 0) * +formValues.healing
        + (item.spellDamage || 0) * +formValues.spellDamage
        + (item.mp5 || 0) * +formValues.mp5
        + (item.armor || 0) * +formValues.armor
      );
      return Object.assign({}, item, { score });
    })
    return _.orderBy(slotItemValues, ['score', 'itemLevel'], ['desc', 'desc']);
  }

  render() {
    return (
      <GearView
        items={this._getItems(this.state.tab.toLowerCase())}
        handleTabClick={this._handleTabClick}
        tab={this.state.tab}
        tabs={['Head', 'Neck', 'Shoulders', 'Chest', 'Wrist', 'Hands', 'Waist', 'Legs', 'Finger', 'Trinket']}
        selectedTab={this.state.tab}
      />
    );
  }
}

GearPage.defaultProps = {
  items: []
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('GearPage')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

GearPage.propTypes = propTypes;

export default reduxForm({ form: 'GearPage' })(connect(mapStateToProps, mapDispatchToProps)(GearPage));
