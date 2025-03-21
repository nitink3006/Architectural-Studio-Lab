import React, { useState } from "react";
import "../Stylesheet/Testimonials.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    text: "Their skilled designers transformed our vision into reality with brilliant sketches, creative illustrations, and captivating mood boards.",
  },
  {
    image:
      "https://static.wixstatic.com/media/820b23_2073210f75804d27a312f1a137cad8dc~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC03266%20copy.jpg",
    title: "Luxury Villa Project",
    text: "Exceptional interior design work! Their attention to detail and ability to blend functionality with aesthetics created a space that perfectly represents our brand.",
  },
  {
    image:
      "https://static.wixstatic.com/media/820b23_c11972fd735d45979e98c9cdbc818674~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC05458%20copy%202.jpg",
    title: "Marriott Hotels",
    text: "Working with this team was a delightful experience. Their innovative approach and commitment to excellence delivered a space that exceeded our expectations.",
  },
  // Adding more testimonials to demonstrate the slider functionality
  {
    image:
      "https://static.wixstatic.com/media/820b23_2073210f75804d27a312f1a137cad8dc~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC03266%20copy.jpg",
    title: "Signature Apartments",
    text: "Impressive design solutions that perfectly captured our brand identity. The space is both functional and aesthetically pleasing.",
  },
  {
    image:
      "https://static.wixstatic.com/media/820b23_c11972fd735d45979e98c9cdbc818674~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC05458%20copy%202.jpg",
    title: "Corporate Headquarters",
    text: "The team's creativity and professionalism delivered an office space that inspires our employees and impresses our clients. Highly recommended.",
  },
];

const Testimonials = () => {
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
    <div
      className="bg-Soft_Grey testimonial-container"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <h1 className="futura_font pb-5 pt-5 testi_head">TESTIMONIALS</h1>

      {/* Adding padding to the Swiper container */}
      <div className="px-12">
        {" "}
        {/* Added horizontal padding */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="testimonial-swiper"
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // When window width is >= 1024px - Fixed to show exactly 3 full slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // When window width is >= 1280px - Showing 3 slides with proper spacing
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="testimonial-img"
                />
                <div className="testimonial-content">
                  <h3 className="futura_font pb-2 test_h3">{item.title}</h3>
                  <p className="avenir_font test_para">"{item.text}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="enq_Btn mb-20 mt-20">
        <button
          className="border enq_Btn pb-3 pe-29 ps-29 pt-3"
          onClick={() => setIsOpen(true)}
        >
          Enquire Now
        </button>

        {isOpen && (
          <motion.div
            className="flex bg-black bg-opacity-50 justify-center fixed inset-0 items-start z-[1000] pt-6"
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
              <motion.button
                className="bg-white text-4xl text-gray-400 absolute hover:text-gray-600 right-3 top-3"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>

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
