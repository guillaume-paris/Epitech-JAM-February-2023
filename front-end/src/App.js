import './App.css';
import { Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/game" element={<><Navbar /><Game /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
      </Routes>
    </div>
  );
}

export default App;
