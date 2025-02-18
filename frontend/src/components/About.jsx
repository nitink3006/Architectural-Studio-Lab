import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./Navigation";

const About = () => {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const textX = useTransform(scrollYProgress, [1, 1], [300, 200]);
  const textY = useTransform(scrollYProgress, [1, 1], [300, 10]);

  return (
    <div className="relative w-full h-[200vh] text-black flex flex-col">
      <Navigation />
      <div className="w-full h-[45vh] flex items-center justify-center">
        <h1 className="text-4xl md:text-7xl font-bold">About Us</h1>
      </div>
      <div className="relative w-full h-[100vh] sticky top-0 overflow-hidden flex justify-center items-center">
        <motion.img
          src="/aboutmain1.jpg"
          alt="Our Mission"
          className="w-full h-full object-cover"
          style={{ scale: imageScale }}
        />
      </div>
      
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        <motion.div
          className="text-2xl md:text-4xl font-bold text-white bg-opacity-40 p-6 rounded-lg w-[50%] h-[40%] flex items-center justify-center"
          style={{ x: textX, y: textY }}
        >
          Architectural Studio Lab is an interior design firm focused on creating spaces that merge the functional with the beautiful.
        </motion.div>
      </div>
    </div>
  );
};

export default About;
