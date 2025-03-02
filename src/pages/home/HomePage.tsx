import React from 'react';

const HomePage = () => {
	return (
		<div>
			<div className="row columns">
				<ul>
					<li>
						<a href="#/spell">Spells</a>
					</li>
					<li>
						<a href="#/armor">Armor</a>
					</li>
					<li>
						<a href="#/resistances">Resistances</a>
					</li>
					<li>
						<a href="#/regen">Mana Regeneration</a>
					</li>
					<li>
						<a href="#/attack">Attack Table</a>
					</li>
					<li>
						<a href="#/defense">Defense Table</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
