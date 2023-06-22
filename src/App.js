import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar title="TextUtils" about="About Us"/>
     <TextForm heading="Enter Text Here"/>
    </div>
  );
}

export default App;
