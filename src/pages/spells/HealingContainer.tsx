import React from 'react';
import HealingView from './HealingView';
import { Field, Form, useForm } from 'react-final-form';
import { Spell, SpellRank } from './spells';
import { Character, Modifier } from './modifiers';

export interface SpellEffect {
	rank: number;
	rankDescription: string;
	mana: string;
	mps: string;
	castTime: number;
	base: string;
	hot: number;
	hotTick: number;
	bonus: string;
	bonusHot: number;
	crit: string;
	total: string;
	hps: string;
	efficiency: number;
	rating: number;
	coefficient: number;
}

const applyModifiers = (
	{
		spell,
		rank,
		formValues,
	}: { spell: Spell; rank: SpellRank; formValues: Record<string, string> },
	modifiers: Modifier[],
) => {
	const modifiedSpell = Object.assign({}, spell);
	const modifiedRank = Object.assign({}, rank);
	const modifiedCharacter = Object.assign({}, formValues);

	modifiers?.forEach((modifier) => {
		if (formValues[modifier.field]) {
			modifier.effect({
				spell,
				rank,
				modifiedSpell: modifiedSpell,
				modifiedRank: modifiedRank,
				character: modifiedCharacter,
			});
		}
	});

	return {
		modifiedSpell,
		modifiedRank,
		modifiedCharacter,
		spell,
		rank,
	};
};

const computeSpellEffect = ({
	modifiedSpell,
	modifiedRank,
	modifiedCharacter,
	spell,
	rank,
}: {
	modifiedSpell: Spell;
	modifiedRank: SpellRank;
	modifiedCharacter: Character;
	spell: Spell;
	rank: SpellRank;
}): SpellEffect => {
	const lowLevelPenalty = 1 - (20 - Math.min(rank.level, 20)) * 0.0375;
	const coefficient = (Math.min(rank.castTime, 3.5) / 3.5) * lowLevelPenalty;
	const directCoefficient = spell.coefficient
		? spell.coefficient * lowLevelPenalty
		: coefficient;
	const hotCoefficient = spell.hotCoefficient
		? spell.hotCoefficient * lowLevelPenalty
		: Math.min((modifiedRank.duration || 15) / 15, 1) * lowLevelPenalty;

	const totalCrit = Math.min(+modifiedCharacter.crit, 100);
	const mana = modifiedRank.mana;
	const castTime = Math.max(modifiedRank.castTime, 1.5);
	const numberOfTicks = modifiedRank.duration / 3.0;
	const modifiedNumberOfTicks = modifiedRank.duration / 3.0;
	const bonusHot = modifiedSpell.hot
		? hotCoefficient * +modifiedCharacter.healing
		: 0.0;
	const baseHotTick = Math.floor(modifiedRank.hotTick || 0);
	const bonusHotTick = Math.floor(bonusHot / numberOfTicks);
	const totalBaseHot = baseHotTick * modifiedNumberOfTicks;
	const totalBonusHot = bonusHotTick * modifiedNumberOfTicks;
	const totalHot = totalBaseHot + totalBonusHot || 0.0;
	const hotTick = totalHot / modifiedNumberOfTicks;
	const baseAverage = ((modifiedRank.min || 0) + (modifiedRank.max || 0)) / 2;
	const bonusHeal = modifiedSpell.direct
		? directCoefficient * +modifiedCharacter.healing
		: 0.0;
	const averageCritBonus =
		(baseAverage + bonusHeal) *
		modifiedSpell.critMultiplier *
		(totalCrit / 100);
	const totalDirect = baseAverage + bonusHeal + averageCritBonus;
	const totalAverage = totalDirect + totalHot;
	const manaEfficiency = totalAverage / mana;
	const healingPerSecond = totalAverage / castTime;
	const manaPerSecond = mana * (1 / castTime);
	const rating = (healingPerSecond / 10 + manaEfficiency * 10) * 20;

	return {
		rank: rank.rank,
		rankDescription: `Rank ${rank.rank}`,
		mana: mana.toFixed(2),
		mps: manaPerSecond.toFixed(2),
		castTime,
		base: baseAverage.toFixed(2),
		hot: totalBaseHot,
		hotTick,
		bonus: bonusHeal.toFixed(2),
		bonusHot: totalBonusHot,
		crit: averageCritBonus.toFixed(2),
		total: totalAverage.toFixed(2),
		hps: healingPerSecond.toFixed(2),
		efficiency: +manaEfficiency.toFixed(2),
		rating,
		coefficient,
	};
};

const generateHealingTable = (
	spell: Spell,
	modifiers: Modifier[],
	formValues = {},
) =>
	spell.ranks.map((rank) =>
		computeSpellEffect(
			applyModifiers(
				{
					spell: spell,
					rank,
					formValues,
				},
				modifiers,
			),
		),
	);

const HealingContainer = ({
	values,
	spell,
	modifiers,
}: {
	values: any;
	spell: Spell;
	modifiers: Modifier[];
}) => {
	const { modifiedSpell } = applyModifiers(
		{
			spell: spell,
			rank: spell.ranks[0],
			formValues: values || {},
		},
		modifiers,
	);

	const healingTable = generateHealingTable(spell, modifiers, values);

	return (
		<HealingView
			spell={modifiedSpell}
			healingTable={healingTable}
			modifiers={modifiers}
		>
			<h3>Character</h3>
			<div className="grid">
				<div>
					<label htmlFor="healing">
						Healing
						<Field
							name="healing"
							component="input"
							type="number"
							min="0"
							max="9999"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="crit">
						Crit %
						<Field
							name="crit"
							component="input"
							type="number"
							min="0"
							max="100"
						/>
					</label>
				</div>
			</div>
		</HealingView>
	);
};
export default HealingContainer;
