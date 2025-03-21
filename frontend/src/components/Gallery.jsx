import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [liked, setLiked] = useState({});
  const [loadedMedia, setLoadedMedia] = useState({}); // ✅ Track loaded items

  useEffect(() => {
    const imageModules = import.meta.glob(
      "/src/assets/gallery/*.{jpg,png,jpeg}"
    );
    const videoModules = import.meta.glob(
      "/src/assets/gallery/*.{mp4,webm,mov}"
    );

    Promise.all([
      ...Object.entries(imageModules).map(async ([path, resolver]) => {
        const image = await resolver();
        return {
          src: image.default,
          name: path.split("/").pop(),
          type: "image",
        };
      }),
      ...Object.entries(videoModules).map(async ([path, resolver]) => {
        const video = await resolver();
        return {
          src: video.default,
          name: path.split("/").pop(),
          type: "video",
        };
      }),
    ]).then((loadedMedia) => {
      setMedia(loadedMedia);
    });
  }, []);

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleMediaLoad = (index) => {
    setLoadedMedia((prev) => ({ ...prev, [index]: true }));
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navigation />

      <div className="flex bg-Soft_Grey h-[36vh] justify-center w-full items-center">
        <span className="text-3xl font-extralight font-sans futura_font italic md:text-6xl">
          The <strong className="not-italic">Gallery</strong>
        </span>
      </div>

      <div className="bg-Soft_Grey p-6 avenir_font_light">
        {media.length === 0 ? (
          <p className="text-center text-gray-500">Loading media...</p>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {media.map((item, index) => (
              <div key={index} className="p-2 relative">
                {/* 🖼️ Image OR 🎥 Auto-playing Video */}
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Gallery-${index}`}
                    className="rounded-xl shadow-lg w-full duration-150 ease-in-out hover:blur-[3px] transition-all" // ⏩ Fast Hover Effect
                    loading="lazy"
                    onLoad={() => handleMediaLoad(index)}
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-lg w-full duration-150 ease-in-out hover:blur-[3px] transition-all" // ⏩ Fast Hover Effect for Video
                    onLoadedData={() => handleMediaLoad(index)}
                  />
                )}

                {/* ❤️ Like Button (Initially Hidden, Show After Load) */}
                <button
                  onClick={() => toggleLike(index)}
                  className={`absolute bottom-4 left-4 p-2 transition-opacity duration-200 ${
                    loadedMedia[index] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {liked[index] ? (
                    <FaHeart className="text-red-500 text-xl" />
                  ) : (
                    <FaRegHeart className="text-gray-600 text-xl" />
                  )}
                </button>
              </div>
            ))}
          </Masonry>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
