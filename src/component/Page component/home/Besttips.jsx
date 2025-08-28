import news_1 from "../../../assets/news_1.jpg";
import news_2 from "../../../assets/news_2.jpg";
import travello from "../../../assets/travello.jpeg";

function Besttips() {
  const a = [
    {
      img: news_1,
      date: "02",
      month: "june",
      title: "Best tips to travel light",
      subtitle: "lifestyle & travel",
      description:
        "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.",
    },
    {
      img: news_2,
      date: "05",
      month: "june",
      title: "How to make your journey easier",
      subtitle: "travel hacks",
      description:
        "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.",
    },
    {
      img: news_1,
      date: "10",
      month: "june",
      title: "Packing tricks for long trips",
      subtitle: "lifestyle",
      description:
        "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.",
    },
  ];

  // first item = featured
  // const [featured, ...a] = a;

  return (
    <div className="grid grid-cols-[1.5fr_1fr] w-8/10 m-auto gap-10 py-[90px]">
      {/* Left side: list of smaller news */}
      <div className=" space-y-5">
        {a.map((val, i) => (
          <div key={i} className="grid grid-cols-2 border-[#6d6d6d2c] shadow-md border-[2px] py-[10px] rounded-[10px]">
            <div>
              <img src={val.img} alt={val.title} className="w-9/10 m-auto rounded-lg" />
            </div>
            <div className="flex flex-col items-baseline">
              <div className="font-Oswald text-[32px] text-[#181818] leading-[0.75] flex items-end">
                {val.date}{" "}
                <span className="ml-1 font-Oswald text-[11px] text-[#72728c] uppercase tracking-[2px]">
                  {val.month}
                </span>
              </div>
              <div className="text-[20px] mt-3 font-Oswald text-[#181818]">
                {val.title}
              </div>
              <div className="text-[9px] text-[#8f8f8f] font-Oswald uppercase">
                {val.subtitle}
              </div>
              <div className="mt-[15px] text-sm text-[#555]">{val.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side: featured big article */}
      <div className=" m-auto px-[15px]">
      <div className=" w-[360px] m-auto ">
        <img src={travello} alt="" className="h-[100%] m-auto object-cover"/>
      </div>
      </div>
    </div>
  );
}

export default Besttips;
