import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import InputPage from './pages/InputPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  	return (
		<BrowserRouter>
			<div className="container">
				<Navigation />
				<main className="content">
					<Routes>
            <Route path="/input" element={<InputPage />} />
						<Route path="/button" element={<ButtonPage />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
  	);
}

export default App
