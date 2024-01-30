import 'animate.css';
import Auth from "../Auth/Auth";
import Add from "../Components/Add";
import Home from "../Components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="Home" element={<Home />} />
        <Route path="Add" element={<Add />} />
      </Routes>
    </div>
  )
}

export default App
