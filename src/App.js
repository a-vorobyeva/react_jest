import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Dose from "./components/Dose";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dose' element={<Dose />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
