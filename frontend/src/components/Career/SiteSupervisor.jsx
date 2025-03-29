import { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function SiteSupervisor() {
  const contentRef = useRef(null);
  const [isContentScrolled, setIsContentScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        setIsContentScrolled(scrollTop + clientHeight >= scrollHeight - 10);
      }
    };

    contentRef.current?.addEventListener("scroll", handleScroll);
    return () => contentRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation />

      {/* Main Container */}
      <div className="flex flex-col-reverse lg:flex-row w-full min-h-screen">
        
        {/* Left Section (Sticky Image) */}
        <div className="lg:w-1/2 w-full h-screen sticky top-0">
          <img
            src="https://static.wixstatic.com/media/11062b_9531c9b2291442e59f7dee171b56e36a~mv2.jpg/v1/fill/w_950,h_919,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9531c9b2291442e59f7dee171b56e36a~mv2.jpg"
            alt="Job Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section (Scrollable Content) */}
        <div ref={contentRef} className="lg:w-1/2 w-full h-screen overflow-y-scroll px-6 py-10 scrollbar-hide mb-14 mt-11">
          
          {/* Job Title */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl text-center font-bold"
          >
           Site Supervisor
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray text-center mb-4"
          >
            Full-Time • GURUGRAM
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border-b border-gray-300 my-6"
          ></motion.div>

        <br />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg leading-6 text-gray-800 ml-5"
          >
            We are seeking a highly motivated and experienced HRBP with a strong focus on Talent Acquisition to lead our hiring efforts and overall HR functions while fostering a positive and inclusive workplace culture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border-b border-gray-300 my-6"
          ></motion.div>
          {/* Responsibilities */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-center font-semibold mt-8"
          >
            Responsibilities
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="list-disc ml-5 text-gray-700 leading-4 mt-4 space-y-2"
          >
            <li>Develop and implement talent acquisition strategies to meet the studio's hiring goals.</li>
            <li>Oversee the full-cycle recruitment process, including sourcing, screening, interviewing, and onboarding.</li>
            <li>Collaborate with the leadership team to understand workforce needs.</li>
            <li>Build and maintain a strong employer brand through various talent attraction initiatives.</li>
            <li>Promote and drive initiatives to enhance culture, employee engagement, and workplace satisfaction.</li>
            <li>Ensure compliance with employment laws and studio policies.</li>
            <li>Oversee employee relations, conflict resolution, performance management, and HR policy implementation.</li>
            <li>Act as a strategic partner to senior leadership on workforce planning and HR initiatives.</li>
          </motion.ul>
          <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border-b border-gray-300 my-6"
          ></motion.div>

          {/* Skills Section */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl text-center font-semibold mt-8"
          >
            Skills
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="list-disc ml-5 text-gray-700 leading-4 mt-4 space-y-2"
          >
            <li>Bachelor's degree in Human Resources, Business Administration, or a related field.</li>
            <li>Proven experience as an HR Manager, Talent Acquisition Manager, or in a similar role.</li>
            <li>Strong knowledge of full-cycle recruitment, employer branding strategies, and HR best practices.</li>
            <li>Excellent communication, interpersonal, and decision-making skills.</li>
            <li>Ability to build and maintain relationships with candidates, employees, and leadership teams.</li>
            <li>Knowledge of labor laws and best hiring practices.</li>
            <li>Ability to thrive in a fast-paced environment and manage multiple priorities.</li>
          </motion.ul>
          <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border-b border-gray-300 my-6"
          ></motion.div>

          {/* Apply Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-4 flex justify-center"
          >
            <Link to='/job-applications'>
            <button className="bg-[#212121] w-auto text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
              Apply Now
            </button>
            </Link>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  );
}


export default SiteSupervisor;
