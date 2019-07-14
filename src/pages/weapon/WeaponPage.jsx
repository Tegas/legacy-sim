import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import WeaponView from './WeaponView';
import items from '../../assets/data/items';

const weaponProficiencies = {
  'druid': ['dagger', 'mace', 'mace2', 'staff', 'fist', 'misc'],
  'hunter': ['sword', 'dagger','axe', 'sword2', 'axe2', 'polearm', 'staff', 'bow', 'crossbow', 'gun', 'thrown', 'fist', 'misc'],
  'mage': ['sword', 'dagger', 'staff', 'wand', 'misc'],
  'priest': ['dagger', 'mace', 'staff', 'wand', 'misc'],
  'rogue': ['sword', 'dagger', 'mace', 'bow', 'crossbow', 'gun', 'thrown', 'fist', 'misc'],
  'shaman': ['dagger','axe','mace', 'mace2', 'axe2', 'staff', 'misc', 'shield'],
  'warlock': ['sword', 'dagger', 'staff', 'wand', 'misc'],
  'warrior': ['sword', 'dagger','axe','mace', 'sword2', 'mace2', 'axe2', 'polearm', 'staff', 'bow', 'crossbow', 'gun', 'thrown', 'fist', 'misc', 'shield'],
  'paladin': ['sword', 'axe','mace', 'sword2', 'mace2', 'axe2', 'polearm', 'misc', 'shield'],
}

class WeaponPage extends Component {

  constructor() {
    super();
    this.state = {
      tab: '1-hand',
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
      armor: 0,
      dodge: 0,
      defense: 0
    });
  }

  _handleTabClick(event) {
    this.setState(Object.assign({}, this.state, {
      tab: event.target.innerText,
    }));
  }

  _getItems(slot) {
    const formValues = this.props.formValues || {};
    const patch = +formValues.patch || 12;
    const classType = formValues.class;
    const slotItems = _.filter(items, (item) => {
      if (classType && item[classType] === 0) {
        return false;
      }

      if (classType && weaponProficiencies[classType].indexOf(item.type) === -1) {
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
        + (item.defense || 0) * +formValues.defense
        + (item.dodge || 0) * +formValues.dodge
      );
      return Object.assign({}, item, { score });
    })
    return _.orderBy(slotItemValues, ['score', 'itemLevel'], ['desc', 'desc']);
  }

  _getColumns(slot) {
    const formValues = this.props.formValues || {};
    return {
      strength: formValues.strength > 0,
      agility: formValues.agility > 0,
      intellect: formValues.intellect > 0,
      spirit: formValues.spirit > 0,
      stamina: formValues.stamina > 0,
      meleeHit: formValues.meleeHit > 0,
      meleeCrit: formValues.meleeCrit > 0,
      attackPower: formValues.attackPower > 0,
      spellHit: formValues.spellHit > 0,
      spellCrit: formValues.spellCrit > 0,
      healing: formValues.healing > 0,
      spellDamage: formValues.spellDamage > 0,
      mp5: formValues.mp5 > 0,
      armor: formValues.armor > 0,
      defense: formValues.defense > 0,
      dodge: formValues.dodge > 0,
    };
  }

  render() {
    return (
      <WeaponView
        items={this._getItems(this.state.tab.toLowerCase())}
        handleTabClick={this._handleTabClick}
        tab={this.state.tab}
        tabs={[
          '1-hand',
          'main-hand',
          '2-hand',
          'Shield',
          'off-hand',
          'ranged',
        ]}
        selectedTab={this.state.tab}
        columns={this._getColumns()}
      />
    );
  }
}

WeaponPage.defaultProps = {
  items: []
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('WeaponPage')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

WeaponPage.propTypes = propTypes;

export default reduxForm({ form: 'WeaponPage' })(connect(mapStateToProps, mapDispatchToProps)(WeaponPage));
