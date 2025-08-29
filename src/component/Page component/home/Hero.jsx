import React from "react"
function Hero(props) {
  return (
    <>
    <div className=" relative  ">
   <img src={props.image} style={{ height: props.height }} alt=""  className="opacity-[90%] w-[100%]  object-cover"/>
    <div className="text-[100px] w-fit font-Oswald  text-white  absolute top-1/3   left-3/13   ">
      {props.description}
    </div>
    </div>
    </>
    
  )
}

export default Hero