import React, { useRef } from "react";
import "../Stylesheet/Testimonials.css";
// import t1 from '../assets/images/t1.avif';

const testimonials = [
  {
    image: "https://static.wixstatic.com/media/820b23_2073210f75804d27a312f1a137cad8dc~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC03266%20copy.jpg",
    title: "Hyatt Regency",
    text: "Great work done by the team. The style statement with contemporary approach came out to be outstanding. Thanks for a lovely space as per our likings.",
   
  },
  {
    image: "https://static.wixstatic.com/media/820b23_c11972fd735d45979e98c9cdbc818674~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC05458%20copy%202.jpg",
    title: "Galaxy Group Office",
    text: "Their skilled designers transformed our visioninto reality with brilliant sketches, creativeillustrations, and captivating mood boards. Theymeticulously explored ideas, ensuring the finaldesign surpassed our expectations. Theirdedication and creativity delivered results thatperfectly aligned with our goals.",
   
  },
  {
    image: "https://static.wixstatic.com/media/aaeed6_82157e1590ff47169ee5599ae3e3e44e~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/imageonline-co-split-image%20(16)_edited.jpg",
    title: "Emaar Palm Terraces",
    text: " Home isn’t a place, it’s a feeling’. When we were looking to create a beautiful feeling of love, togetherness and family in our new home, Chalk Studio made that a reality for us. They held our dream close to their creation and created a beautiful experience for us to live every day! Their strength in creating a unique design for your taste, building it with little details and delivering with pure professionalism, makes Chalk Studio a trusted partner to design your home…design that feeling for you…thank you Chalk Studio!",
   
  },
  {
    image: "https://static.wixstatic.com/media/055c2c_3f41c6ea774d41548e3790aa3ac11c75~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Meraki%20Home_4_edited.jpg",
    title: "The Ultima",
    text: "Team Chalk Studio made the entire process of turning a house into a home smooth for us. We got multiple compliments from our friends and relatives for the remarkable choice of materials and accessories used in our Home. We are extremely happy about our decision of choosing Chalk Studio for our dream home. Couldn’t have asked for a better Team",
  
  },
  {
    image: "https://static.wixstatic.com/media/a511f3_ca7cfe30884a477da5c8fa601d67b956~mv2.jpg/v1/fill/w_320,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Millenial%20Home_19.jpg",
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

  return (
    <div className="testimonial-container ">
        <h1 className="testi_head pt-5 pb-5">TESTIMONIALS</h1>
      {/* <button className="scroll-btn left" onClick={scrollLeft}>❮</button> */}
      <div className="testimonial-wrapper p-3" ref={scrollRef}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.title} className="testimonial-img" />
            <div className="p-8">
            <h3 className="test_h3 pb-2">{item.title}</h3>
            <p className="test_para ">"{item.text}"</p>
            </div>
            
           
          </div>
        ))}
      </div>
      {/* <button className="scroll-btn right" onClick={scrollRight}>❯</button> */}
      <div className="enq_Btn mt-20 mb-20">
      <button className="border pe-29 ps-29 pt-3 pb-3 enq_Btn ">Enquire Now</button>
      </div>
     
    </div>
  );
};

export default Testimonials;
