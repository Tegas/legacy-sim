import { Form } from 'react-final-form';
import HealingContainer from './HealingContainer';
import * as modifiers from './modifiers';
import * as spells from './spells';

export default () => {
	const initialValues = {
		healing: 500,
		crit: 15,
		improvedRegrowth: true,
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
					spell={spells.regrowth}
					modifiers={[
						modifiers.improvedRegrowth,
						modifiers.giftOfNature,
						modifiers.moonglow,
						modifiers.naturesGrace,
						modifiers.amplifyMagic,
						modifiers.t3Druid4set,
					]}
				/>
			)}
		/>
	);
};
