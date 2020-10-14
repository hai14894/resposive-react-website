import React from "react";
import "./App.css";
import NavBar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Sidebar />
    </Router>
  );
}

export default App;
