import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projectnav from "./components/Projectnav";
import Projectcontent1 from "./components/Projectcontent1";
import Demo2 from "./components/Demo2";

function App() {
  return (
    <Router>
      {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route exact path='/about' element={<About />}> </Route>
        <Route exact path='/Projectnav' element={<Projectnav />}> </Route>
        <Route path="/Projectcontent1" element={<Projectcontent1 />} />
        <Route path="/Demo2" element={<Demo2 />} />
                      
                     
      </Routes>
    </Router>
  );
}

export default App;
