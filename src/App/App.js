import React from "react"
import { Route, BrowserRouter as Router } from 'react-router-dom'
import "../Css/App.css"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import Section from "../Component/Section/Section"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
