import React from 'react';

import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";

import './App.css';
import Login from './components/Auth/Login';

import StudentDashboard from './components/Dashboard/StudentDashboard';



function App() {
  return (
    <Router>
    <div className="App">
     
     
     
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path='/StudentDashboard' element={<StudentDashboard />}/>
      </Routes>
    


       </div>
       </Router>
  );
}

export default App;
