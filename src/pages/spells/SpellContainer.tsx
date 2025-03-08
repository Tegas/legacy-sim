import React from 'react';

export default () => {
	return (
		<div>
			<nav aria-label="breadcrumb">
				<ul>
					<li>
						<a href="#/home">Home</a>
					</li>
					<li>Spells</li>
				</ul>
			</nav>
			<div className="grid">
				<div>
					<h2>Druid</h2>
					<p>
						<a href="#/healing-touch">Healing Touch</a>
					</p>
					<p>
						<a href="#/rejuvenation">Rejuvenation</a>
					</p>
					<p>
						<a href="#/regrowth">Regrowth</a>
					</p>
					<p>
						<a href="#/nourish">Nourish (SOD)</a>
					</p>
				</div>
				<div>
					<h2>Paladin</h2>
					<p>
						<a href="#/flash-of-light">Flash Of Light</a>
					</p>
					<p>
						<a href="#/holy-light">Holy Light</a>
					</p>
				</div>
				<div>
					<h2>Priest</h2>
					<p>
						<a href="#/heal">Heal</a>
					</p>
					<p>
						<a href="#/greater-heal">Greater Heal</a>
					</p>
					<p>
						<a href="#/flash-heal">Flash Heal</a>
					</p>
					<p>
						<a href="#/renew">Renew</a>
					</p>
					<p>
						<a href="#/holy-nova">Holy Nova</a>
					</p>
					<p>
						<a href="#/prayer-of-healing">Prayer Of Healing</a>
					</p>
				</div>
				<div>
					<h2>Shaman</h2>
					<p>
						<a href="#/lesser-healing-wave">Lesser Healing Wave</a>
					</p>
					<p>
						<a href="#/healing-wave">Healing Wave</a>
					</p>
					<p>
						<a href="#/chain-heal">Chain Heal</a>
					</p>
				</div>
			</div>
		</div>
	);
};
