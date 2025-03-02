import AttackTableView from './AttackTableView';
import { Form } from 'react-final-form';

export interface PieChartSegment {
	name: string;
	value: number;
}

export interface AttackTableStatistics {
	hitChance: string;
	critChance: string;
	dodgeChance: string;
	missChance: string;
	parryChance: string;
	blockChance: string;
	glancingChance: string;
	glancingPenalty: string;
	overHitCap: string;
	overCritCap: string;
	overall: string;
	pieChart: PieChartSegment[];
}

export interface AttackTable {
	critChance: number;
	dodgeChance: number;
	missChance: number;
	parryChance: number;
	blockChance: number;
	glancingChance: number;
	glancingPenalty: number;
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
): AttackTable => {
	// https://github.com/magey/classic-warrior/wiki/Attack-table
	// https://web.archive.org/web/20070222175829/http://forums.wow-europe.com/thread.html?topicId=166546791&pageNo=1&sid=1

	const skill = +formValues.skill;
	const hit = +formValues.hit;
	const crit = +formValues.crit;
	const attackerLevel = +formValues.attackerLevel;
	const targetLevel = +formValues.targetLevel;
	const hasParry = !!formValues.hasParry;
	const hasBlock = !!formValues.hasBlock;
	const defense = targetLevel * 5;
	const baseWeaponSkill = Math.min(300, skill);

	let missChance = 0.0;
	if (defense - skill > 10) {
		missChance += 5 + (targetLevel * 5 - skill) * 0.2;
	} else {
		missChance += 5 + (targetLevel * 5 - skill) * 0.1;
	}
	// low level bonus
	missChance *= Math.min(10, targetLevel) / 10; // Note, unsure if this affects dual weild... but you can't duel wield < lvl 10

	// New science says DualWieldMissChance = NormalMissChance * 0.8 + 20%
	if (attackType === 'dual') {
		missChance = missChance * 0.8 + 20;
	}

	// Skill difference penalty
	if (defense - skill > 10 && hit >= 1) {
		missChance -= hit - 1;
	} else {
		missChance -= hit;
	}

	const bossParryBonus = targetLevel === 63 ? 12.5 : 5.0; // ? no idea if this is real but it's close to the test numbers

	const dodgeChance = Math.max(5 + (targetLevel * 5 - skill) * 0.1, 0);
	const critChance =
		crit +
		(baseWeaponSkill - defense) *
			(baseWeaponSkill - defense < 0 ? 0.2 : 0.4) -
		1.8;
	const parryChance = hasParry
		? Math.max((defense - skill) * 0.1 + bossParryBonus, 0)
		: 0.0;
	const blockChance = hasBlock
		? Math.min(5.0, 5 + (targetLevel * 5 - skill) * 0.1)
		: 0.0;
	const glancingChance =
		attackType === 'special'
			? 0.0
			: 10 + (targetLevel * 5 - Math.min(attackerLevel * 5, skill)) * 2.0;
	const lowend = Math.min(1.3 - 0.05 * (defense - skill), 0.91);
	const highend = Math.max(
		Math.min(1.2 - 0.03 * (defense - skill), 0.99),
		0.2,
	);
	const glancingPenalty =
		attackType === 'special' ? 0.0 : (1 - (lowend + highend) / 2) * 100;

	return {
		critChance,
		dodgeChance,
		missChance,
		parryChance,
		blockChance,
		glancingChance,
		glancingPenalty,
	};
};

const computeAttackTable = ({
	critChance,
	dodgeChance,
	missChance,
	parryChance,
	blockChance,
	glancingChance,
	glancingPenalty,
}: AttackTable): AttackTableStatistics => {
	let remaining = 100.0;
	const miss = normalize(missChance);
	remaining -= miss;

	const dodge = Math.min(normalize(dodgeChance), remaining);
	remaining -= dodge;

	const parry = Math.min(normalize(parryChance), remaining);
	remaining -= parry;

	const block = Math.min(normalize(blockChance), remaining);
	remaining -= block;

	const glancing = Math.min(normalize(glancingChance), remaining);
	remaining -= glancing;

	const crit = Math.min(normalize(critChance), remaining);
	remaining -= crit;

	const hit = remaining;

	const overHitCap = normalize(missChance * -1);
	const overCritCap = normalize(critChance - crit);
	const overall = +hit + 2.0 * crit + glancing * (1 - glancingPenalty / 100);

	return {
		hitChance: hit.toFixed(2),
		critChance: crit.toFixed(2),
		dodgeChance: dodge.toFixed(2),
		missChance: miss.toFixed(2),
		parryChance: parry.toFixed(2),
		blockChance: block.toFixed(2),
		glancingChance: glancing.toFixed(2),
		glancingPenalty: glancingPenalty.toFixed(0),
		overHitCap: overHitCap.toFixed(2),
		overCritCap: overCritCap.toFixed(2),
		overall: overall.toFixed(2),
		pieChart: [
			{ name: 'Miss', value: miss },
			{ name: 'Dodge', value: dodge },
			{ name: 'Parry', value: parry },
			{ name: 'Block', value: block },
			{ name: 'Glancing', value: glancing },
			{ name: 'Crit', value: crit },
			{ name: 'Hit', value: hit },
		],
	};
};

export default () => {
	const initialValues = {
		skill: 300,
		hit: 5,
		crit: 10,
		attackerLevel: 60,
		targetLevel: 63,
		hasParry: true,
		hasBlock: false,
	};

	return (
		<Form
			initialValues={initialValues}
			onSubmit={() => {}}
			render={({ values }) => (
				<AttackTableView
					auto={computeAttackTable(computeChances('auto', values))}
					special={computeAttackTable(
						computeChances('special', values),
					)}
					dual={computeAttackTable(computeChances('dual', values))}
				/>
			)}
		/>
	);
};
