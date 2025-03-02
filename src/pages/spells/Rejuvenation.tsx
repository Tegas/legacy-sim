import { Form } from 'react-final-form';
import HealingContainer from './HealingContainer';
import * as modifiers from './modifiers';
import * as spells from './spells';

export default () => {
	const initialValues = {
		healing: 500,
		crit: 15,
		improvedRejuvenation: true,
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
					spell={spells.rejuvenation}
					modifiers={[
						modifiers.improvedRejuvenation,
						modifiers.giftOfNature,
						modifiers.moonglow,
						modifiers.amplifyMagic,
						modifiers.t2Druid8set,
						modifiers.t3Druid4set,
					]}
				/>
			)}
		/>
	);
};
