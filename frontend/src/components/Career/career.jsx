import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "../../Stylesheet/try.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/lato";
import "@fontsource/lato/700.css";
import careerimage from "../../assets/careerimage1.jpg";
import emailjs from "emailjs-com";
import { FaCircle } from "react-icons/fa";



const Career = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    portfolioLink: "",
    resumeFile: null,
  });


  const [isOpen, setIsOpen] = useState(false);
  const options = ["Architect", "Interior Designer", "Intern", "Others"];

  const handleSelect = (option) => {
    setFormData({ ...formData, position: option });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resumeFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeLink = formData.resumeFile ? "https://your_resume_upload_link_here" : "No file attached";

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      position: formData.position,
      portfolio_link: formData.portfolioLink || "Not Provided",
      resume: resumeLink,
    };

    emailjs
      .send(
        "service_xehymjr",
        "template_6st5yxj",
        templateParams,
        "vVFnMt1IokO4gixrt"
      )
      .then(() => {
        alert("Application sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          position: "",
          portfolioLink: "",
          resumeFile: null,
        });
      })
      .catch((error) => {
        alert("Failed to send application: " + error.text);
      });
  };



  return (
    <>
      <Navigation />
      <div className="flex flex-col bg-Soft_Grey min-h-screen relative">
        <div
          className="bg-center bg-cover w-full relative"
          style={{ background: `url(${careerimage}) no-repeat center/cover`, height: "100vh" }}
        >
        <div className="absolute inset-0 flex flex-col justify-between text-white px-6 py-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="mt-72"
            >
              <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl" style={{ fontFamily: "Poppins" }}>
                JOIN OUR TEAM AT OPUS ARCHITECTURE LAB
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-2 px-6 md:mx-28 text-center"
            >
              <p className="text-xl sm:text-2xl md:text-2xl" style={{ fontFamily: "Poppins" }}>
                Design. Innovate. Grow.
              </p>
              <p className="text-white text-sm md:text-base tracking-widest" style={{ fontFamily: "Lato", fontSize: "0.98rem" }}>
                At Opus Architecture Lab, we believe that great design comes from collaboration, creativity, and continuous learning. We are always looking for passionate architects and designers eager to push boundaries, challenge conventions, and craft meaningful spaces that inspire.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex-1 p-6 md:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-normal italic text-center mt-6 mb-4 py-2">
        <span className="font-normal">Application for</span> <span className="font-normal">Employment</span> 
      </h1>
      <form className="space-y-2" onSubmit={handleSubmit}>
      <div className="space-y-2">
      <h6 className="text-2xl text-gray-600">Applying for</h6>

      <div className="flex space-x-4">
  {options.map((option) => (
    <div
      key={option}
      className="flex items-center p-2 cursor-pointer text-gray-600"
      onClick={() => handleSelect(option)}
    >
      <FaCircle
        className={`mr-2 ${formData.position === option ? "text-blue-500" : "text-white"}`}
        size={12}
      />
      <span>{option}</span>
    </div>
  ))}
</div>

    </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"style={{ fontFamily: "Lato", }}>
          <input type="text" name="firstName" placeholder="First name*" className="w-full border p-3 bg-gray-100 rounded" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last name*" className="w-full border p-3 bg-gray-100 rounded" value={formData.lastName} onChange={handleChange} required />
        </div>
        <input type="email" name="email" placeholder="Your email address*" className="w-full border p-3 bg-gray-100 rounded" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Contact number*" pattern="^\\+91[6-9]\\d{9}$" className="w-full border p-3 bg-gray-100 rounded mt-2" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="qualifications" placeholder="Educational qualifications*" className="w-full border p-3 bg-gray-100 rounded mt-2" value={formData.qualifications} onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Years of experience*" className="w-full border p-3 bg-gray-100 rounded mt-2" value={formData.experience} onChange={handleChange} required />
       
        <div>
          <p className="text-lg text-gray-600 font-semibold mt-2">Upload Cover Letter</p>
          <p className="text-sm text-gray-600">Please upload your CV in PDF format. Max File Size - 5 MB.</p>
          <input type="file" name="coverLetterFile" className="w-full border p-3 bg-gray-100 rounded" onChange={handleFileChange} />
        </div>
        
        <div>
          <p className="text-lg font-semibold text-gray-600 mt-2">Upload Resume *</p>
          <p className="text-sm text-gray-600">Upload your CV in PDF format. Max File Size - 5 MB.</p>
          <input type="file" name="resumeFile" className="w-full border p-3 bg-gray-100 rounded" onChange={handleFileChange} required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-2">
  <label className="text-lg text-gray-600 ">Link to the CV and or Portfolio</label>
  <input 
    type="text" 
    name="portfolioLink" 
    className="w-full border p-3 bg-gray-100 rounded mt-1" 
    placeholder="Enter portfolio link"
  />
  <p className="text-xs text-gray-600 mt-1">
    <strong>Note:</strong> Mandatory for all Architects/Designers/CAD, BIM Technicians/3D Visualizer. 
    You can upload your portfolio through a service like WeTransfer, Dropbox, Google Drive or Issuu.
  </p>
</div>

<div className="mt-2">
  <label className="text-lg text-gray-600 ">Portfolio Password (If any)</label>
  <input 
    type="text" 
    name="portfolioPassword" 
    className="w-full border p-3 bg-gray-100 rounded mt-1" 
    placeholder="Enter portfolio password (if applicable)"
  />
</div>
</div>

<div className="mt-2">
  <label className="text-lg text-gray-600">
    Link to short video of yourself of why do you want to join OPUS ARCHITECTURE LAB
  </label>
  <input 
    type="text" 
    name="videoLink" 
    className="w-full border p-3 bg-gray-100 rounded mt-1" 
    placeholder="Enter video link"
  />
</div>

        
        <div className="flex items-start space-x-2 mt-2">
          <input type="checkbox" className="mt-1" required />
          <p className="text-sm text-gray-700">
            By clicking the submit button below, I certify that all the information provided is true and complete.
          </p>
        </div>
        
        <button type="submit" className="w-full bg-black text-white p-3 rounded text-center font-semibold mt-2">Submit</button>
      </form>
    </div>
        </div>
      <Footer />
    </>
  );
};

export default Career;
