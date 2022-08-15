import React from 'react';
import "normalize-css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Dashboard/Dashboard'
import PrivateRoute from './util/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute/>}>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
