import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  // let clearBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const toggleMode = (cls) => {
    // clearBodyClasses()
    // console.log(cls)
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#020e3c';
      showAlert("Dark Mode has been Enabled", "success");

      // setInterval(()=>{
      //   document.title='Dark Mode Enabled';
      // },1000);
      // setInterval(()=>{
      //   document.title='You can switch back to light mode';
      // },1500);

    } else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light Mode has been Enabled", "success");
      // document.title = 'Light Mode Enabled';
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtility' about='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route exact path='/about' element={<About mode={mode}/>}>
        </Route>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Upper Case to lower case, Lower case to upper case, Remove extra spaces" mode={mode}/>}>
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
