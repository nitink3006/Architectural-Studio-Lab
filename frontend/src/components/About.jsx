import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

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
    <div className="relative w-full min-h-screen text-black flex flex-col scroll-smooth">
      <Navigation />

      {/* About Us Section */}
      <div className="w-full h-[45vh] flex items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold">About Us</h1>
      </div>

      {/* Sticky Image Until Text Appears */}
      <div ref={targetRef} className="relative w-full">
        <div className="sticky top-[70px] h-screen flex justify-center items-center overflow-hidden">
          <motion.img
            src="/aboutmain2.jpg"
            alt="Our Mission"
            className="w-full h-full object-cover"
            style={{ scale: useTransform(scrollYProgress, [0, 0.4], [1, 0.9]) }}
          />
          <motion.div
            className="absolute text-2xl md:text-4xl font-bold text-white bg-opacity-40 p-12 mx-20 w-[90%] md:w-[50%] text-center"
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
              y: useTransform(scrollYProgress, [0.2, 0.5], [100, 0]),
            }}
          >
            Architectural Studio Lab is an interior design firm focused on creating spaces that merge the functional with the beautiful.
          </motion.div>
        </div>
      </div>

      {/* Our Process Section */}
      <div ref={processRef} className="w-full py-20 px-8 flex flex-col md:flex-row items-center text-center md:text-left gap-12 md:gap-16">
        <motion.div
          className="w-full md:w-1/4"
          initial={{ opacity: 0, y: 100 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">Our Process</h2>
        </motion.div>

        <motion.div
          className="w-full md:w-3/4 flex flex-col gap-8"
          initial={{ opacity: 0, y: 100 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.p className="text-base sm:text-lg leading-relaxed px-4 sm:px-10 md:px-20 lg:px-40 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
            We follow a research-based process, allowing us to carefully assess all parts of the design before execution. As we deliver turn-key projects, we’ve developed a habit of questioning each execution method, allowing us to replace redundant methods with innovative and new solutions.
          </motion.p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {["Dream", "Design", "Execute", "Deliver"].map((step, index) => (
              <motion.div
                key={index}
                className="px-4 sm:px-6 md:px-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.2 }}
              >
                <span className="text-md font-light">{`0${index + 1}.`}</span>
                <h3 className="text-xl font-serif">{step}</h3>
                <p className="max-w-md mx-20">
                  {step === "Dream"
                    ? "We design the narrative through drawings and illustrations."
                    : step === "Design"
                      ? "We organise procurement and working processes along with site supervision."
                      : step === "Execute"
                        ? "We oversee procurement and ensure seamless execution."
                        : "We carry out final snagging to ensure that we deliver the best result."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Inspiration Section */}
      <div ref={inspirationRef} className="w-full bg-gray-100 py-20 px-8 flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Inspiration
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg leading-relaxed px-4 sm:px-10 md:px-20 lg:px-40 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInspirationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Our inspiration comes from creating something new with each project, just as one would draw new things on a piece of slate.
          People we look up to: Carlo Scarpa, Charles & Ray Eames, Arne Jacobsen, Eero Saarinen, and Hans Wegner.
        </motion.p>

        {/* Image Gallery */}
        <div className="relative w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 mt-10">
          <div className="flex space-x-6 w-max snap-x snap-mandatory">
            {["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Inspiration"
                className="w-[250px] h-[180px] sm:w-[300px] sm:h-[200px] md:w-[400px] md:h-[250px] object-cover rounded-lg shadow-lg snap-start"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
