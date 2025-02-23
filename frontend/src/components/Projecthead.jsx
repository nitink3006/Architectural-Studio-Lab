import React from 'react';
import "../Stylesheet/Project.css";

function Projecthead() {
    return (
        <div className='pb-5'>
            <div className="hr_line">
                <hr />
            </div>
            <div className="proj_head flex flex-row justify-between ps-18 pe-18">
                <div className="proj_head_left">
                    <h3>OUR WORK</h3>
                </div>


                <div className="proj_head_right flex flex-row ">
                    <div className="proj_head_right_btn1 pe-2 ps-2">
                        <button className="btn border ">Commercial</button>
                    </div>
                    <div className="proj_head_right_btn2 pe-2 ps-2">
                        <button className="btn border">Hospitality</button>
                    </div>
                    <div className="proj_head_right_btn3 pe-2 ps-2">
                        <button className="btn border">Residential</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projecthead
