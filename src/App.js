// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Visualisations from './Visualisations';
import Methodology from './Methodology';
import Model1 from './Model1';
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

          <Route path='/visualisations' element={<Visualisations/>}></Route>

          <Route path='/model1' element={<Model1/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;