import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
// import Navigation from "./Navigation";


import Footer from "./Footer";
import Navigation from "./Navigation";

const processSteps = [
  {
    title: "Dream",
    description: "We attentively gather and document your requirements to create your dream space, ensuring every detail aligns with your vision perfectly.",
    image: "/dream.png",
  },
  {
    title: "Design",
    description: "We manage procurement, streamline working processes, and oversee site supervision to ensure efficient execution and seamless project completion.",
    image: "/design.png",
  },
  {
    title: "Execute",
    description: "We manage procurement, streamline processes, and ensure smooth execution.",
    image: "/execute.png",
  },
  {
    title: "Deliver",
    description: "We meticulously carry out final snagging to identify and resolve any issues, ensuring we deliver the highest quality results.",
    image: "/deliver.png",
  },
];

const About = () => {
  const targetRef = useRef(null);
  const processRef = useRef(null);
  const inspirationRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const isProcessInView = useInView(processRef, { margin: "-10px" });
  const isInspirationInView = useInView(inspirationRef, { margin: "-10px" });

  return (
    <div className="flex flex-col bg-Soft_Grey text-black w-full min-h-screen relative scroll-smooth">
      <Navigation />
      {/* Sticky Image with Text Overlay */}
      <div ref={targetRef} className="h-screen w-full relative">
        <div className="flex h-screen justify-center items-center overflow-hidden sticky top-0">
          <motion.img
            src="/aboutmain.png"
            alt="Our Mission"
            className="w-full h-full absolute top-0"
          />
          <div className="flex flex-col h-screen justify-center text-center text-white w-full absolute futura_font_bold items-center px-6 space-y-4">
            <motion.h2
              className="text-2xl font-bold md:text-4xl"
              style={{
                opacity: useTransform(scrollYProgress, [0.005, 0.1], [0, 1]),
                y: useTransform(scrollYProgress, [0.05, 0.2], [100, 0]),
              }}
            >
              Opus Architecture Lab is an interior design firm
            </motion.h2>
            <motion.h2
              className="text-2xl font-bold md:text-4xl"
              style={{
                opacity: useTransform(scrollYProgress, [0.2, 0.3], [0, 1]),
                y: useTransform(scrollYProgress, [0.2, 0.4], [100, 0]),
              }}
            >
              focused on creating spaces that merge the functional with the beautiful.
            </motion.h2>
          </div>
        </div>
      </div>
      {/* Our Process Section */}
      <div ref={processRef} className="flex flex-col w-full gap-12 items-center md:flex-row md:gap-16 px-8 py-20">
        <motion.div
          className="flex flex-col text-center w-full items-center md:items-start md:text-left md:w-1/3"
          initial={{ opacity: 0, y: 100 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold futura_font_bold md:text-5xl mx-30 text_black">Our Process</h2>
          <motion.p className="text-base avenir_font_light leading-relaxed mt-2 sm:text-lg text_dark_grey">
            We follow a research-based process, allowing us to carefully assess all parts of the design before execution. As we deliver turn-key projects, we’ve developed a habit of questioning each execution method, allowing us to replace redundant methods with innovative and new solutions.
          </motion.p>
        </motion.div>


        {/* Right Side Content */}
        <motion.div
          className="flex flex-col w-full gap-8 md:w-2/3"
          initial={{ opacity: 0, y: 100 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-10 sm:gap-8 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center sm:space-x-6 space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.2 }}
              >
                <img src={step.image} alt={step.title} className="h-16 w-16 object-contain" />
                <div>
                  <span className="text-md font-light">{`0${index + 1}.`}</span>
                  <h3 className="text-xl futura_font_bold text_black">{step.title}</h3>
                  <p className="avenir_font_light text_dark_grey">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>



      {/* Our Inspiration Section */}
      <div ref={inspirationRef} className="flex flex-col text-center w-full items-center px-8 py-20">
        <motion.h2
          className="text-3xl font-bold futura_font_bold md:text-5xl text_black"
          initial={{ opacity: 0, y: 50 }}
          animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Inspiration
        </motion.h2>
        <motion.p
          className="text_dark_grey text-base text-center avenir_font_light leading-relaxed lg:max-w-xl lg:px-40 md:max-w-lg md:px-20 mt-6 mx-auto px-4 sm:max-w-md sm:px-10 sm:text-lg xl:max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Our inspiration comes from creating something new with each project, just as one would draw new things on a piece of slate.
          People we look up to: Carlo Scarpa, Charles & Ray Eames, Arne Jacobsen, Eero Saarinen, and Hans Wegner.
        </motion.p>

        {/* Image Gallery */}
        <div className="w-full mt-10 overflow-x-auto relative scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <div className="flex w-max snap-mandatory snap-x space-x-6">
            {["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Inspiration"
                className="h-[180px] rounded-lg shadow-lg w-[250px] md:h-[250px] md:w-[400px] object-cover sm:h-[200px] sm:w-[300px] snap-start"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full items-center px-0 py-10">
        <video className="h-auto w-full max-h-[90vh] object-cover" autoPlay muted loop playsInline>
          <source src="/aboutvdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default About;
