import React from 'react';
import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { Spell } from './spells';
import { Field } from 'react-final-form';
import { SpellEffect } from './HealingContainer';
import { Modifier } from './modifiers';

const healingView = ({
	healingTable,
	children,
	spell,
	modifiers = [],
}: {
	healingTable: SpellEffect[];
	children: React.ReactNode;
	spell: Spell;
	modifiers: Modifier[];
}) => (
	<div>
		<nav aria-label="breadcrumb">
			<ul>
				<li>
					<a href="#/home">Home</a>
				</li>
				<li>
					<a href="#/spell">Spells</a>
				</li>
				<li>{spell.name}</li>
			</ul>
		</nav>
		<section>
			<h3>{spell.name}</h3>
			<p>{spell.description}</p>
		</section>
		<section className="grid character-chart">
			<div>
				<ResponsiveContainer aspect={2}>
					<ComposedChart
						data={healingTable}
						margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
					>
						{spell.direct && (
							<Bar
								type="monotone"
								dataKey="base"
								stackId="1"
								stroke="#8884d8"
								fill="#8884d8"
								isAnimationActive={false}
							/>
						)}
						{spell.direct && (
							<Bar
								type="monotone"
								dataKey="bonus"
								stackId="1"
								stroke="#82ca9d"
								fill="#82ca9d"
								isAnimationActive={false}
							/>
						)}
						{spell.direct && (
							<Bar
								type="monotone"
								dataKey="crit"
								stackId="1"
								stroke="#ffc658"
								fill="#ffc658"
								isAnimationActive={false}
							/>
						)}
						{spell.hot && (
							<Bar
								type="monotone"
								dataKey="hot"
								stackId="1"
								stroke="#ccaaee"
								fill="#ccaaee"
								isAnimationActive={false}
							/>
						)}
						{spell.hot && (
							<Bar
								type="monotone"
								dataKey="bonusHot"
								stackId="1"
								stroke="#ccddff"
								fill="#ccddff"
								isAnimationActive={false}
							/>
						)}
						<Line
							dataKey="hps"
							stroke="green"
							isAnimationActive={false}
						/>
						<Line
							dataKey="efficiency"
							yAxisId="1"
							stroke="blue"
							isAnimationActive={false}
						/>
						<XAxis dataKey="rankDescription" />
						<YAxis />
						<YAxis yAxisId="1" orientation="right" />
						<Legend />
						<Tooltip isAnimationActive={false} />
						<CartesianGrid strokeDasharray="3 3" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
			<div>
				{children}
				{modifiers.map((modifier) => (
					<div className="row" key={modifier.name}>
						<div className="large-12 columns">
							<Field
								name={modifier.field}
								id={modifier.field}
								component="input"
								type="checkbox"
							/>
							<label htmlFor={modifier.field}>
								<span data-tooltip={modifier.description}>
									{modifier.name}
								</span>
							</label>
						</div>
					</div>
				))}
			</div>
		</section>
		<section>
			<hr />
			<table className="striped">
				<thead>
					<tr>
						<th> Rank </th>
						<th style={{ width: '8%' }} className="text-right">
							<div>Mana</div>
						</th>
						<th style={{ width: '8%' }} className="text-right">
							<div>Cast Time</div>
						</th>
						<th style={{ width: '14%' }} className="text-right">
							<div>Base Heal</div>
						</th>
						<th style={{ width: '14%' }} className="text-right">
							<div>Bonus Heal</div>
						</th>
						<th style={{ width: '14%' }} className="text-right">
							<div>Crit Bonus</div>
						</th>
						<th style={{ width: '14%' }} className="text-right">
							<div>Total</div>
						</th>
						{spell.hot && (
							<th style={{ width: '8%' }} className="text-right">
								<div>Tick</div>
							</th>
						)}
						<th style={{ width: '12%' }} className="text-right">
							<div>HPS</div>
						</th>
						<th style={{ width: '12%' }} className="text-right">
							<div>Efficiency</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{healingTable.map((rank: SpellEffect) => (
						<tr key={rank.rank}>
							<td>{rank.rank}</td>
							<td className="text-right">{rank.mana}</td>
							<td className="text-right">{rank.castTime}</td>
							<td className="text-right">
								{spell.direct && <span>{rank.base}</span>}
								{spell.hot && (
									<span>
										{spell.direct && <span>+</span>}
										<span>{rank.hot}</span>
									</span>
								)}
							</td>
							<td className="text-right">
								{spell.direct && <span>{rank.bonus}</span>}
								{spell.hot && (
									<span>
										{spell.direct && <span>+</span>}
										<span>{rank.bonusHot}</span>
									</span>
								)}
							</td>
							<td className="text-right">{rank.crit}</td>
							<td className="text-right">{rank.total}</td>
							{spell.hot && (
								<td className="text-right">{rank.hotTick}</td>
							)}
							<td className="text-right">{rank.hps}</td>
							<td className="text-right">{rank.efficiency}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
		<section>
			<small>
				<dl>
					<dt>Base Heal</dt>
					<dd>
						This is the average base heal of the spell including
						talents but without any bonuses from spellpower.
					</dd>
					<dt>Bonus Heal</dt>
					<dd>
						The additional healing provided by bonus healing gear.
						(Note that bonus healing is not affected by talents)
					</dd>
					<dt>Crit Bonus</dt>
					<dd>This is the average bonus provided by crit. </dd>
					<dt>HPS</dt>
					<dd>Max healing per second.</dd>
					<dt>Efficiency</dt>
					<dd>The amount of healing provided by 1 point of mana.</dd>
				</dl>
			</small>
		</section>
	</div>
);

export default healingView;
