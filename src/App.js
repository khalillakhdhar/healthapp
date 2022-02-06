import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Temperture from './components/Temperature'
import Imc from './components/Imc';
function App() {
  return (
    <div className='centered'>
      
    <Router>
    <Menu></Menu>

      <Routes>
        <Route path='/temp' element={<Temperture/>} ></Route>
        <Route path='/imc' element={<Imc/>} ></Route>


      </Routes>



    </Router>
    </div>
  );
}

export default App;
