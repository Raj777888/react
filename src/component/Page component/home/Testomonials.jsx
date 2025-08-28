import React from "react";
import p1 from "../../../assets/p1.jpg";
import testimonials from "../../../assets/testimonials.jpg";
function Testomonials() {
  return (
    <>
      <section
        className="py-[45px]"
        style={{
          backgroundImage: `url(${testimonials})`,
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
              Testimonials
            </p>
          </div>
          <div className="w-[110px] h-[110px] m-auto mt-[45px]">
            <img
              src={p1}
              alt=""
              className="w-full h-full rounded-[100%] border-4 border-blue-900 "
            />
          </div>
          <div className="mt-[45px] w-8/10 m-auto text-center flex">
            <svg
              className="rotate-[180deg]"
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 50 50"
            >
              <g
                fill="none"
                
                stroke="#020202"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m21 33l9-9l-9-9" />
              </g>
            </svg>
          
          <div className="flex flex-col justify-around">
              <p className="text-[22px] mt-[30px] font-mono text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis
              dolor. Cras placerat lectus a posuere aliquet. Curabitur quis
              vehicula odio.
            </p>
            <div className="mt-[45px] text-center">
              <p className="font-Oswald text-[18px] text-white line-clamp-[0.85] ">
                john turner,
                <samp className="font-Oswald text-white text-[12px] line-clamp-[0.85] uppercase ml-[6px]">
                  client
                </samp>
              </p>
            </div>
          </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 50 50"
            >
              <g
                fill="none"
                stroke="#020202"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m21 33l9-9l-9-9" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testomonials;
