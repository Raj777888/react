import { Link } from "react-router-dom";

function NavBar() {
  const nav = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Aboutus",
      path: "/About",
    },
    {
      title: "services",
      path: "/about",
      
    },
    {
      title: "News",
      path: "/news",

    },
    {
      title: "contact",
      path: "/about",

    },
  ];
  return (

    <div className="fixed    z-40 w-full   ">
      <div className="   m-auto  flex px-[10px] h-[148px] align-baseline items-center max-w-[1170px]" >
        
      <div className="cursor-pointer text-[30px] font-medium text-white line-clamp-[0.75] font-Oswald">
        Travello
      </div>
      <div className="flex  ml-[240px]">
        {nav.map((val, i) => {
          return (
            <Link to={val.path} key={i}>
              <div className="text-[16px] cursor-pointer text-white capitalize mr-[54px] font-Oswald ">{val.title}</div>
            </Link>
          );
        })}
      </div>
      <div className="text-[18px] font-medium  mx-[60px] font-Oswald text-white">
        Call us: 00-56 445 678 33
      </div>
      </div>
    </div>
  );
}

export default NavBar;
