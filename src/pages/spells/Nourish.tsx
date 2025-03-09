import { Form } from 'react-final-form';
import HealingContainer from './HealingContainer';
import * as modifiers from './modifiers';
import * as spells from './spells';

export default () => {
	const initialValues = {
		healing: 500,
		crit: 25,
		improvedHealingTouch: true,
		improvedRegrowth: true,
		giftOfNature: true,
		tranquilSpirit: true,
		t25Druid4setSod: true,
		livingSeed: true,
		mushroomIdol: true,
	};

	return (
		<Form
			onSubmit={() => {}}
			initialValues={initialValues}
			render={({ values }) => (
				<HealingContainer
					values={values}
					spell={spells.nourish}
					modifiers={[
						modifiers.livingSeed,
						modifiers.t25Druid4setSod,
						modifiers.mushroomIdol,
						modifiers.improvedHealingTouch,
						modifiers.improvedRegrowth,
						modifiers.giftOfNature,
						modifiers.tranquilSpirit,
						modifiers.nourishHotBonus,
						modifiers.moonglow,
						modifiers.naturesGrace,
						modifiers.amplifyMagic,
					]}
				/>
			)}
		/>
	);
};
