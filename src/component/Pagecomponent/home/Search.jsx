import Button from "../../Button";

function Search() {
  return (
    <>
      <div className=" py-[1px] relative">
        <div
          className="absolute rounded-[5px]  top-[-353px] w-[calc(100%-122px)] left-1/2 transform -translate-x-1/2 pt-[47px] px-[61px] pb-[59px] 
 bg-[#ffffff42]"
        >
          <div className="w-[247px] py-[16px]   bg-white m-auto font-Oswald text-[18px] text-[#2e2e2e] rounded-t-[10px] items-center text-center">
            Search for your trip
          </div>
            <div className=" bg-white py-[18px] pr-[83px] pl-[67px] rounded-[5px]">
          <form action="" c>
            <div className="flex pl-[10px] gap-x-[10px] " >
              <input type="text" placeholder="city" required  className="bg-[#f2f5f6] pl-[17px]"/>
              <input type="text"  placeholder="Departure" required className="bg-[#f2f5f6] pl-[17px]"/>
              <input type="text" placeholder="Arrival" required className="bg-[#f2f5f6] pl-[17px]"/>
              <input type="text"  placeholder="Budget" required className="bg-[#f2f5f6] pl-[17px]"/>
              <Button description="search"/>
            </div>
          </form>
        </div>
        </div>
        
      
      </div>
    </>
  );
}

export default Search;
