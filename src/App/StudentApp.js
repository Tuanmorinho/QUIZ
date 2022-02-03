import React, { useState } from "react"
import "../Css/App.css"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import MainPagesRouterSidebar from "../Component/Section/MainPagesRouterSidebar"

function StudentApp() {

  const [searchTerm, setSearchTerm] = useState('');

  const getSearchTerm = (value) => {
    setSearchTerm(value);
  }

  return (
    <div className="App" >
      <Navbar getInputValue={getSearchTerm} valueInput={searchTerm} clearText={setSearchTerm} />
      <MainPagesRouterSidebar searchTerms={searchTerm} clear={setSearchTerm} />
      <Footer />
    </div >
  );
}

export default StudentApp;
