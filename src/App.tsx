import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import InputPage from './pages/InputPage';
import ButtonPage from './pages/ButtonPage';
import TogglePage from './pages/TogglePage';
import AlertPage from './pages/AlertPage';

function App() {
  	return (
		<BrowserRouter>
			<div className="container">
				<Navigation />
				<main className="content">
					<Routes>
            			<Route path="/input" element={<InputPage />} />
						<Route path="/button" element={<ButtonPage />} />
						<Route path="/toggle" element={<TogglePage />} />
						<Route path="/alert" element={<AlertPage />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
  	);
}

export default App
