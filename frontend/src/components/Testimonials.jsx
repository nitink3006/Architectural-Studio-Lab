import React, { useRef, useState } from "react";
import "../Stylesheet/Testimonials.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "https://static.wixstatic.com/media/820b23_2073210f75804d27a312f1a137cad8dc~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC03266%20copy.jpg",
    title: "Hyatt Regency",
    text: "Great work done by the team. The style statement with contemporary approach came out to be outstanding. Thanks for a lovely space as per our likings.",
  },
  {
    image: "https://static.wixstatic.com/media/820b23_c11972fd735d45979e98c9cdbc818674~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC05458%20copy%202.jpg",
    title: "Galaxy Group Office",
    text: "Their skilled designers transformed our vision into reality with brilliant sketches, creative illustrations, and captivating mood boards. They meticulously explored ideas, ensuring the final design surpassed our expectations. Their dedication and creativity delivered results that perfectly aligned with our goals.",
  },
  {
    image: "https://static.wixstatic.com/media/aaeed6_82157e1590ff47169ee5599ae3e3e44e~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/imageonline-co-split-image%20(16)_edited.jpg",
    title: "Emaar Palm Terraces",
    text: "Home isn’t a place, it’s a feeling’. When we were looking to create a beautiful feeling of love, togetherness and family in our new home, Chalk Studio made that a reality for us. They held our dream close to their creation and created a beautiful experience for us to live every day! Their strength in creating a unique design for your taste, building it with little details and delivering with pure professionalism, makes Chalk Studio a trusted partner to design your home…design that feeling for you…thank you Chalk Studio!",
    subtext: "Nisha Awasthi | Resident"
  },
  {
    image: "https://static.wixstatic.com/media/055c2c_3f41c6ea774d41548e3790aa3ac11c75~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Meraki%20Home_4_edited.jpg",
    title: "The Ultima",
    text: "Team Chalk Studio made the entire process of turning a house into a home smooth for us. We got multiple compliments from our friends and relatives for the remarkable choice of materials and accessories used in our Home. We are extremely happy about our decision of choosing Chalk Studio for our dream home. Couldn’t have asked for a better Team",
    subtext: "Rajiv Tandon | Resident ",
  },
  {
    image: "https://static.wixstatic.com/media/a511f3_ca7cfe30884a477da5c8fa601d67b956~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Millenial%20Home_19.jpg",
    title: "The Ultima",
    text: "Priyanka and her team exceeded our expectations! They were so easy to work with and understood what we wanted. Their eye for detail is amazing to the point that even all of our accessories go together. They have really made our home feel like home.",
    subtext: "Shubhada | Resident",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xehymjr",
        "template_6st5yxj",
        formData,
        "vVFnMt1IokO4gixrt"
      )
      .then(() => {
        alert("Message sent successfully!");
        setIsOpen(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          budget: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      });
  };

  return (
    <div className="bg-Soft_Grey testimonial-container" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <h1 className="futura_font pb-5 pt-5 testi_head">TESTIMONIALS</h1>
     
  {/* Only ONE scroll button section – placed OUTSIDE the wrapper */}
  <div className="carousel-controls">
        <button onClick={scrollLeft} className="ms-3">←</button>
        <div className="p-3 testimonial-wrapper" ref={scrollRef}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.title} className="testimonial-img" />
            <div className="p-8">
              <h3 className="futura_font pb-2 test_h3">{item.title}</h3>
              <p className="avenir_font test_para">"{item.text}"</p>
              {item.subtext && (
                <strong>
                  <p className="avenir_font pt-4 test_para">"{item.subtext}"</p>
                </strong>
              )}
            </div> 
          </div>
        ))}
      </div>
        <button onClick={scrollRight} className="me-3">→</button>
      </div>

  


      <div className="enq_Btn mb-20 mt-20">
        <button className="border enq_Btn pb-3 pe-29 ps-29 pt-3" onClick={() => setIsOpen(true)}>
          Enquire Now
        </button>

        {isOpen && (
                <motion.div
                  className="flex bg-black bg-opacity-50 justify-center fixed inset-0 items-center z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="flex flex-col bg-white h-auto justify-center p-4 rounded-lg shadow-lg w-full max-w-lg md:p-6 overflow-y-auto relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Close Button */}
                    <motion.button
                      className="bg-white text-4xl text-gray-400 absolute hover:text-gray-600 right-3 top-3"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      ×
                    </motion.button>
      
                    {/* Heading */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl text-gray-400 font-semibold">
                        Say Hello
                      </h2>
                    </motion.div>
      
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-3 space-y-3">
                      {[
                        { name: "firstName", placeholder: "First Name" },
                        { name: "lastName", placeholder: "Last Name" },
                        { name: "email", placeholder: "Email", type: "email" },
                        { name: "phone", placeholder: "Phone", type: "tel" },
                        { name: "location", placeholder: "Location / Area" },
                        {
                          name: "budget",
                          placeholder: "Enter Budget In Lakh",
                          type: "number",
                        },
                      ].map(({ name, placeholder, type = "text" }, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="border-b border-black hover:border-b-2"
                        >
                          <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={formData[name]}
                            onChange={handleChange}
                            className="p-2 text-base w-full hover:font-bold outline-none placeholder-black"
                            required
                          />
                        </motion.div>
                      ))}
      
                      {/* Message Textarea */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="border-b border-black hover:border-b-2"
                      >
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          className="p-2 text-base w-full hover:font-bold outline-none placeholder-black resize-none"
                          rows="2"
                        ></textarea>
                      </motion.div>
      
                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black text-base text-white w-full font-semibold hover:bg-gray-900 hover:font-bold mt-3 py-2 transition-colors"
                      >
                        Submit
                      </motion.button>
                    </form>
                  </motion.div>
                </motion.div>
              )}
      </div>
    </div>
  );
};

export default Testimonials;
