import { Route, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import SpellContainer from './pages/spells/SpellContainer';
import HealingTouch from './pages/spells/HealingTouch';
import Regrowth from './pages/spells/Regrowth';
import Rejuvenation from './pages/spells/Rejuvenation';
import GreaterHeal from './pages/spells/GreaterHeal';
import FlashHeal from './pages/spells/FlashHeal';
import Renew from './pages/spells/Renew';
import FlashOfLight from './pages/spells/FlashOfLight';
import HolyLight from './pages/spells/HolyLight';
import Heal from './pages/spells/Heal';
import HolyNova from './pages/spells/HolyNova';
import PrayerOfHealing from './pages/spells/PrayerOfHealing';
import LesserHealingWave from './pages/spells/LesserHealingWave';
import HealingWave from './pages/spells/HealingWave';
import ChainHeal from './pages/spells/ChainHeal';
import ArmorContainer from './pages/armor/ArmorContainer';
import AttackTableContainer from './pages/attackTable/AttackTableContainer';
import DefenseTableContainer from './pages/defenseTable/DefenseTableContainer';
import ResistancesContainer from './pages/resistances/ResistancesContainer';
import RegenContainer from './pages/regen/RegenContainer';
export default () => {
	const [location] = useHashLocation();

	return (
		<Switch location={location}>
			<Route path="/resistances" component={ResistancesContainer} />
			<Route path="/armor" component={ArmorContainer} />
			<Route path="/regen" component={RegenContainer} />
			<Route path="/attack" component={AttackTableContainer} />
			<Route path="/defense" component={DefenseTableContainer} />
			<Route path="/rejuvenation" component={Rejuvenation} />
			<Route path="/greater-heal" component={GreaterHeal} />
			<Route path="/flash-heal" component={FlashHeal} />
			<Route path="/renew" component={Renew} />
			<Route path="/flash-of-light" component={FlashOfLight} />
			<Route path="/holy-light" component={HolyLight} />
			<Route path="/heal" component={Heal} />
			<Route path="/holy-nova" component={HolyNova} />
			<Route path="/prayer-of-healing" component={PrayerOfHealing} />
			<Route path="/lesser-healing-wave" component={LesserHealingWave} />
			<Route path="/healing-wave" component={HealingWave} />
			<Route path="/chain-heal" component={ChainHeal} />
			<Route path="/regrowth" component={Regrowth} />
			<Route path="/" component={HomePage} />
			<Route path="/home" component={HomePage} />
			<Route path="/spell" component={SpellContainer} />
			<Route path="/healing-touch" component={HealingTouch} />
			<Route component={NotFoundPage} />
		</Switch>
	);
};
