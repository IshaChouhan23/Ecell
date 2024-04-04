import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';

import User from './Components/Global';
import ErrorPage from './Components/ErrorPage';
function App() {

  const [user, setUser] = useState({
    name: "", email: "", number: "", message: ""
  })
  useEffect(() => {
    const controls = new Animation();

    // Your code logic using controls

    return () => {
      // Cleanup logic if needed
    };
  }, []);



  return (
    <>

      <User.Provider value={[user, setUser]}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
       
          </Routes>
        </BrowserRouter>
        
      </User.Provider>

    </>
  );
}

export default App;
