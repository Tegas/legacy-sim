import _ from 'lodash';
import { getFormValues } from 'redux-form';
import items from '../../assets/data/items';


export const getItems = (state, slot, formValues = {}) => {
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