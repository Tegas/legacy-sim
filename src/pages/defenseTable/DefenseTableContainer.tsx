import DefenseTableView from './defenseTableView';
import { Form } from 'react-final-form';

export interface PieChartSegment {
	name: string;
	value: number;
}

export interface DefenseTableStatistics {
	hitChance: string;
	critChance: string;
	dodgeChance: string;
	missChance: string;
	parryChance: string;
	blockChance: string;
	crushingChance: string;
	overHitCap: string;
	overCritCap: string;
	overall: string;
	pieChart: PieChartSegment[];
}

export interface DefenseTable {
	critChance: number;
	dodgeChance: number;
	missChance: number;
	parryChance: number;
	blockChance: number;
	crushingChance: number;
}

/**
 * Puts the number in a range of zero to one hundred.
 *
 * @param {number} number - The number.
 */
const normalize = (number: number): number => {
	return Math.max(Math.min(number, 100), 0);
};

const computeChances = (
	attackType: string = 'auto',
	formValues: any,
): DefenseTable => {
	const skill = +formValues.skill;
	const plusBlock = +formValues.plusBlock;
	const plusDodge = +formValues.plusDodge;
	const plusParry = +formValues.plusParry;
	// const playerLevel = +formValues.playerLevel;
	const mobLevel = +formValues.mobLevel;
	const hasParry = !!formValues.hasParry;
	const hasBlock = !!formValues.hasBlock;
	const mobSkill = mobLevel * 5;
	const baseDefenseSkill = Math.min(300, skill);

	const skillDifference = skill - mobSkill;
	const baseSkillDifference = mobSkill - baseDefenseSkill;

	const missChance = 5 + skillDifference * 0.04;
	const dodgeChance = 5 + plusDodge + skillDifference * 0.04;
	const parryChance = hasParry ? 5 + plusParry + skillDifference * 0.04 : 0;
	const blockChance = hasBlock ? 5 + plusBlock + skillDifference * 0.04 : 0;
	const critChance =
		attackType === 'special' ? 0 : 5 - skillDifference * 0.04;
	const crushingChance =
		baseSkillDifference >= 15 && attackType === 'auto'
			? baseSkillDifference * 2 - 15
			: 0;

	return {
		critChance,
		dodgeChance,
		missChance,
		parryChance,
		blockChance,
		crushingChance,
	};
};

const computeDefenseTable = ({
	critChance,
	dodgeChance,
	missChance,
	parryChance,
	blockChance,
	crushingChance,
}: DefenseTable): DefenseTableStatistics => {
	let remaining = 100.0;
	const miss = normalize(missChance);
	remaining -= miss;

	const dodge = Math.min(normalize(dodgeChance), remaining);
	remaining -= dodge;

	const parry = Math.min(normalize(parryChance), remaining);
	remaining -= parry;

	const block = Math.min(normalize(blockChance), remaining);
	remaining -= block;

	const crushing = Math.min(normalize(crushingChance), remaining);
	remaining -= crushing;

	const crit = Math.min(normalize(critChance), remaining);
	remaining -= crit;

	const hit = remaining;

	const overHitCap = normalize(missChance * -1);
	const overCritCap = normalize(critChance - crit);
	const overall = +hit + 2.0 * crit + crushing * 1.5 + block * 0.9;

	return {
		hitChance: hit.toFixed(2),
		critChance: crit.toFixed(2),
		dodgeChance: dodge.toFixed(2),
		missChance: miss.toFixed(2),
		parryChance: parry.toFixed(2),
		blockChance: block.toFixed(2),
		crushingChance: crushing.toFixed(2),
		overHitCap: overHitCap.toFixed(2),
		overCritCap: overCritCap.toFixed(2),
		overall: overall.toFixed(2),
		pieChart: [
			{ name: 'Miss', value: miss },
			{ name: 'Dodge', value: dodge },
			{ name: 'Parry', value: parry },
			{ name: 'Block', value: block },
			{ name: 'Crushing', value: crushing },
			{ name: 'Crit', value: crit },
			{ name: 'Hit', value: hit },
		],
	};
};

export default () => {
	const initialValues = {
		skill: 300,
		plusBlock: 0,
		plusDodge: 0,
		plusParry: 0,
		hasParry: true,
		hasBlock: true,
		playerLevel: 60,
		mobLevel: 63,
	};

	return (
		<Form
			initialValues={initialValues}
			onSubmit={() => {}}
			render={({ values }) => (
				<DefenseTableView
					auto={computeDefenseTable(computeChances('auto', values))}
					special={computeDefenseTable(
						computeChances('special', values),
					)}
				/>
			)}
		/>
	);
};
