import { Form } from 'react-final-form';
import HealingContainer from './HealingContainer';
import * as modifiers from './modifiers';
import * as spells from './spells';

export default () => {
	const initialValues = {
		healing: 500,
		crit: 15,
		improvedHealingTouch: true,
		tranquilSpirit: true,
		giftOfNature: true,
	};

	return (
		<Form
			onSubmit={() => {}}
			initialValues={initialValues}
			render={({ values }) => (
				<HealingContainer
					values={values}
					spell={spells.healingTouch}
					modifiers={[
						modifiers.improvedHealingTouch,
						modifiers.giftOfNature,
						modifiers.tranquilSpirit,
						modifiers.moonglow,
						modifiers.naturesGrace,
						modifiers.amplifyMagic,
						modifiers.t3Druid4set,
						modifiers.t3Druid8set,
						modifiers.idolOfHealth,
						modifiers.idolOfLongevity,
					]}
				/>
			)}
		/>
	);
};
