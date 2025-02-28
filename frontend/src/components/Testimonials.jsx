import React, { useRef, useState } from "react";
import "../Stylesheet/Testimonials.css";
// import t1 from '../assets/images/t1.avif';
import emailjs from "emailjs-com"; // Import emailjs-com
import { motion } from "framer-motion";

const testimonials = [
  {
    image:
      "https://static.wixstatic.com/media/820b23_2073210f75804d27a312f1a137cad8dc~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC03266%20copy.jpg",
    title: "Hyatt Regency",
    text: "Great work done by the team. The style statement with contemporary approach came out to be outstanding. Thanks for a lovely space as per our likings.",
  },
  {
    image:
      "https://static.wixstatic.com/media/820b23_c11972fd735d45979e98c9cdbc818674~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC05458%20copy%202.jpg",
    title: "Galaxy Group Office",
    text: "Their skilled designers transformed our visioninto reality with brilliant sketches, creativeillustrations, and captivating mood boards. Theymeticulously explored ideas, ensuring the finaldesign surpassed our expectations. Theirdedication and creativity delivered results thatperfectly aligned with our goals.",
  },
  {
    image:
      "https://static.wixstatic.com/media/aaeed6_82157e1590ff47169ee5599ae3e3e44e~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/imageonline-co-split-image%20(16)_edited.jpg",
    title: "Emaar Palm Terraces",
    text: " Home isn’t a place, it’s a feeling’. When we were looking to create a beautiful feeling of love, togetherness and family in our new home, Chalk Studio made that a reality for us. They held our dream close to their creation and created a beautiful experience for us to live every day! Their strength in creating a unique design for your taste, building it with little details and delivering with pure professionalism, makes Chalk Studio a trusted partner to design your home…design that feeling for you…thank you Chalk Studio!",
  },
  {
    image:
      "https://static.wixstatic.com/media/055c2c_3f41c6ea774d41548e3790aa3ac11c75~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Meraki%20Home_4_edited.jpg",
    title: "The Ultima",
    text: "Team Chalk Studio made the entire process of turning a house into a home smooth for us. We got multiple compliments from our friends and relatives for the remarkable choice of materials and accessories used in our Home. We are extremely happy about our decision of choosing Chalk Studio for our dream home. Couldn’t have asked for a better Team",
  },
  {
    image:
      "https://static.wixstatic.com/media/a511f3_ca7cfe30884a477da5c8fa601d67b956~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Millenial%20Home_19.jpg",
    title: "The Ultima",
    text: "Priyanka and her team exceeded our expectations! They were so easy to work with and understood what we wanted. Their eye for detail is amazing to the point that even all of our accessories go together. They have really made our home feel like home.",
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
        "service_xehymjr", // Replace with your EmailJS Service ID
        "template_6st5yxj", // Replace with your EmailJS Template ID
        formData,
        "vVFnMt1IokO4gixrt" // Replace with your EmailJS Public Key
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
    <div className="testimonial-container ">
      <h1 className="testi_head pt-5 pb-5">TESTIMONIALS</h1>
      {/* <button className="scroll-btn left" onClick={scrollLeft}>❮</button> */}
      <div className="testimonial-wrapper p-3" ref={scrollRef}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="testimonial-img"
            />
            <div className="p-8">
              <h3 className="test_h3 pb-2">{item.title}</h3>
              <p className="test_para ">"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="scroll-btn right" onClick={scrollRight}>❯</button> */}
      <div className="enq_Btn mt-20 mb-20">
        <button
          className="border pe-29 ps-29 pt-3 pb-3 enq_Btn "
          onClick={() => setIsOpen(true)}
        >
          Enquire Now
        </button>

        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-lg h-auto p-4 md:p-6 relative shadow-lg flex flex-col justify-center overflow-y-auto rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <motion.button
                className=" bg-white absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-4xl"
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
                <h2 className="text-3xl font-semibold text-gray-400">
                  Say Hello
                </h2>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 mt-3">
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
                      className="w-full p-2 text-base outline-none placeholder-black hover:font-bold"
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
                    className="w-full p-2 text-base outline-none resize-none placeholder-black hover:font-bold"
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
                  className="w-full bg-black text-white py-2 text-base font-semibold mt-3 hover:bg-gray-900 hover:font-bold transition-colors"
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
