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

    const min = spell.min * 1.1;
    const max = spell.max * 1.1;

    const minHeal = min + bonusHeal;
    const maxHeal = max + bonusHeal;

    const averageHeal = (minHeal + maxHeal) / 2;
    const averageCritBonus = ((averageHeal / 2) * (totalCrit / 100));

    const totalAverage = (averageHeal + averageCritBonus);
    const manaEfficiency = totalAverage / (spell.mana * 0.9);
    const HPS = totalAverage / Math.max((spell.castTime - 0.5), 1.5);

    return {
      rank: spell.rank,
      rankDescription: `Rank ${ spell.rank }`,
      'Base': min.toFixed(0),
      'Healing': bonusHeal.toFixed(2),
      'Crit': averageCritBonus.toFixed(2),
      'ManaEfficiency': +(manaEfficiency.toFixed(2)),
      'HPS': HPS.toFixed(2),
      'PowerRating': ((HPS * manaEfficiency) / 2).toFixed(0),
      'Total': (min + bonusHeal + averageCritBonus).toFixed(2),
    };
  })
);
