// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Visualisations from './Visualisations';
import Methodology from './Methodology';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>

          <Route path="/about" element={<About/>}></Route>

          <Route path="/methodology" element={<Methodology/>}></Route>

          <Route path='/Visualisations' element={<Visualisations/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;