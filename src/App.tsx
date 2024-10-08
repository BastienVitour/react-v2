import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';

function App() {

  	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" />
			</Routes>
		</BrowserRouter>
  	);
}

export default App
