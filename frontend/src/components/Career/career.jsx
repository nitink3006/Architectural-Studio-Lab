import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
    { title: "Interior Design - Intern", location: "Gurugram" },
    { title: "CAD Designer", location: "Gurugram" },
    { title: "Accounts Assistant", location: "Gurugram" },
    { title: "Founder's Office", location: "Gurugram" },
    { title: "Site Supervisor", location: "Gurugram" },
    { title: "3D Visualizer", location: "Gurugram" },
  ];

  return (
    <>
      <Navigation />
      <div className="flex flex-col bg-Soft_Grey min-h-screen relative">
        <div ref={ref} className="p-10 text-center mt-32">
          <h1 className="text-4xl font-semibold futura_font_bold">
            Career <span className="text-gray-400 font-bold">Opportunities</span>
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-center bg-cover h-[80vh] w-full relative"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/11062b_1e00f3c8acda4ab38eeb0378083d5517~mv2.jpg/v1/fill/w_1899,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_1e00f3c8acda4ab38eeb0378083d5517~mv2.jpg')",
          }}
        >
          <div className="text-5xl text-center text-white -translate-x-1/2 absolute bottom-28 font-bold futura_font_bold left-[54rem] transform">
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              We are always
            </motion.p>
            <motion.p
              custom={0.5}
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              looking out for
            </motion.p>
            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              new talent to join our team.
            </motion.p>
          </div>
        </motion.div>

        <div className="flex-1 p-16">
          <h2 className="text-gray-400 text-sm futura_font_bold tracking-widest">CURRENT OPENINGS</h2>
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
                  <p className="text-gray-500 text-sm avenir_font">Full-Time</p>
                </div>
                <div className="flex gap-6 items-center">
                  <p className="text-gray-500 text-sm avenir_font">{job.location}</p>
                  <Link to={`/career/${job.title.replace(/\s+/g, "-").toLowerCase()}`}>
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
