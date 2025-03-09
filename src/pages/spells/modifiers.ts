/* eslint-disable no-param-reassign */

import { Spell, SpellRank } from './spells';

export interface Character {
	/** Amount of healing power. */
	healing?: number;
	/** Crit percentage (0.00 - 100.00) */
	crit?: number;
}

export interface Modifier {
	field: string;
	name: string;
	description: string;
	effect: (props: {
		modifiedRank: SpellRank;
		character: Character;
		rank: SpellRank;
		spell: Spell;
		modifiedSpell: Spell;
	}) => void;
}

export const amplifyMagic: Modifier = {
	field: 'amplifyMagic',
	name: 'Amplify Magic (with +50% talent)',
	description:
		'Amplifies magic used against the targeted party member, increasing damage taken from spells by up to 75(112) and healing spells by up to 150(225)',
	effect: ({ character }) => {
		character.healing = +character.healing + 225;
	},
};

export const livingSeed: Modifier = {
	field: 'livingSeed',
	name: 'Living Seed Rune',
	description:
		'When you critically heal your target with any non-periodic healing spell you plant a Living Seed on the target for 50% of the amount healed. The Living Seed will bloom the next time the target takes damage or receives non-periodic healing. Lasts 15 sec.',
	effect: ({ modifiedSpell }) => {
		modifiedSpell.critMultiplier += 0.75;
	},
};

export const t25Druid4setSod: Modifier = {
	field: 't25Druid4setSod',
	name: 'T2.5 4 Set (SOD)',
	description:
		'Your critical heals with Healing Touch, Regrowth, and Nourish instantly heal the target for another 50% of the healing they dealt.',
	effect: ({ modifiedSpell, character }) => {
		console.log('crit', character.crit);
		modifiedSpell.critMultiplier +=
			0.75 + ((0.0 || character.crit) / 100) * 0.375;
	},
};

export const mushroomIdol: Modifier = {
	field: 'mushroomIdol',
	name: 'Enchanted Mushroom',
	description:
		' Increases the amount healed by your Lifebloom, Nourish, and Wild Growth spells by 3%.',
	effect: ({ modifiedSpell }) => {
		modifiedSpell.healingMultiplier *= 1.03;
	},
};

export const nourishHotBonus: Modifier = {
	field: 'nourishHotBonus',
	name: 'Nourish HOT Bonus',
	description:
		'Increases healing by 20% when target is affected by your hot.',
	effect: ({ modifiedSpell }) => {
		modifiedSpell.healingMultiplier *= 1.2;
	},
};

export const improvedRegrowth: Modifier = {
	field: 'improvedRegrowth',
	name: 'Improved Regrowth',
	description:
		'Increases the critical effect chance of your Regrowth spell by 50%.',
	effect: ({ character }) => {
		character.crit = Math.min(100, +character.crit + 50);
	},
};

export const giftOfNature: Modifier = {
	field: 'giftOfNature',
	name: 'Gift of Nature',
	description: 'Increases the effect of all healing spells by 10%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.min += rank.min * 0.1;
		modifiedRank.max += rank.max * 0.1;
		modifiedRank.hotTick += rank.hotTick * 0.1;
	},
};

export const naturesGrace: Modifier = {
	field: 'naturesGrace',
	name: "Nature's Grace",
	description:
		'All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.',
	effect: ({ modifiedRank, character }) => {
		modifiedRank.castTime -= 0.5 * (character.crit / 100);
	},
};

export const moonglow: Modifier = {
	field: 'moonglow',
	name: 'Moonglow',
	description:
		'Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.09;
	},
};

export const tranquilSpirit: Modifier = {
	field: 'tranquilSpirit',
	name: 'Tranquil Spirit',
	description:
		'Reduces the mana cost of your Healing Touch and Tranquility spells by 10%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.1;
	},
};

export const improvedRejuvenation: Modifier = {
	field: 'improvedRejuvenation',
	name: 'Improved Rejuvenation',
	description: 'Increases the effect of your Rejuvenation spell by 15%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.hotTick += rank.hotTick * 0.15;
	},
};

export const improvedHealingTouch: Modifier = {
	field: 'improvedHealingTouch',
	name: 'Improved Healing Touch',
	description:
		'Reduces the cast time of your Healing Touch spell by 0.5 sec.',
	effect: ({ modifiedRank }) => {
		modifiedRank.castTime -= 0.5;
	},
};

export const t2Druid8set: Modifier = {
	field: 't2Druid8set',
	name: 'T2 8 Set Bonus',
	description: 'Increases the duration of your Rejuvenation spell by 3 sec.',
	effect: ({ modifiedRank }) => {
		modifiedRank.duration = 15;
	},
};

export const t3Druid4set: Modifier = {
	field: 't3Druid4set',
	name: 'T3 4 Set Bonus',
	description:
		'Reduces the mana cost of your Healing Touch, Regrowth, Rejuvenation, and Tranquility spells by 3%',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.03;
	},
};

export const t3Druid8set: Modifier = {
	field: 't3Druid8set',
	name: 'T3 8 Set Bonus',
	description:
		'On Healing Touch critical hits, you regain 30% of the mana cost of the spell',
	effect: ({ modifiedRank, character, rank }) => {
		modifiedRank.mana -= (character.crit / 100) * rank.mana * 0.3;
	},
};

export const idolOfHealth: Modifier = {
	field: 'idolOfHealth',
	name: 'Idol of Health',
	description:
		'Reduces the casting time of your Healing Touch spell by 0.15 sec.',
	effect: ({ modifiedRank }) => {
		modifiedRank.castTime -= 0.15;
	},
};

export const idolOfLongevity: Modifier = {
	field: 'idolOfLongevity',
	name: 'Idol of Longevity',
	description: 'Gain up to 25 mana each time you cast Healing touch',
	effect: ({ modifiedRank, modifiedSpell }) => {
		const lowLevelPenalty =
			1 - (20 - Math.min(modifiedRank.level, 20)) * 0.0375;
		const coefficient =
			(Math.min(modifiedRank.castTime, 3.5) / 3.5) * lowLevelPenalty;
		const directCoefficient = modifiedSpell.coefficient
			? modifiedSpell.coefficient * lowLevelPenalty
			: coefficient;
		modifiedRank.mana = Math.max(
			modifiedRank.mana - 25 * directCoefficient,
			1,
		);
	},
};

export const healingLight: Modifier = {
	field: 'healingLight',
	name: 'Healing Light',
	description:
		'Increases the amount healed by your Holy Light and Flash of Light spells by 12%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.min += rank.min * 0.12;
		modifiedRank.max += rank.max * 0.12;
	},
};

export const illumination: Modifier = {
	field: 'illumination',
	name: 'Illumination',
	description:
		'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to the base cost of the spell.',
	effect: ({ modifiedRank, rank, character }) => {
		modifiedRank.mana -= (character.crit / 100) * rank.mana;
	},
};

export const blessingOfLight: Modifier = {
	field: 'blessingOfLight',
	name: 'Blessing of Light',
	description:
		'Increases the effects of Holy Light spells used on the target by up to 400 and the effect Flash of Light spells used on the target by up to 115.',
	effect: ({ modifiedRank, rank, spell }) => {
		if (spell.name === 'Flash Of Light') {
			modifiedRank.min += 115;
			modifiedRank.max += 115;
		} else if (spell.name === 'Holy Light') {
			const holyLightCoefficients = [
				0.0, 0.2, 0.4, 0.7, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
			];
			modifiedRank.min += holyLightCoefficients[rank.rank] * 400;
			modifiedRank.max += holyLightCoefficients[rank.rank] * 400;
		}
	},
};

export const mentalAgility: Modifier = {
	field: 'mentalAgility',
	name: 'Mental Agility',
	description: 'Reduces the mana cost of your instant cast spells by 10%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.1;
	},
};

export const improvedRenew: Modifier = {
	field: 'improvedRenew',
	name: 'Improved Renew',
	description: 'Increases the amount healed by your Renew spell by 15%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.hotTick += rank.hotTick * 0.15;
	},
};

export const divineFury: Modifier = {
	field: 'divineFury',
	name: 'Divine Fury',
	description:
		'Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.5 sec.',
	effect: ({ modifiedRank }) => {
		modifiedRank.castTime -= 0.5;
	},
};

export const improvedHealing: Modifier = {
	field: 'improvedHealing',
	name: 'Improved Healing',
	description:
		'Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by 15%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.15;
	},
};

export const spiritualHealing: Modifier = {
	field: 'spiritualHealing',
	name: 'Spiritual Healing',
	description: 'Increases the amount healed by your healing spells by 10%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.min += rank.min * 0.1;
		modifiedRank.max += rank.max * 0.1;
		modifiedRank.hotTick += rank.hotTick * 0.1;
	},
};

export const improvedPrayerOfHealing: Modifier = {
	field: 'improvedPrayerOfHealing',
	name: 'Improved Prayer Of Healing',
	description:
		'Reduces the Mana cost of your Prayer of Healing spell by 20%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.2;
	},
};

export const t2Priest8set: Modifier = {
	field: 't2Priest8set',
	name: 'T2 8 Set Bonus',
	description:
		'Your Greater Heals now have a heal over time component equivalent to a rank 5 renew.',
	effect: ({ modifiedRank, modifiedSpell }) => {
		modifiedRank.hotTick = 315 / 5;
		modifiedRank.duration = 15;
		modifiedSpell.hot = true;
	},
};

export const improvedHealingWave: Modifier = {
	field: 'improvedHealingWave',
	name: 'Improved Healing Wave',
	description:
		'Reduces the casting time of your Healing Wave spell by 0.5 sec.',
	effect: ({ modifiedRank }) => {
		modifiedRank.castTime -= 0.5;
	},
};

export const tidalFocus: Modifier = {
	field: 'tidalFocus',
	name: 'Tidal Focus',
	description: 'Reduces the Mana cost of your healing spells by 5%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.mana -= rank.mana * 0.05;
	},
};

export const healingWay: Modifier = {
	field: 'healingWay',
	name: 'Healing Way',
	description:
		'Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.min += rank.min * 0.06;
		modifiedRank.max += rank.max * 0.06;
		modifiedRank.hotTick += rank.hotTick * 0.06;
	},
};

export const purification: Modifier = {
	field: 'purification',
	name: 'Purification',
	description: 'Increases the effectiveness of your healing spells by 10%.',
	effect: ({ modifiedRank, rank }) => {
		modifiedRank.min += rank.min * 0.1;
		modifiedRank.max += rank.max * 0.1;
		modifiedRank.hotTick += rank.hotTick * 0.1;
	},
};
