import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
// import InputField from './components/Input/Input';
// import FormGroup from './components/Input/FormGroup';
import InputPage from './pages/InputPage';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/input" element={<InputPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
