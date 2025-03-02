import { Field } from 'react-final-form';
import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

export interface ArmorEffect {
	armor: number;
	'reduction %': number;
	effectiveHealth: number;
}

export interface Armor {
	baseHealth: number;
	damageReduction: string;
	effectiveHealth: number;
}

export default ({
	armorTable,
	armor,
}: {
	armorTable: ArmorEffect[];
	armor: Armor;
}) => (
	<div>
		<nav aria-label="breadcrumb">
			<ul>
				<li>
					<a href="#/home">Home</a>
				</li>
				<li>Armor</li>
			</ul>
		</nav>
		<div className="row">
			<h3>Armor</h3>
		</div>
		<div className="grid character-chart">
			<div>
				<ResponsiveContainer aspect={2}>
					<ComposedChart
						data={armorTable}
						margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
					>
						<Line
							dataKey="effectiveHealth"
							stroke="green"
							isAnimationActive={false}
							dot={false}
						/>
						<Line
							dataKey="reduction %"
							yAxisId="1"
							stroke="blue"
							isAnimationActive={false}
							dot={false}
						/>
						<XAxis dataKey="armor" />
						<YAxis />
						<YAxis yAxisId="1" orientation="right" />
						<Legend />
						<Tooltip isAnimationActive={false} />
						<CartesianGrid strokeDasharray="3 3" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
			<div>
				<div className="grid">
					<div>
						<label htmlFor="health">
							Health
							<Field
								name="health"
								component="input"
								type="number"
								min="0"
								max="25000"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="armor">
							Armor
							<Field
								name="armor"
								component="input"
								type="number"
								min="0"
								max="99999"
							/>
						</label>
					</div>
				</div>
				<div className="grid">
					<div>
						<label htmlFor="attackerLevel">
							Attacker Level
							<Field
								name="attackerLevel"
								component="input"
								type="number"
								min="1"
								max="63"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="targetLevel">
							Target Level
							<Field
								name="targetLevel"
								component="input"
								type="number"
								min="1"
								max="63"
							/>
						</label>
					</div>
				</div>
				<table>
					<tbody>
						<tr>
							<th>Damage Reduction</th>
							<td>{armor.damageReduction}%</td>
						</tr>
						<tr>
							<th>Effective Health</th>
							<td>{armor.effectiveHealth}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);
