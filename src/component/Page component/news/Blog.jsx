import React from "react";
import news_4 from "../../../assets/news_4.jpg";
function Blog() {
  const travel = [
    {
      image: news_4,
      date: "02",
      month: "june",
      title: "Best tips to travel light",
      subtitle: "lifestyle & travel",
      description:
        "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.",
      read: "Read More",
    },
    {
      image: news_4,
      date: "02",
      month: "june",
      title: "Best tips to travel light",
      subtitle: "lifestyle & travel",
      description:
        "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.",
      read: "Read More",
    },
    {
      image: news_4,
      date: "02",
      month: "june",
      title: "Best tips to travel light",
      subtitle: "lifestyle & travel",
      description:
        "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.",
      read: "Read More",
    },
  ];
  return (
    <>
      <div className="w-8/10 m-auto grid grid-cols-2">
        <div className="space-y-[20px] py-[90px]">
          {travel.map((val, i) => {
            return (
              <div key={i} className="border-[#6d6d6d42] border-[2px] shadow-[+7px_+7px_7px_#6d6d6d42] rounded-[7px] p-[5px]">
                <div>
                  <img src={val.image} alt={val.title} className="w-full rounded-[7px]" />
                </div>
                <div className="pt-[39px] ml-[10px]">
                    <div>
                        <p className="text-[48px] text-[#181818] leading-[0.75] font-Oswald"> {val.date}<span className="text-[11px] text-[#72728c] font-Oswald uppercase tracking-[0.2em] ml-[4px]" >{val.month}</span></p>
                    </div>
                    <div className="mt-[17px] text-[28px] font-Oswald text-[rgba(24,24,24,1)]">{val.title}</div>
                    <div className="text-[9px] font-Oswald tracking-[0.2em] uppercase text-[#8f8f8f] "> {val.subtitle}</div>
                    <div className="text-[14px] leading-[1.9285] text-[#72728c] mt-[14px]">{val.description}</div>
                    <div>{val.read}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Blog;
