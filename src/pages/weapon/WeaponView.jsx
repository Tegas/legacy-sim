import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import StatValueView from './StatValueView';
import ItemListView from './ItemListView';

const WeaponView = ({
	items,
	handleTabClick,
	tabs,
	selectedTab,
	columns,
}) => (
		<div>
			<div className='row columns'>
				<nav aria-label='You are here:'>
					<ul className='breadcrumbs'>
						<li><NavLink to="/">Home</NavLink></li>
						<li><span className='show-for-sr'>Current:</span> Weapons</li>
					</ul>
				</nav>
			</div>
			<div className='row'>
				<h3>Weapons</h3>
			</div>
			<StatValueView />
			<div className="row">
				<div className="columns">
					<ul className="tabs" data-active-collapse="true" data-tabs id="collapsing-tabs">
					{tabs.map(tab => (
    					<li onClick={handleTabClick} className={`tabs-title ${tab === selectedTab ? 'is-active' : ''}`}><a aria-selected={tab === selectedTab}>{tab}</a></li>
					))}
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="columns">
					<ItemListView items={items} columns={columns} />
				</div>
			</div>
		</div>
	);

WeaponView.propTypes = {
	items: PropTypes.array,
};

export default WeaponView;
