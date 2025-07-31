


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import Products from './Component/Products';
import About from './Component/About';
// import Clients from './Component/Clients';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';
import Herosection from './Component/Herosection.jsx';
import Boost from './Component/Boost.jsx';

function App() {
  return (
    <Router>
      <div className=''>
        <Navbar />
        
        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/clients" element={<Clients />} /> */}
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/Herosection" element={<Herosection />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Boost" element={<Boost />} />

        </Routes>
       
      </div>
    </Router>
  );
}

export default App;