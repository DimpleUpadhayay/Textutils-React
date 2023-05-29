
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//where dark mode is unabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(() =>{
        setAlert(null)
      },1500)
  }
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode Unabled","success");
        document.title ='TextUtils - Dark Mode';
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Unabled","success");
        document.title ='TextUtils - Light Mode';
      }
      
    }
  return (
    <>
    
    <Navbar title="TextUtils" aboutText="About TextUtils"  mode={mode} toggleMode={toggleMode}/> 
    <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
    <About/>
    <div className="container my-3">
       <Alert alert={alert}/>
      </div>
     {/* <Navbar/> */}
    {/* <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
       <Alert alert={alert}/>
      </div>
    <Routes>
        <Route  exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>} />
        <Route exact path="/about" element={<About/>}/>
    </Routes>
    </Router> */}
    </>
  );
}
export default App;
