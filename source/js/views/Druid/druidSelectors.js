import _ from 'lodash';
import { getHealingCoefficient } from './spells';

export const getFormValues = (store) => (
  store.form.druidForm || {}
);


export const getHealingTable = (formValues = {}, spellTable) => (
  _.map(spellTable.ranks, spell => {
    const coefficient = getHealingCoefficient(spell.level, spell.castTime);

    const values = formValues.values || {};

    const critFromInt = ((+values.intellect || 0) / 60.0);

    const totalCrit = Math.min(critFromInt + (+values.crit || 0), 100);

    const bonusHeal = (coefficient * (+values.healing || 0));
    let minHeal = spell.min + bonusHeal;
    let maxHeal = spell.max + bonusHeal;
    const minCritBonus = ((minHeal / 2) * (totalCrit / 100));
    const maxCritBonus = ((maxHeal / 2) * (totalCrit / 100));

    const averageHeal = (minHeal + maxHeal) / 2;
    const averageCritBonus = ((averageHeal / 2) * (totalCrit / 100));

    const manaEfficiency = (averageHeal + averageCritBonus) / spell.mana;

    return {
      rank: spell.rank,
      rankDescription: `Rank ${ spell.rank }`,
      // 'Min': minHeal,
      // 'Average': averageHeal,
      // 'Max': maxHeal,
      'Base': spell.min,
      'Healing': bonusHeal,
      'Crit': averageCritBonus,
      'ManaEfficiency': manaEfficiency,
    };
  })
);
