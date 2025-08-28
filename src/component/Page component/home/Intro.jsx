import intro from "../../../assets/intro.jpg";
import beach from "../../../assets/beach.svg";
import wallet from "../../../assets/wallet.svg";
import suitcase from "../../../assets/suitcase.svg";

function Intro() {
  return (
    <>
   <div className="relative  ">
    <div className="absolute top-[-156px] ">
        <img src={intro} alt="" className="center w-full " />
    </div>
     <div
      className="flex justify-between m-auto w-8/10 py-[135px] border-b-[#6666666f] border-b-2"
    >
      <div className="flex items-end w-fit">
        <div className="w-[71px] h-[70px]">
          <img src={beach} alt="" className="w-full" />
        </div>
        <div className="ml-[28px]">
          <p className="font-Oswald text-[18px] text-[#181818]">Top Destinations</p>
          <p className="font-Oswald text-[14px] text-[#72728c] tracking-[1.9px]">
            Nulla pretium tincidunt felis, nec.
          </p>
        </div>
      </div>

      <div className="flex items-end w-fit pl-[15px]">
        <div className="w-[71px] h-[70px]">
          <img src={wallet} alt="" className="w-full" />
        </div>
        <div className="ml-[28px]">
          <p className="font-Oswald text-[18px] text-[#181818]">The Best Prices</p>
          <p className="font-Oswald text-[14px] text-[#72728c] tracking-[1.9px]">
            Sollicitudin mauris lobortis in.
          </p>
        </div>
      </div>

      <div className="flex items-end w-fit pl-[15px]">
        <div className="w-[71px] h-[70px]">
          <img src={suitcase} alt="" className="w-full" />
        </div>
        <div className="ml-[28px]">
          <p className="font-Oswald text-[18px] text-[#181818]">Amazing Services</p>
          <p className="font-Oswald text-[14px] text-[#72728c] tracking-[1.9px]">
            Nulla pretium tincidunt felis, nec.
          </p>
        </div>
      </div>
    </div>
   </div>
    </>
  );
}

export default Intro;
