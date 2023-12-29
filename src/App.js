import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import MapContainer from './components/MapData'

const App = () => {
  return (
    < >
    
      <Router>
        
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />

          {/* Routes to the Map componernt */}
          <Route path='/MapData' element={<MapContainer />} />
          
        </Routes>
        
      </Router>

    </>

  );

};

export default App;
