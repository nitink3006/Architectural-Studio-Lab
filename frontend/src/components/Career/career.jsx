import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "../../Stylesheet/try.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/lato"; // Default weight 400
import "@fontsource/lato/700.css";
import careerimage from "../../assets/careerimage1.jpg";

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const jobVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const jobs = [
    { title: "HRBP", location: "Gurugram" },
    { title: "Senior Interior Designer", location: "Gurugram" },
    { title: "Interior Designer", location: "Gurugram" },
    { title: "Sr. Project Manager", location: "Gurugram" },
    { title: "Architect & Interior Design - Intern", location: "Gurugram" },
    { title: "Accounts", location: "Gurugram" },
    { title: "Site Supervisor", location: "Gurugram" },
  ];

  return (
    <>
      <Navigation />
      <div className="flex flex-col bg-Soft_Grey min-h-screen relative">
        <div ref={ref} className="p-6 text-center mt-20 md:mt-32">
          <h1 className="text-3xl md:text-4xl font-semibold futura_font_bold text_black">
            Career <span className="text-gray-400 font-bold">Opportunities</span>
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-center bg-cover h-60 md:h-[80vh] w-full relative"
          style={{
            backgroundSize: "100%",
            backgroundImage: `url(${careerimage})`,
          }}
        >
          <div className="absolute bottom-10 md:bottom-28 left-1/2 transform -translate-x-1/2 text-center text-white font-bold futura_font_bold px-6 w-full sm:w-3/4">
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-tight"
              style={{ fontFamily: "Poppins" }}
            >
              JOIN OUR TEAM AT OPUS ARCHITECTURE LAB
            </motion.p>
          </div>

        </motion.div>
        <div className="mt-4 px-6 md:mx-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl tracking-widest text_black text-center px-6"
            style={{ fontFamily: "Poppins" }}
          >
            DESIGN. INNOVATE. GROW.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base tracking-widest text_black"
            style={{ fontFamily: "Lato", fontSize: "1.5rem" }}
          >
            At Opus Architecture Lab, we believe that great design comes from collaboration, creativity, and continuous learning. We are always looking for passionate architects and designers eager to push boundaries, challenge conventions, and craft meaningful spaces that inspire.
          </motion.p>
        </div>

        <div className="flex-1 p-9 md:p-16 ">
          <h2 className="text-gray-400 text-sm futura_font_bold tracking-widest text_black">CURRENT OPENINGS</h2>
          <div className="mt-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="flex border-b justify-between items-center py-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
                variants={jobVariants}
              >
                <div>
                  <h3 className="text-lg font-semibold futura_font">{job.title}</h3>
                  <p className="text-gray-500 text-sm avenir_font text_dark_grey">Full-Time</p>
                </div>
                <div className="flex gap-6 items-center">
                  <p className="text-gray-500 text-sm avenir_font text_dark_grey">{job.location}</p>
                  <Link to={`/career/${job.title.replace(/\s+/g, "-").toLowerCase()}`} className=" border border-dark text-dark viewbtn">
                    <button className="border text-sm font-semibold futura_font px-6 py-2">
                      VIEW
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
