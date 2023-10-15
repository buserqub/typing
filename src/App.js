import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import RusTrainer from './RusTrainer';
import EngTrainer from './EngTrainer';
import NavBar from './NavBar';
import Credits from './Credits';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rus' element={<RusTrainer />} />
        <Route path='/eng' element={<EngTrainer />} />
      </Routes>
    </BrowserRouter>
    <Credits />
    </>
  );
}

export default App;
