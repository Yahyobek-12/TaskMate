import 'animate.css';
import Add from "../Components/Add";
import Home from "../Components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Add" element={<Add />} />
      </Routes>
    </div>
  )
}

export default App
