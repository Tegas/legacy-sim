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
      meleeHit: 0,
      meleeCrit: 0,
      attackPower: 0,
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
    const armorType = formValues.type || 'plate';
    const patch = +formValues.patch || 12;
    const classType = formValues.class;
    console.log(items[0]);
    const slotItems = _.filter(items, (item) => {
      if (classType && item[classType] === 0) {
        return false;
      }
      if (
        (armorType == 'mail' && item.type == 'plate')
        || (armorType == 'leather' && (item.type == 'plate' || item.type == 'mail'))
        || (armorType == 'cloth' && (item.type == 'plate' || item.type == 'mail' || item.type == 'leather'))
      ) {
        return false;
      }
      return item.slot === slot && item.patch <= patch;
    });
    const slotItemValues = _.map(slotItems, (item) => {
      const score = Math.round(
        (item.strength || 0) * +formValues.strength
        + (item.agility || 0) * +formValues.agility
        + (item.intellect || 0) * +formValues.intellect
        + (item.spirit || 0) * +formValues.spirit
        + (item.stamina || 0) * +formValues.stamina
        + (item.meleeHit || 0) * +formValues.meleeHit
        + (item.meleeCrit || 0) * +formValues.meleeCrit
        + (item.attackPower || 0) * +formValues.attackPower
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
        tabs={[
          'Head',
          'Neck',
          'Shoulders',
          'Chest',
          'Cloak',
          'Wrist',
          'Hands',
          'Waist',
          'Legs',
          'Feet',
          'Finger',
          'Trinket',
          'Shield',
          'weapon',
          'mainHand',
          'OffHand',
          'holdable',
          'weapon2'
        ]}
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
