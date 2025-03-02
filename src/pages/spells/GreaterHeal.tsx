import { Form } from 'react-final-form';
import HealingContainer from './HealingContainer';
import * as modifiers from './modifiers';
import * as spells from './spells';

export default () => {
	const initialValues = {
		healing: 500,
		crit: 15,
	};

	return (
		<Form
			onSubmit={() => {}}
			initialValues={initialValues}
			render={({ values }) => (
				<HealingContainer
					values={values}
					spell={spells.greaterHeal}
					modifiers={[
						modifiers.divineFury,
						modifiers.improvedHealing,
						modifiers.spiritualHealing,
						modifiers.t2Priest8set,
						modifiers.amplifyMagic,
					]}
				/>
			)}
		/>
	);
};
