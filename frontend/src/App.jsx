import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

import Projectnav from "./components/Projectnav";

import Projectcontent1 from "./components/Projectcontent1";
import Demo2 from "./components/Demo2";
import Mumbaioffice from "./components/Mumbaioffice";

// import Projectcontent1 from "./components/Projectcontent1";

import Career from "./components/Career/career";
import HRBP from "./components/Career/HRBP";
import JobApplication from "./components/Career/JobApplication";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import SeniorInteriorDesigner from "./components/Career/SeniorInteriorDesigner";
import InteriorDesigner from "./components/Career/InteriorDesigner";
import ProjectManager from "./components/Career/ProjectManager";
import InteriorIntern from "./components/Career/InteriorIntern";
import Accounts from "./components/Career/Accounts";
import SiteSupervisor from "./components/Career/SiteSupervisor";
import ScrollToTop from "./components/ScrollToTop";
import Casa from "./components/ProjectData/Casa";
import Aesthetic from "./components/ProjectData/Aesthetic";
import TheUrban from "./components/ProjectData/TheUrban";
import TheModern from "./components/ProjectData/TheModern";
import Ivorynest from "./components/ProjectData/Ivorynest";
import Shades from "./components/ProjectData/Shades";
import Greystone from "./components/ProjectData/Greystone";
function App() {
  return (
    <Router>
      {/* Set up Routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route exact path="/about" element={<About />}>
          {" "}
        </Route>

        <Route exact path="/projects-all" element={<Projectnav />}>
          {" "}
        </Route>

        <Route path="/Projectcontent1" element={<Projectcontent1 />} />
        <Route path="/components/ProjectData/Casa" element={<Casa />} />
        <Route path="/components/ProjectData/TheUrban" element={<TheUrban />} />
        <Route path="/components/ProjectData/TheModern" element={<TheModern />} />
        <Route path="/components/ProjectData/Ivorynest" element={<Ivorynest />} />
        <Route path="/components/ProjectData/Shades" element={<Shades />} />
        <Route path="/components/ProjectData/Greystone" element={<Greystone />} />
        <Route path="/components/ProjectData/Aesthetic" element={<Aesthetic />} />
        <Route path="/Demo2" element={<Demo2 />} />
        <Route path="/mumbai-office" element={<Mumbaioffice />} />

        <Route path="/careers" element={<Career />}>
          {" "}
        </Route>
        <Route path="/career/hrbp" element={<HRBP />}>
          {" "}
        </Route>
        <Route
          path="/career/senior-interior-designer"
          element={<SeniorInteriorDesigner />}
        >
          {" "}
        </Route>
        <Route path="/career/interior-designer" element={<InteriorDesigner />}>
          {" "}
        </Route>
        <Route path="/career/sr.-project-manager" element={<ProjectManager />}>
          {" "}
        </Route>
        <Route
          path="/career/architect-&-interior-design---intern"
          element={<InteriorIntern />}
        >
          {" "}
        </Route>
        <Route path="/career/accounts" element={<Accounts />}>
          {" "}
        </Route>
        <Route path="/career/site-supervisor" element={<SiteSupervisor />}>
          {" "}
        </Route>
        <Route path="/job-applications" element={<JobApplication />}>
          {" "}
        </Route>
        <Route exact path="/Blogs" element={<Blog />}>
          {" "}
        </Route>
        <Route exact path="/projects" element={<Projects />}>
          {" "}
        </Route>
        <Route exact path="/gallery" element={<Gallery />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
