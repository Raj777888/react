import React from "react";
import team_1  from "../../../assets/team_1.jpg"
import team_2  from "../../../assets/team_2.jpg"
import team_3  from "../../../assets/team_3.jpg"
import team_4  from "../../../assets/team_4.jpg"
function Team() {
    const team =[
       { image:team_1
        ,
    name:"Margaret Smith",
    description:"Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",

    },
       { image:team_2
        ,
    name:"James Williams",
    description:"Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",

    },
       { image:team_3
        ,
    name:"Michael James",
    description:"Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",

    },
       { image:team_4
        ,
    name:"Noah Smith",
    description:"Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",

    },
    ]
  return (
    <>
     <div className="py-[90px] w-8/10 m-auto">
       <div className="w-fit m-auto">
        <h1 className="tracking-[2px] font-Oswald text-[12px]  uppercase text-center">
          simply amazing places
        </h1>
        <p className="mt-[16px]  font-Oswald  text-[48px]">
          Meet the Team
        </p>
      </div>
      <div className="flex pt-[90px] space-x-[10px]">
         {team.map((val,i)=>{
            return(
                <div key={i} className="flex flex-col items-center text-center px-[15px]" >
                    <div className="w-[195px] h-[195px] ">
                        <img src={val.image} alt={val.title} className="rounded-[50%]"/>
                    </div>
                    <p className="mt-[37px] text-[24px] font-Oswald leading-[1.2] text-[#333431d6]">{val.name}</p>
                    <p className="mt-[22px] text-[14px] leading-[1.9285] text-[#72728c]">{val.description}</p>
                </div>
            );
         })}   
      </div>
     </div>
    </>
  );
}

export default Team;
