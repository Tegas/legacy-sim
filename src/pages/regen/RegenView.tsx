import { Field } from 'react-final-form';

export default ({
	regen,
}: {
	regen: { inCombat: string; outOfCombat: string };
}) => (
	<div>
		<div>
			<div>
				<nav aria-label="breadcrumb">
					<ul>
						<li>
							<a href="#/home">Home</a>
						</li>
						<li>Mana Regeneration</li>
					</ul>
				</nav>
			</div>
			<div>
				<h3>Regeneration</h3>
			</div>
			<div className="grid">
				<div>
					<label htmlFor="class">
						Class
						<Field name="class" component="select">
							<option value=""></option>
							<option value="druid">Druid</option>
							<option value="hunter">Hunter</option>
							<option value="mage">Mage</option>
							<option value="paladin">Paladin</option>
							<option value="priest">Priest</option>
							<option value="rogue">Rogue</option>
							<option value="shaman">Shaman</option>
							<option value="warlock">Warlock</option>
							<option value="warrior">Warrior</option>
						</Field>
					</label>
					<label htmlFor="spirit">
						Spirit
						<Field
							name="spirit"
							component="input"
							type="number"
							min="1"
							max="999"
						/>
					</label>
					<label htmlFor="combatManaRegen">
						Combat Mana Regen %
						<Field
							name="combatManaRegen"
							component="input"
							type="number"
							min="0"
							max="100"
						/>
					</label>
				</div>
				<div>
					<table>
						<tbody>
							<tr>
								<th>Mana Regen (MP5)</th>
								<td>{regen.outOfCombat}</td>
							</tr>
							<tr>
								<th>In Combat</th>
								<td>{regen.inCombat}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
);
