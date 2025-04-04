import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Navigation";
import Footer from "../Footer";
import emailjs from "emailjs-com";

const JobApplication = () => {
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    portfolioLink: "",
    resumeFile: null,
  });

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
      <div className="relative w-full min-h-screen flex flex-col mt-20 mb-10 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-serif italic text-center mt-10 mb-6 bg-white py-4">
          <span className="font-normal">Job</span> Application
        </h1>

        <motion.div
          ref={contentRef}
          className="w-full bg-white p-6 sm:p-8 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 100px)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Basic Info</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
          <select name="position" value={formData.position} onChange={handleChange} className="w-full border-b p-2 outline-none bg-transparent" required>
              <option value="">Position Applying</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Designer">Designer</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <br />
            <input type="text" name="firstName" placeholder="First Name*" className="w-full border-b p-2 outline-none bg-transparent" value={formData.firstName} onChange={handleChange} required />
            <br />
            <br />
            <input type="text" name="lastName" placeholder="Last Name*" className="w-full border-b p-2 outline-none bg-transparent" value={formData.lastName} onChange={handleChange} required />
            <br />
            <br />
            <input type="email" name="email*" placeholder="Email*" className="w-full border-b p-2 outline-none bg-transparent" value={formData.email} onChange={handleChange} required />
            <br />
            <br />
            <input type="tel"name="phone"placeholder="Contact Number*"pattern="^\+91[6-9]\d{9}$"className="w-full border-b p-2 outline-none bg-transparent"value={formData.phone}onChange={handleChange}required/>
            <br />
            <br />
            <input type="text" name="Qualifications" placeholder="Educational Qualifications*" className="w-full border-b p-2 outline-none bg-transparent" />
            <br />
            <br />
            <input type="text" name="experience" placeholder="Years of experience*" className="w-full border-b p-2 outline-none bg-transparent" />
            <br />
            <br />
            <input type="date" name="dob" placeholder="Date of Birth" className="w-full border-b p-2 outline-none bg-transparent" />
            <br />
            <br />
            <input type="text" name="city" placeholder="City you are applying from*" className="w-full border-b p-2 outline-none bg-transparent" />
            <br />
             <br />
            <input type="text" name="relocate" placeholder="if not from Delhi, are you willing to relocate?*" className="w-full border-b p-2 outline-none bg-transparent" />
            <br />
            <br />
            <input type="text" name="address" placeholder="Address" className="w-full border-b p-2 outline-none bg-transparent" />
            <br />
            <br />
            <select name="source" className="w-full border-b p-2 outline-none bg-transparent">
              <option>How did you hear about us?</option>
              <option>Website</option>
              <option>Social Media</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
            <div className="mt-16">
              <h2 className="text-2xl font-semibold">Credentials</h2>
              <label className="block text-gray-700 font-semibold mt-16">Upload Portfolio</label>
              <input type="file" name="portfolioFile" className="w-full border p-2 bg-gray-100" />
              <p className="text-sm text-gray-500">Max File Size 15 MB</p>
              <label className="block text-gray-700 font-semibold">Upload Resume *</label>
              <input type="file" name="resumeFile" className="w-full border p-2 bg-gray-100" onChange={handleFileChange} required />
              <p className="text-sm text-gray-500">Max File Size 5 MB</p>
              <div className="flex items-start space-x-2 mt-4">
                <input type="checkbox" className="mt-1" required />
                <p className="text-sm text-gray-700">By clicking the submit button below, I certify that all the information provided by me on this application is true and complete. If any false information, omissions, or misrepresentations are discovered, my application may be rejected, and if employed, my employment may be terminated at any time.</p>
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white p-3 text-center font-semibold mt-4">Submit</button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default JobApplication;