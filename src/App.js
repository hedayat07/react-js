import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [alert,setAlert]= useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <div className="App">
      <div className="container my-3"/>
    <Navbar title="TextUtils" aboutText="About Us"/>
    <Alert alert={alert} />
    <TextForm showAlert={showAlert} heading="Enter Text Here"/>
    <div className="container my-4"/>
    <About/>
    </div>
  );
}

export default App;
