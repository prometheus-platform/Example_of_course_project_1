import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';

export function Layout() {
	return (
		<>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
