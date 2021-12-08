import React from "react"
import "../Css/App.css"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import SectionRouter from "../Component/Section/SectionRouter"

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionRouter />
      <Footer />
    </div>
  );
}

export default App;
