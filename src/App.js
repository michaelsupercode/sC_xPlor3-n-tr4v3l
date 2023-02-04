// Import Modules etc.
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import Pages
import Home from './pages/home.js';
import Destinations from './pages/destinations';
import About from './pages/about.js';
import Partner from './pages/partner.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/partner" element={<Partner/>} />
        </Routes>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
