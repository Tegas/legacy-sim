import { getHealingCoefficient } from './util';

const RANKS = [
  { 'rank': 1, 'mana': 25, 'level': 1, 'castTime': 1.5, 'min': 37, 'max': 51 },
  { 'rank': 2, 'mana': 55, 'level': 8, 'castTime': 2, 'min': 88, 'max': 112 },
  { 'rank': 3, 'mana': 110, 'level': 14, 'castTime': 2.5, 'min': 195, 'max': 243 },
  { 'rank': 4, 'mana': 185, 'level': 20, 'castTime': 3, 'min': 363, 'max': 445 },
  { 'rank': 5, 'mana': 270, 'level': 26, 'castTime': 3.5, 'min': 572, 'max': 694 },
  { 'rank': 6, 'mana': 335, 'level': 32, 'castTime': 3.5, 'min': 742, 'max': 894 },
  { 'rank': 7, 'mana': 405, 'level': 38, 'castTime': 3.5, 'min': 936, 'max': 1120 },
  { 'rank': 8, 'mana': 495, 'level': 44, 'castTime': 3.5, 'min': 1199, 'max': 1427 },
  { 'rank': 9, 'mana': 600, 'level': 50, 'castTime': 3.5, 'min': 1516, 'max': 1796 },
  { 'rank': 10, 'mana': 720, 'level': 56, 'castTime': 3.5, 'min': 1890, 'max': 2230 },
];

/**
 * Computes the spell details.
 */
export const getSpellDetails = (rank, character, target) => {
  const spell = RANKS[rank - 1];
  const coefficient = getHealingCoefficient(spell.level, spell.castTime);
  const critFromInt = ((+character.intellect || 0) / 60.0);
  const totalCrit = Math.min(critFromInt + (+character.crit || 0), 100);
  const manaReduction = (character.moonGlow ? 0.9 : 1.0) * (character.giftOfNature ? 0.9 : 1.0);
  const mana = spell.mana * manaReduction;
  const castTimeReduction = (character.naturesGrace ? (0.5 * totalCrit) : 0.0);
  const castTime = Math.max((spell.castTime - castTimeReduction), 1.5);
  const bonusHeal = (coefficient * ((+character.healing || 0) + (target.amplifyMagic ? 150 : 0)));
  const minHeal = (spell.min * (spell.giftOfNature ? 1.1 : 1.0)) + bonusHeal;
  const maxHeal = (spell.max * (spell.giftOfNature ? 1.1 : 1.0)) + bonusHeal;
  const averageHeal = (minHeal + maxHeal) / 2;
  const averageCritBonus = ((averageHeal / 2) * (totalCrit / 100));
  const totalAverage = (averageHeal + averageCritBonus);
  const manaEfficiency = totalAverage / mana;
  const HPS = totalAverage / castTime;
  const rating = ((HPS * manaEfficiency) / 2);

  return {
    rank: spell.rank,
    mana,
    castTime,
    baseHeal: spell.min.toFixed(0),
    bonusHeal: bonusHeal.toFixed(2),
    critBonus: averageCritBonus.toFixed(2),
    hps: HPS.toFixed(2),
    efficiency: manaEfficiency.toFixed(0),
    rating: rating.toFixed(0),
  };
};
