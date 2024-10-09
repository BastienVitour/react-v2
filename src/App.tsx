import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SelectPage from "./pages/SelectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/select" element={<SelectPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
