import React, { useState } from "react";
import "../Css/App.css";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import MainPagesRouterSidebar from "../Component/Section/MainPagesRouterSidebar";
import TestApi from "../API/testApi";
import ExamApi from "../API/examApi";

function StudentApp() {

  const [searchTerm, setSearchTerm] = useState('');
  const [resultTest, setResultTest] = useState('');
  const [resultExam, setResultExam] = useState('');

  const getSearchTerm = (value) => {
    setSearchTerm(value);
  }

  const submitSearch = async (id) => {
    try {
      const resTest = await TestApi.searchTestByID(id);
      // const resExam = await ExamApi.searchExam(id);
      if (resTest) {
        setResultTest(resTest);
      }
      // if (resExam) {
      //   setResultExam(resExam);
      // }
    } catch (error) {
      console.log('error search: ', error);
    }
  }
  
  const clearState = () => {
    setSearchTerm(''); 
    setResultTest(''); 
    setResultExam('');
  }

  return (
    <div className="App" >
      <Navbar getInputValue={getSearchTerm} valueInput={searchTerm} clearText={clearState} onSubmitSearch={submitSearch} />
      <MainPagesRouterSidebar searchTerms={searchTerm} clear={clearState} resultTest={resultTest} resultExam={resultExam} />
      <Footer />
    </div >
  );
}

export default StudentApp;
