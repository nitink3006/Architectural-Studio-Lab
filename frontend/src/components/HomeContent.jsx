import React from 'react';
import '../Stylesheet/Homecon.css';
 
function HomeContent() {
  return (
    <div className='home_content bg-Soft_Grey'>
      <div className="row flex flex-row  p-15 ">
        <div className="col-md-6 flex align-items-center justify-content-center">
          <svg className='home_cont_svg' xmlns="http://www.w3.org/2000/svg" version="1.0" width="265.000000pt" height="190.000000pt" viewBox="0 0 265.000000 190.000000" preserveAspectRatio="xMidYMid meet">

            <g className='home_cont_svg' transform="translate(0.000000,190.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M892 1575 c-287 -63 -491 -310 -494 -598 -1 -110 16 -185 64 -287 33 -68 57 -101 122 -166 90 -90 142 -124 249 -162 63 -22 88 -26 197 -26 109 0 134 4 198 26 156 56 290 175 364 326 30 60 42 96 42 130 l1 47 -34 0 c-34 0 -35 -2 -52 -56 -51 -173 -201 -321 -378 -373 -77 -23 -213 -21 -292 4 -398 123 -530 616 -240 900 112 110 235 160 397 160 146 0 261 -47 378 -154 46 -42 47 -42 76 -18 33 26 20 52 -56 115 -152 127 -347 174 -542 132z" />
              <path d="M1872 1309 c-117 -20 -230 -114 -267 -223 -22 -64 -14 -91 26 -91 19 0 30 12 56 65 89 180 280 222 431 95 102 -86 110 -263 17 -373 -72 -85 -217 -114 -318 -62 -56 28 -82 20 -82 -26 0 -36 50 -67 136 -83 155 -31 318 55 385 202 24 52 28 75 29 147 0 73 -4 94 -29 147 -46 99 -147 182 -241 198 -77 12 -90 13 -143 4z" />
            </g>
          </svg>
        </div>
        <div className="col-md-6 mt-4 mb-3 homecont_para">
          <p className='mb-4 '>
            As interior designers, we transform spaces into captivating environments that reflect your unique style. Our interior designing firm is dedicated to crafting bespoke solutions that harmonize functionality with aesthetic appeal. With a keen eye for detail, our interior design studio brings dreams to life, ensuring every project is a masterpiece.
          </p>
          <p className='mb-4'>
            Our interior designing firm boasts a team of seasoned professionals dedicated to transforming your spaces into personalized masterpieces. Elevate your living spaces with our expertise, where every design tells a story and every room becomes a statement. Trust us to redefine your interiors, turning your aspirations into beautifully crafted realities.
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomeContent
