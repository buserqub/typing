import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import RusTrainer from './RusTrainer';
import EngTrainer from './EngTrainer';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rus' element={<RusTrainer />} />
        <Route path='/eng' element={<EngTrainer />} />
      </Routes>
    </>
  );
}

export default App;
