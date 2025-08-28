import React from "react";
import why from "../../../assets/why.jpg";
import why_1 from "../../../assets/why_1.jpg";
import car from "../../../assets/car.jpg";
import glide from "../../../assets/glide.jpg";
import why_2 from "../../../assets/why_2.svg";
import why_3 from "../../../assets/why_3.svg";
import ar from "../../../assets/ar.svg";

function Choice() {
  return (
    <section
      className="py-[45px]"
      style={{
        backgroundImage: `url(${why})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-8/10 m-auto">
        <div className="w-fit m-auto">
          <h1 className="tracking-[2px] font-Oswald text-[12px] text-white uppercase text-center">
            simply amazing places
          </h1>
          <p className="mt-[16px]  font-Oswald text-white text-[48px]">
            Why chosse us
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-3 space-x-[30px] pt-[70px] ">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-md  border-[#66666633] border-[1px] ">
              <img
                src={why_1}
                alt="why"
                className="w-full h-[194px]  object-cover rounded-[8px]"
              />
              <div className="pt-[48px] pb-[55px] px-[35px]">
                <h3 className="font-Oswald text-[30px] text-[#181818] leading-[1.1]">
                  Fast Services
                </h3>
                <p className="text-[14px] font-[400] text-[#72728c] leading-[1.9285] mt-[20px]">
                  Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                  tristique at leo.
                </p>
              </div>
            </div>
            <div className="  absolute top-[-29px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#f2f5f6] p-[10px] rounded-[50%]">
              <img src={ar} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-md  border-[#66666633] border-[1px] ">
              <img
                src={car}
                alt="why"
                className="w-full h-[194px]  object-cover rounded-[8px]"
              />
              <div className="pt-[48px] pb-[55px] px-[35px]">
                <h3 className="font-Oswald text-[30px] text-[#181818] leading-[1.1]">
                  Great Team
                </h3>
                <p className="text-[14px] font-[400] text-[#72728c] leading-[1.9285] mt-[20px]">
                  Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                  tristique at leo.
                </p>
              </div>
            </div>
            <div className="  absolute top-[-29px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#f2f5f6] p-[10px] rounded-[50%]">
              <img src={why_2} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-md  border-[#66666633] border-[1px] ">
              <img
                src={glide}
                alt="why"
                className="w-full h-[194px]  object-cover rounded-[8px]"
              />
              <div className="pt-[48px] pb-[55px] px-[35px]">
                <h3 className="font-Oswald text-[30px] text-[#181818] leading-[1.1]">
                  Best Deals
                </h3>
                <p className="text-[14px] font-[400] text-[#72728c] leading-[1.9285] mt-[20px]">
                  Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                  tristique at leo.
                </p>
              </div>
            </div>
            <div className="  absolute top-[-29px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#f2f5f6] p-[10px] rounded-[50%]">
              <img src={why_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choice;
