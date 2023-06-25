import './App.css';
import About from './components/About';
// import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container my-3"/>
    <Navbar title="TextUtils" aboutText="About Us"/>
    {/* <TextForm heading="Enter Text Here"/> */}
    <div className="container my-4"/>
    <About/>
    </div>
  );
}

export default App;
