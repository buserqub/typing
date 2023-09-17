import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import RusTrainer from './RusTrainer';
import EngTrainer from './EngTrainer';
import NavBar from './NavBar';
currentPath = 'typing';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path = {currentPath + '/'} element={<Home />} />
        <Route path = {currentPath + '/rus'} element={<RusTrainer />} />
        <Route path = {currentPath + '/eng'} element={<EngTrainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
