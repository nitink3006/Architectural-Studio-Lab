import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projectcontent1 from "./components/Projectcontent1";

function App() {
  return (
    <Router>
      {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route exact path='/about' element={<About />}> </Route>
        <Route path="/Projectcontent1" element={<Projectcontent1 />} />
                      
                     
      </Routes>
    </Router>
  );
}

export default App;
