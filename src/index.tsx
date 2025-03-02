import { createRoot } from 'react-dom/client';
import Header from './header/Header';
import Routes from './Routes';
import Footer from './footer/Footer';
import '@picocss/pico';
import './style.css';

function App() {
	return (
		<main className="container">
			<Header />
			<Routes />
			<Footer />
		</main>
	);
}

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
createRoot(appContainer).render(<App />);
