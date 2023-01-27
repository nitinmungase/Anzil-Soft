import './App.css';
import { Route, Routes } from "react-router-dom";
import Assignment1 from './Components/Assignment1';
import Assignment2 from './Components/Assignment2';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">      
        <Routes>
        <Route exact path="/assignment1" element={<Assignment1/>} />
          <Route exact path="/assignment2" element={<Assignment2/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>      
    </div>  
  );
}
export default App;