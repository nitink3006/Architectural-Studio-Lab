import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Career from "./components/Career/career";
import HRBP from "./components/Career/HRBP";
import JobApplication from "./components/Career/JobApplication";

function App() {
  return (
    <Router>
      {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route exact path='/about' element={<About />}> </Route>
        <Route path='/careers' element={<Career />}> </Route>
        <Route path='/career/hrbp' element={<HRBP />}> </Route> 
        <Route path='/job-applications' element={<JobApplication />}> </Route>           
      </Routes>
    </Router>
  );
}

export default App;
