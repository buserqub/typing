import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import RuTrainer from './RuTrainer';
import EngTrainer from './EngTrainer';
import RuTextAdd from './RuTextAdd';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ru' element={<RuTrainer />} />
        <Route path='/eng' element={<EngTrainer />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/ru/text_add' element={<RuTextAdd />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
