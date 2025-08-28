import React from "react";
import Button from "../../Button";
import about_1 from "../../../assets/about_1.jpg"
function Few() {
  return (
    < >
  <div className="pt-[90px] w-8/10 m-auto">
        <div className="w-fit m-auto">
        <h1 className="tracking-[2px] font-Oswald text-[12px]  uppercase text-center">
          simply amazing places
        </h1>
        <p className="mt-[16px]  font-Oswald  text-[48px]">
          A few words about us
        </p>
      </div>
      <div className="grid grid-cols-2 mt-[95px]">
        <div className="px-[15px]">
          <p className="text-[18px] font-[700] text-[#181818] leading-[1.66]">
            Pellentesque sit amet elementum ccumsan sit amet mattis eget,
            tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-[35px] text-[14px] text-[#72728c] leading-[1.9285] mb-[67px]">
            Pellentesque sit amet elementum ccumsan sit amet mattis eget,
            tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed eu laoreet ante,
            sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices.
            In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus varius,
            auctor nisi sit amet, consectetur mauris. Curabitur sodales semper
            est, vel faucibus urna laoreet vel. Ut justo diam, sodales non
            pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies
            consequat.
          </p>
          <Button description="Read more" />
        </div>
        <div className="px-[15px]">
            <img src={about_1} alt="" />
        </div>
      </div>
  </div>
    </>
  );
}

export default Few;
