import { Form } from 'react-final-form';
import ArmorView, { Armor, ArmorEffect } from './ArmorView';

const computeArmorTable = (formValues: any): ArmorEffect[] => {
	const health = +formValues.health;
	const attackerLevel = +formValues.attackerLevel;
	const targetLevel = +formValues.targetLevel;
	const armorTable: ArmorEffect[] = [];
	for (let armor = 0; armor <= 17500; armor += 100) {
		const reduction = computeDamageReduction(
			armor,
			attackerLevel,
			targetLevel,
		);
		armorTable.push({
			armor,
			'reduction %': +(reduction * 100).toFixed(2),
			effectiveHealth: Math.round(health / (1 - reduction)),
		});
	}
	return armorTable;
};

const computeDamageReduction = (
	armor: number,
	attackerLevel: number,
	targetLevel: number,
) => {
	return Math.min(armor / (armor + 400 + 85 * attackerLevel), 0.75);
};

const computeArmor = (formValues: any): Armor => {
	const armor = +formValues.armor;
	const baseHealth = +formValues.health;
	const attackerLevel = +formValues.attackerLevel;
	const targetLevel = +formValues.targetLevel;

	const damageReduction = computeDamageReduction(
		armor,
		attackerLevel,
		targetLevel,
	);
	const effectiveHealth = baseHealth / (1 - damageReduction);

	return {
		baseHealth: Math.round(baseHealth),
		damageReduction: (damageReduction * 100).toFixed(2),
		effectiveHealth: Math.round(effectiveHealth) || 0,
	};
};

const ArmorContainer = () => {
	const initialValues = {
		health: 7500,
		resistance: 10,
		armor: 10000,
		attackerLevel: 63,
		targetLevel: 60,
	};

	return (
		<Form
			onSubmit={() => {}}
			initialValues={initialValues}
			render={({ values }) => (
				<ArmorView
					armorTable={computeArmorTable(values)}
					armor={computeArmor(values)}
				/>
			)}
		/>
	);
};

export default ArmorContainer;
