import React from "react";
import destination_1 from "../../../assets/destination_1.jpg";
import destination_2 from "../../../assets/destination_2.jpg";
import destination_3 from "../../../assets/destination_3.jpg";
import destination_4 from "../../../assets/destination_4.jpg";
import destination_5 from "../../../assets/destination_5.jpg";
import destination_6 from "../../../assets/destination_6.jpg";

function Card() {
  const card = [
    {
      img: destination_1, 
      title: "Bali",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_2,
      title: "Indonesia",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_3,
      title: "San Francisco",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_4, 
      title: "Paris",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_5,
      title: "Phi Phi Island",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_6,
      title: "Bali",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_1, 
      title: "Mykonos",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_1,
      title: "Bali",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
    {
      img: destination_1,
      title: "Bali",
      subtitle: "Nulla pretium tincidunt felis, nec.",
      price: "From $679",
    },
  ];

  return (
    <>
   
   <div className="py-[45px]">
     <div className="w-fit m-auto">
        <h1 className="tracking-[2px] font-Oswald text-[12px] text-[#72728c] uppercase text-center">simply amazing places</h1>
        <p className="mt-[26px] text-[#181818] font-Oswald text-[48px]"> Popular Destinations</p>
    </div>
    <div className="grid grid-cols-3 gap-6 w-8/10 m-auto pt-[40px]" >
      {card.map((val, i) => (
        <div key={i} className="bg-[#827b7b09] rounded-lg shadow-md border-[#66666633] border-[1px] ">
          <img src={val.img} alt={val.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-Oswald text-lg text-[#181818] mt-[15px]">{val.title}</h3>
            <p className="text-sm text-[#72728c]">{val.subtitle}</p>
            <p className="text-[16px] font-semibold text-[#181818] mt-[16px]">{val.price}</p>
          </div>
        </div>
      ))}
    </div>
   </div>
    </>
  );
}

export default Card;
