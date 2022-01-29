import React from "react"
import "../Css/App.css"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import MainPagesRouterSidebar from "../Component/Section/MainPagesRouterSidebar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPagesRouterSidebar />
      <Footer />
    </div>
  );
}

export default App;
