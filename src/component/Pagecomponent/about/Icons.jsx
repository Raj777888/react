import React from "react";
import mountain from "../../../assets/mountain.svg";
import Island from "../../../assets/island.svg";
import camera from "../../../assets/camera.svg";
import boat from "../../../assets/boat.svg";
function Icons() {
  return (
    <div className="flex w-7/10 m-auto justify-between py-[90px] " >
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src={mountain} alt="" className="w-full h-full" />
        </div>
        <p className="font-Oswald text-[60px] text-[#181818] leading-[0.75] mt-[35px]">
          17
        </p>
        <p className="font-Oswald text-[18px] text-[#838383] leading-[0.75] mt-[31px]">
          Online Courses
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src={Island} alt="" className="w-full h-full" />
        </div>
        <p className="font-Oswald text-[60px] text-[#181818] leading-[0.75] mt-[35px]">
          213
        </p>
        <p className="font-Oswald text-[18px] text-[#838383] leading-[0.75] mt-[31px]">
          Students
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src={camera} alt="" className="w-full h-full" />
        </div>
        <p className="font-Oswald text-[60px] text-[#181818] leading-[0.75] mt-[35px]">
          11923
        </p>
        <p className="font-Oswald text-[18px] text-[#838383] leading-[0.75] mt-[31px]">
          Teachers
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src={boat} alt="" className="w-full h-full" />
        </div>
        <p className="font-Oswald text-[60px] text-[#181818] leading-[0.75] mt-[35px]">
          15
        </p>
        <p className="font-Oswald text-[18px] text-[#838383] leading-[0.75] mt-[31px]">
          Countries
        </p>
      </div>
    </div>
  );
}

export default Icons;
