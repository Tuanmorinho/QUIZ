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
  const [blur, setBlur] = useState();

  const [disablCss, setDisableCss] = useState('');

  const getCssStatus = (cssStatus) => {
    setDisableCss(cssStatus);
  }

  const getSearchTerm = (value) => {
    setSearchTerm(value);
  }

  const submitSearch = async (examCode) => {
    try {
      const resTest = await TestApi.searchTestByExamCode(examCode);
      const resExam = await ExamApi.searchExam(examCode);

      if (resTest === 403 || resExam === 403) {
        localStorage.clear();
      }

      if (resTest && resExam) {
        setResultTest(resTest);
        setResultExam(resExam);
      }
      if (resTest && !resExam) {
        setResultTest(resTest);
        setResultExam('');
      }
      if (!resTest && resExam) {
        setResultTest('');
        setResultExam(resExam);
      }
    } catch (error) {
      console.log('error search: ', error);
    }
  }
  
  const clearState = () => {
    setSearchTerm(''); 
    setResultTest(''); 
    setResultExam('');
  }

  const blurSearch = (val) => {
    setBlur(val);
  } 

  return (
    <div className="App" >
      <Navbar getInputValue={getSearchTerm} valueInput={searchTerm} clearText={clearState} onSubmitSearch={submitSearch} disableForTesting={disablCss} setBlurSearch={blurSearch}/>
      <MainPagesRouterSidebar searchTerms={searchTerm} clear={clearState} resultTest={resultTest} resultExam={resultExam} setCssStatus={getCssStatus} blurSearch={blur}/>
      <Footer disableForTesting={disablCss} />
    </div >
  );
}

export default StudentApp;
