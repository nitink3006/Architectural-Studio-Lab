import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="app_">
       <Router>
      {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route exact path='/about' element={<About />}> </Route>
                      
                     
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
