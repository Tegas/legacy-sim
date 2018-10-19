/* eslint-disable no-param-reassign */

export const improvedRegrowth = {
  field: 'improvedRegrowth',
  name: 'Improved Regrowth',
  description: 'Increases the critical effect chance of your Regrowth spell by 50%.',
  effect: ({ character }) => { character.crit *= 1.5; },
};

export const giftOfNature = {
  field: 'giftOfNature',
  name: 'Gift of Nature',
  description: 'Increases the effect of all healing spells by 10%.',
  effect: ({ rank }) => { rank.min *= 1.1; rank.max *= 1.1; rank.hot *= 1.1; },
};

export const naturesGrace = {
  field: 'naturesGrace',
  name: 'Nature\'s Grace',
  description: 'All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.',
  effect: ({ rank, character }) => { rank.castTime -= (0.5 * (character.crit / 100)); },
};

export const moonglow = {
  field: 'moonglow',
  name: 'Moonglow',
  description: 'Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%.',
  effect: ({ rank }) => { rank.mana *= 0.91; },
};

export const tranquilSpirit = {
  field: 'tranquilSpirit',
  name: 'Tranquil Spirit',
  description: 'Reduces the mana cost of your Healing Touch and Tranquility spells by 10%.',
  effect: ({ rank }) => { rank.mana *= 0.91; },
};

export const improvedRejuvenation = {
  field: 'improvedRejuvenation',
  name: 'Improved Rejuvenation',
  description: 'Increases the effect of your Rejuvenation spell by 15%.',
  effect: ({ rank }) => { rank.hot *= 1.15; },
};

export const improvedHealingTouch = {
  field: 'improvedHealingTouch',
  name: 'Improved Healing Touch',
  description: 'Reduces the cast time of your Healing Touch spell by 0.5 sec.',
  effect: ({ rank }) => { rank.castTime -= 0.5; },
};

export const t2Druid8set = {
  field: 't2Druid8set',
  name: 'T2 8 Set Bonus',
  description: 'Increases the duration of your Rejuvenation spell by 3 sec.',
  effect: ({ rank }) => { rank.duration = 15; rank.hot *= 5/4 },
};

export const t3Druid4set = {
  field: 't3Druid4set',
  name: 'T3 4 Set Bonus',
  description: 'Reduces the mana cost of your Healing Touch, Regrowth, Rejuvenation, and Tranquility spells by 3%',
  effect: ({ rank, character }) => { rank.mana *= 0.97; },
};

export const t3Druid8set = {
  field: 't3Druid8set',
  name: 'T3 8 Set Bonus',
  description: 'On Healing Touch critical hits, you regain 30% of the mana cost of the spell',
  effect: ({ rank, character }) => { rank.mana -= ((character.crit / 100) * rank.mana * 0.3); },
};

export const idolOfHealth = {
  field: 'idolOfHealth',
  name: 'Idol of Health',
  description: 'Reduces the casting time of your Healing Touch spell by 0.15 sec.',
  effect: ({ rank }) => { rank.castTime -= 0.15; },
};

export const idolOfLongevity = {
  field: 'idolOfLongevity',
  name: 'Idol of Longevity',
  description: 'Gain up to 25 mana each time you cast Healing touch',
  effect: ({ rank, character, spell }) => {
    const lowLevelPenalty = (1 - ((20 - Math.min(rank.level, 20)) * 0.0375));
    const coefficient = (Math.min(rank.castTime, 3.5) / 3.5) * lowLevelPenalty;
    const directCoefficient = spell.coefficient ? (spell.coefficient * lowLevelPenalty) : coefficient;
    rank.mana = Math.max(rank.mana - (25 * directCoefficient), 1);
  },
};

export const healingLight = {
  field: 'healingLight',
  name: 'Healing Light',
  description: 'Increases the amount healed by your Holy Light and Flash of Light spells by 12%.',
  effect: ({ rank }) => { rank.min *= 1.12; rank.max *= 1.12; },
};

export const illumination = {
  field: 'illumination',
  name: 'Illumination',
  description: 'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to the base cost of the spell.',
  effect: ({ rank, character }) => { rank.mana -= ((character.crit / 100) * rank.mana); },
};

export const mentalAgility = {
  field: 'mentalAgility',
  name: 'Mental Agility',
  description: 'Reduces the mana cost of your instant cast spells by 10%.',
  effect: ({ rank }) => { rank.mana *= 0.9; },
};

export const improvedRenew = {
  field: 'improvedRenew',
  name: 'Improved Renew',
  description: 'Increases the amount healed by your Renew spell by 15%.',
  effect: ({ rank }) => { rank.hot *= 1.15; },
};

export const divineFury = {
  field: 'divineFury',
  name: 'Divine Fury',
  description: 'Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.5 sec.',
  effect: ({ rank }) => { rank.castTime -= 0.5; },
};

export const improvedHealing = {
  field: 'improvedHealing',
  name: 'Improved Healing',
  description: 'Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by 15%.',
  effect: ({ rank }) => { rank.mana *= 0.85; },
};

export const spiritualHealing = {
  field: 'spiritualHealing',
  name: 'Spiritual Healing',
  description: 'Increases the amount healed by your healing spells by 10%.',
  effect: ({ rank }) => { rank.min *= 1.1; rank.max *= 1.1; rank.hot *= 1.1; },
};

export const improvedPrayerOfHealing = {
  field: 'improvedPrayerOfHealing',
  name: 'Improved Prayer Of Healing',
  description: 'Reduces the Mana cost of your Prayer of Healing spell by 20%.',
  effect: ({ rank }) => { rank.mana *= 0.8; },
};

export const t2Priest8set = {
  field: 't2Priest8set',
  name: 'T2 8 Set Bonus',
  description: 'Your Greater Heals now have a heal over time component equivalent to a rank 5 renew.',
  effect: ({ rank, spell }) => { rank.hot = 245; rank.duration = 15; spell.hot = true; },
};

export const improvedHealingWave = {
  field: 'improvedHealingWave',
  name: 'Improved Healing Wave',
  description: 'Reduces the casting time of your Healing Wave spell by 0.5 sec.',
  effect: ({ rank }) => { rank.castTime -= 0.5; },
};

export const tidalFocus = {
  field: 'tidalFocus',
  name: 'Tidal Focus',
  description: 'Reduces the Mana cost of your healing spells by 5%.',
  effect: ({ rank }) => { rank.mana *= 0.95; },
};

export const healingWay = {
  field: 'healingWay',
  name: 'Healing Way',
  description: 'Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.',
  effect: ({ rank }) => { rank.min *= 1.06; rank.max *= 1.06; rank.hot *= 1.06; },
};

export const purification = {
  field: 'purification',
  name: 'Purification',
  description: 'Increases the effectiveness of your healing spells by 10%.',
  effect: ({ rank }) => { rank.min *= 1.1; rank.max *= 1.1; rank.hot *= 1.1; },
};

export const improvedShadowBolt = {
  field: 'improvedShadowBolt',
  name: 'Improved Shadow Bolt',
  description: 'Your Shadow Bolt critical strikes increase Shadow Damage dealt to the target by 20% until 4 non-periodic damage sources are applied.',
  effect: ({ rank, character }) => {
    const bonus = ((((100 - character.crit) / 100) ** 4) * 0.2) + 1;
    rank.min *= bonus;
    rank.max *= bonus;
    rank.hot *= bonus;
    character.damage *= bonus;
  },
};

export const cataclysm = {
  field: 'cataclysm',
  name: 'Cataclysm',
  description: 'Reduce the mana cost of your Destruction spells by 5%.',
  effect: ({ rank }) => {
    rank.mana *= 0.95;
  },
};

export const bane = {
  field: 'bane',
  name: 'Bane',
  description: 'Reduce the casting time of your Shadow Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2.0 sec.',
  effect: ({ rank }) => {
    rank.castTime -= 0.5;
  },
};

export const shadowMastery = {
  field: 'shadowMastery',
  name: 'Shadow Mastery',
  description: 'Increases the damage dealt or life drained by your shadow spells by 10%.',
  effect: ({ rank, character }) => {
    rank.min *= 1.1;
    rank.max *= 1.1;
    rank.dot *= 1.1;
    character.damage *= 1.1;
  },
};

export const demonicSacrifice = {
  field: 'demonicSacrifice',
  name: 'Demonic Sacrifice',
  description: 'Increases your shadow damage by 15%.',
  effect: ({ rank, character }) => {
    rank.min *= 1.15;
    rank.max *= 1.15;
    rank.dot *= 1.15;
    character.damage *= 1.15;
  },
};

export const ruin = {
  field: 'ruin',
  name: 'Ruin',
  description: 'Increases the critical strike damage bonus of your destruction spells by 100%.',
  effect: ({ spell }) => {
    spell.critMultiplier = 1.0;
  },
};


