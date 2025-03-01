import React from "react";
import "../Stylesheet/Morework.css";

const galleryItems = [
  { src: "https://static.wixstatic.com/media/76aad7_955a26759df143549257e0f848dbfa85~mv2.jpg/v1/fill/w_130,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/MUMBAI-OFFICE-15-06-2023-CAM-06_POST.jpg", title: "Mumbai office" },
  { src: "https://static.wixstatic.com/media/76aad7_37dbcc0760b64a619077db1d2ec7b195~mv2.jpg/v1/fill/w_61,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FORZA-CONFERENCE-ROOM-CAM-01-2024-05-15.jpg", title: "Forza office" },
  { src: "https://static.wixstatic.com/media/76aad7_64ed43bf67f647098a49543b1acd9e63~mv2.jpg/v1/fill/w_64,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Reception_CAM02_ViewAA.jpg", title: "Singh Properties office" },
  { src: "https://static.wixstatic.com/media/76aad7_5113b88cc7a045b19c1a80e3ea24f278~mv2.png/v1/fill/w_75,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Reception%20Lobby.png", title: "Commercial Entrance Lobby" },
  { src: "https://static.wixstatic.com/media/76aad7_898f04416a964ede810035d3731a67f0~mv2.jpg/v1/fill/w_95,h_95,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shot%20005.jpg", title: "Hyatt Al Fresco" },
  { src: "https://static.wixstatic.com/media/820b23_9d1272ba9bce46b8b9373aad97acb02a~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/final%20reception.png", title: "Rugs Store" },
  { src: "https://static.wixstatic.com/media/76aad7_8fdf35b1fab643d8a5e5d94873386c91~mv2.jpg/v1/fill/w_95,h_95,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/HYATT-SPA-SHOT-01-2024-05-13%20copy.jpg", title: "Hyatt Spa" },
  { src: "https://static.wixstatic.com/media/76aad7_8a133f1b654e4ad2bf7c235fa781cb45~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/shruti_18552_None_a4ea8f13-88d5-42b8-8f82-9864358c221a.png", title: "Restaurant" },
  { src: "https://static.wixstatic.com/media/76aad7_955a26759df143549257e0f848dbfa85~mv2.jpg/v1/fill/w_130,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/MUMBAI-OFFICE-15-06-2023-CAM-06_POST.jpg", title: "Mumbai office" },
  { src: "https://static.wixstatic.com/media/76aad7_37dbcc0760b64a619077db1d2ec7b195~mv2.jpg/v1/fill/w_61,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FORZA-CONFERENCE-ROOM-CAM-01-2024-05-15.jpg", title: "Forza office" },
  { src: "https://static.wixstatic.com/media/76aad7_64ed43bf67f647098a49543b1acd9e63~mv2.jpg/v1/fill/w_64,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Reception_CAM02_ViewAA.jpg", title: "Singh Properties office" },
  { src: "https://static.wixstatic.com/media/76aad7_5113b88cc7a045b19c1a80e3ea24f278~mv2.png/v1/fill/w_75,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Reception%20Lobby.png", title: "Commercial Entrance Lobby" },
  { src: "https://static.wixstatic.com/media/76aad7_898f04416a964ede810035d3731a67f0~mv2.jpg/v1/fill/w_95,h_95,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shot%20005.jpg", title: "Hyatt Al Fresco" },
  { src: "https://static.wixstatic.com/media/820b23_9d1272ba9bce46b8b9373aad97acb02a~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/final%20reception.png", title: "Rugs Store" },
  
];

const Morework = () => {
  return (
    <div className="gallery-section">
      <h4 className="gallery-title">MORE WORK</h4>
      <div className="gallery-wrapper">
        <div className="gallery-container">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item2">
              <div className="image-container">
                <img src={item.src} alt={item.title} />
              </div>
              <p className="gallery-caption">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Morework;
