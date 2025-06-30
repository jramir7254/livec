import './App.css'
import '@styles/index.css'

import UserProvider from '@context/UserProvider';
import AppRoutes from './routes/AppRoutes';

import Header from '@components/Header';

export default function App() {
	return (
		<>
			<UserProvider>
				<Header />
				<main>
					<AppRoutes />
				</main>
			</UserProvider>
		</>
	)
}

