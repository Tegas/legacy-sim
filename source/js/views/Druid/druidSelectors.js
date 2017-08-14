import _ from 'lodash';
import { getHealingCoefficient } from './spells';

export const getFormValues = (store) => (
  store.form.druidForm || {}
);


export const getHealingTable = (formValues = {}, spellTable) => (
  _.map(spellTable.ranks, spell => {
    const coefficient = getHealingCoefficient(spell.level, spell.castTime);
    const critChance = 0;

    const values = formValues.values || {};

    const minHeal = spell.min + (coefficient * (+values.healing || 0));
    const maxHeal = spell.max + (coefficient * (+values.healing || 0));
    const averageHeal = (minHeal + maxHeal) / 2;
    const averageHealWithCrit = averageHeal + ((averageHeal / 2) * ((+values.crit || 0) / 100));

    console.log("spell", coefficient, minHeal, maxHeal, averageHeal);

    return {
      rank: spell.rank,
      rankDescription: `Rank ${spell.rank}`,
      averageHeal: averageHealWithCrit,
      minHeal,
      maxHeal,
    };
  })
);
