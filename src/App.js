import './App.css';
import {Routes, Route, HashRouter, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import RusTrainer from './RusTrainer';
import EngTrainer from './EngTrainer';
import NavBar from './NavBar';
import packageJson from '../package.json';
let currentPath = "";
let link = packageJson.homepage;

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path = {currentPath + '/'} element={<Home />} />
        <Route path = {currentPath + '/rus'} element={<RusTrainer />} />
        <Route path = {currentPath + '/eng'} element={<EngTrainer />} />
      </Routes>
    </>
  );
}

export default App;
