import { PieChart, Pie, Cell } from 'recharts';
import './defenseTable.css';
import { DefenseTableStatistics } from './DefenseTableContainer';
import { Field } from 'react-final-form';

const COLORS = [
	'OrangeRed',
	'purple',
	'MediumBlue',
	'teal',
	'olive',
	'black',
	'gray',
];

export default (defenseTables: {
	auto: DefenseTableStatistics;
	special: DefenseTableStatistics;
}) => (
	<div>
		<div>
			<div className="grid">
				<nav aria-label="breadcrumb">
					<ul>
						<li>
							<a href="#/home">Home</a>
						</li>
						<li>Defense Table</li>
					</ul>
				</nav>
			</div>
			<div className="grid">
				<h3>Defense Table</h3>
				<h2>Work In Progress!</h2>
			</div>
			<div className="grid">
				<div>
					<div className="grid">
						<div>
							<label htmlFor="playerLevel">
								Player Level
								<Field
									name="playerLevel"
									component="input"
									type="number"
									min="1"
									max="60"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="mobLevel">
								Mob Level
								<Field
									name="mobLevel"
									component="input"
									type="number"
									min="1"
									max="63"
								/>
							</label>
						</div>
					</div>
					<div className="grid">
						<div>
							<label htmlFor="skill">
								Defense
								<Field
									name="skill"
									component="input"
									type="number"
									min="0"
									max="999"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="plusBlock">
								+Block
								<Field
									name="plusBlock"
									component="input"
									type="number"
									min="0"
									max="999"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="plusDodge">
								+Dodge
								<Field
									name="plusDodge"
									component="input"
									type="number"
									min="0"
									max="999"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="plusParry">
								+Parry
								<Field
									name="plusParry"
									component="input"
									type="number"
									min="0"
									max="999"
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="grid">
				<div>
					<div className="grid">
						<div>
							<table className="combat-table">
								<tbody>
									<tr>
										<th></th>
										<th>
											<PieChart width={100} height={100}>
												<Pie
													nameKey="name"
													dataKey="value"
													isAnimationActive={false}
													data={
														defenseTables.auto
															.pieChart
													}
													outerRadius={50}
												>
													{defenseTables.auto.pieChart.map(
														(entry, index) => (
															<Cell
																fill={
																	COLORS[
																		index %
																			COLORS.length
																	]
																}
															/>
														),
													)}
												</Pie>
											</PieChart>
										</th>
										<th>
											<PieChart width={100} height={100}>
												<Pie
													nameKey="name"
													dataKey="value"
													isAnimationActive={false}
													data={
														defenseTables.special
															.pieChart
													}
													outerRadius={50}
												>
													{defenseTables.special.pieChart.map(
														(entry, index) => (
															<Cell
																fill={
																	COLORS[
																		index %
																			COLORS.length
																	]
																}
															/>
														),
													)}
												</Pie>
											</PieChart>
										</th>
									</tr>
									<tr className="">
										<th></th>
										<td>Auto Attack</td>
										<td>Special Attack</td>
									</tr>
									<tr className="combat-table_miss">
										<th>Miss</th>
										<td>
											{defenseTables.auto.missChance}%
										</td>
										<td>
											{defenseTables.special.missChance}%
										</td>
									</tr>
									<tr className="combat-table_dodge">
										<th>Dodge</th>
										<td>
											{defenseTables.auto.dodgeChance}%
										</td>
										<td>
											{defenseTables.special.dodgeChance}%
										</td>
									</tr>
									<tr className="combat-table_parry">
										<th>
											<Field
												name="hasParry"
												id="hasParry"
												component="input"
												type="checkbox"
											/>{' '}
											Parry
										</th>
										<td>
											{defenseTables.auto.parryChance}%
										</td>
										<td>
											{defenseTables.special.parryChance}%
										</td>
									</tr>
									<tr className="combat-table_block">
										<th>
											<Field
												name="hasBlock"
												id="hasBlock"
												component="input"
												type="checkbox"
											/>{' '}
											Block
										</th>
										<td>
											{defenseTables.auto.blockChance}%
										</td>
										<td>
											{defenseTables.special.blockChance}%
										</td>
									</tr>
									<tr className="combat-table_glancing">
										<th>Crushing</th>
										<td>
											{defenseTables.auto.crushingChance}%{' '}
											{+defenseTables.auto
												.crushingChance > 0 && (
												<span className="combat-table_note">
													(150% damage)
												</span>
											)}
										</td>
										<td>
											{defenseTables.auto.crushingChance}%{' '}
											{+defenseTables.auto
												.crushingChance > 0 && (
												<span className="combat-table_note">
													(150% damage)
												</span>
											)}
										</td>
									</tr>
									<tr className="combat-table_crit">
										<th>Crit</th>
										<td>
											{defenseTables.auto.critChance}%{' '}
											{+defenseTables.auto.critChance >
												0 && (
												<span className="combat-table_note">
													(200% damage)
												</span>
											)}
										</td>
										<td>
											{defenseTables.special.critChance}%
										</td>
									</tr>
									<tr className="combat-table_hit">
										<th>Hit</th>
										<td>{defenseTables.auto.hitChance}%</td>
										<td>
											{defenseTables.special.hitChance}%
										</td>
									</tr>
									<tr>
										<th>Overall*</th>
										<th>
											{defenseTables.auto.overall}% damage
										</th>
										<th>
											{defenseTables.special.overall}%
											damage
										</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<small>
				<hr />
				<p>
					* Assumes a block reduces damage by 10% which is a very
					rough guess at boss damage reduction.
				</p>
				<p>sources</p>
				<ul>
					<li>
						<a href="https://vanilla-wow.fandom.com/wiki/Parry">
							https://vanilla-wow.fandom.com/wiki/Parry
						</a>
					</li>
					<li>
						<a href="https://vanilla-wow.fandom.com/wiki/Block">
							https://vanilla-wow.fandom.com/wiki/Block
						</a>
					</li>
					<li>
						<a href="https://vanilla-wow.fandom.com/wiki/Dodge">
							https://vanilla-wow.fandom.com/wiki/Dodge
						</a>
					</li>
					<li>
						<a href="https://vanilla-wow.fandom.com/wiki/Miss">
							https://vanilla-wow.fandom.com/wiki/Miss
						</a>
					</li>
				</ul>
			</small>
		</div>
	</div>
);
