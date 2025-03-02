import RegenView from './RegenView';
import { Form } from 'react-final-form';

const computeRegen = (formValues: any) => {
	const intellect = +formValues.intellect;
	const spirit = +formValues.spirit;
	const combatManaRegen = +formValues.combatManaRegen;

	// math
	//Formulas for mana regeneration based on spirit:
	let formula = undefined;
	switch (formValues.class) {
		case 'priest':
		case 'mage':
			formula = (_intellect: number, spirit: number) => 13 + spirit / 4;
			break;
		case 'druid':
		case 'shaman':
		case 'paladin':
		case 'hunter':
			formula = (_intellect: number, spirit: number) => 15 + spirit / 5;
			break;
		case 'warlock':
			formula = (_intellect: number, spirit: number) => 8 + spirit / 4;
			break;
		default:
			formula = (_intellect: number, _spirit: number) => 0;
			break;
	}

	const manaPerTick = formula(intellect, spirit);
	const outOfCombat = manaPerTick * 2.5;

	return {
		outOfCombat: outOfCombat.toFixed(2),
		inCombat: (outOfCombat * (combatManaRegen / 100)).toFixed(2),
	};
};

export default () => {
	const initialValues = {
		class: 'druid',
		intellect: 200,
		spirit: 200,
		combatManaRegen: 15,
	};

	return (
		<Form
			initialValues={initialValues}
			onSubmit={() => {}}
			render={({ values }) => <RegenView regen={computeRegen(values)} />}
		/>
	);
};
