/* eslint-disable no-param-reassign */

export const improvedRegrowth = {
  field: 'improvedRegrowth',
  name: 'Improved Regrowth',
  description: 'improved regrowth',
  effect: ({ character }) => { character.crit *= 1.5; },
};

export const giftOfNature = {
  field: 'giftOfNature',
  name: 'Gift of Nature',
  description: 'gift of nature',
  effect: ({ rank }) => { rank.min *= 1.1; rank.max *= 1.1; rank.hot *= 1.1; },
};

export const naturesGrace = {
  field: 'naturesGrace',
  name: 'Natures Grace',
  description: 'natures grace',
  effect: ({ rank, character }) => { rank.castTime -= (0.5 * (character.crit / 100)); },
};

export const moonglow = {
  field: 'moonglow',
  name: 'Moonglow',
  description: 'moonglow',
  effect: ({ rank }) => { rank.mana *= 0.91; },
};

export const tranquilSpirit = {
  field: 'tranquilSpirit',
  name: 'Tranquil Spirit',
  description: 'tranquilSpirit',
  effect: ({ rank }) => { rank.mana *= 0.91; },
};

export const improvedRejuvenation = {
  field: 'improvedRejuvenation',
  name: 'Improved Rejuvenation',
  description: 'improvedRejuvenation',
  effect: ({ rank }) => { rank.hot *= 1.15; },
};

export const improvedHealingTouch = {
  field: 'improvedHealingTouch',
  name: 'Improved Healing Touch',
  description: 'improved healing touch',
  effect: ({ rank }) => { rank.castTime -= 0.5; },
};

export const healingLight = {
  field: 'healingLight',
  name: 'Healing Light',
  description: 'Healing Light',
  effect: ({ rank }) => { rank.min *= 1.12; rank.max *= 1.12; },
};

export const illumination = {
  field: 'illumination',
  name: 'Illumination',
  description: 'Illumination',
  effect: ({ rank, character }) => { rank.mana -= ((character.crit / 100) * rank.mana); },
};

export const mentalAgility = {
  field: 'mentalAgility',
  name: 'Mental Agility',
  description: 'Mental Agility',
  effect: ({ rank }) => { rank.mana *= 0.9; },
};

export const improvedRenew = {
  field: 'improvedRenew',
  name: 'Improved Renew',
  description: 'Improved Renew',
  effect: ({ rank }) => { rank.hot *= 1.15; },
};

export const divineFury = {
  field: 'divineFury',
  name: 'Divine Fury',
  description: 'Divine Fury',
  effect: ({ rank }) => { rank.castTime -= 0.5; },
};

export const improvedHealing = {
  field: 'improvedHealing',
  name: 'Improved Healing',
  description: 'Improved Healing',
  effect: ({ rank }) => { rank.mana *= 0.85; },
};

export const spiritualHealing = {
  field: 'spiritualHealing',
  name: 'Spiritual Healing',
  description: 'Spiritual Healing',
  effect: ({ rank }) => { rank.min *= 1.1; rank.max *= 1.1; rank.hot *= 1.1; },
};

export const improvedPrayerOfHealing = {
  field: 'improvedPrayerOfHealing',
  name: 'Improved Prayer Of Healing',
  description: 'Improved Prayer Of Healing',
  effect: ({ rank }) => { rank.mana *= 0.8; },
};

