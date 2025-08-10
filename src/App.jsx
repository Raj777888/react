import "./App.css";

import logo from "../src/assets/logo.webp";
import background from "../src/assets/background.jpg";
import owl from "../src/assets/owl.png";
import fb from "../src/assets/fb.png";
import tt from "../src/assets/tt.png";
import menu from "../src/assets/menu.png";
import pg from "../src/assets/pg.jpg";
import bg from "../src/assets/bg.jpg";
import truck from "../src/assets/truck.jpg";
import wine from "../src/assets/wine.jpg";
import steak from "../src/assets/steak.jpg";
import prawn from "../src/assets/prawn.jpg";
import pour from "../src/assets/pour.jpg";
import saussage from "../src/assets/saussage.jpg";
import bottle from "../src/assets/bottle.jpg";
import glass from "../src/assets/glass.jpg";
import ice from "../src/assets/ice.jpg";
import cake from "../src/assets/cake.jpg";
import girl from "../src/assets/girl.jpg";
import table from "../src/assets/table.jpg";
import n from "../src/assets/n.jpg";
import p1 from "../src/assets/p1.jpg";
import blog from "../src/assets/blog.jpg";
import bl from "../src/assets/bl.webp";
import blo from "../src/assets/blo.webp";
import b from "../src/assets/b.jpg";
import c from "../src/assets/c.jpg";
import o from "../src/assets/o.jpg";
import q from "../src/assets/q.jpg";
import f from "../src/assets/f.jpg";
import g from "../src/assets/g.jpg";
import h from "../src/assets/h.jpg";
import m from "../src/assets/m.jpg";
import j from "../src/assets/j.jpg";
import k from "../src/assets/k.jpg";

function App() {
  let a = " text-[14px] font-san  uppercase";
  let p = " 6 h-6";
  let t = "font-san text-[22px] mb-[10px] font-medium ";
  let s = " text-[16px] font-[poppins] mb-[10px] text-gray-500";
  let d =
    " italic text-[30px] text-red-500 font-courgette text-center leading-none mb-[10px] ";
  let e =
    "  font-Poppins text-[50px] uppercase font-bold tracking-wide text-center leading-none mb-[20px] ";
  let i =
    "px-[13px] py-[9px] rounded-[8px] bg-white border-2 border-[#D9D9D9] ";
  return (
    <>
      {/* hero section */}
      <section>
        {/* background image */}
        <img
          src={background}
          alt=""
          className="w-full h-screen object-cover relative"
        />

        <div className="align-middle flex absolute top-8 left-1/2 transform -translate-x-1/2 justify-between items-center w-9/10 z-10">
          <div>
            <img src={logo} alt="mountain" className="h-fit" />
          </div>

          <header className="flex gap-6 text-white ">
            <div className={a}>Home</div>
            <div className={a}>Menu</div>
            <div className={a}>Reservation</div>
            <div className={a}>Gallery</div>
            <div className={a}>About</div>
            <div className={a}>Blog</div>
            <div className={a}>Contact</div>
            <div className={p}>
              <img src={owl} alt="" className="h-full " />
            </div>
            <div className={p}>
              <img src={fb} alt="" className="h-full" />
            </div>
            <div className={p}>
              <img src={tt} alt="" className="h-full" />
            </div>
            <div className={p}>
              <img src={menu} alt="" className="h-full" />
            </div>
          </header>
        </div>

        <div className="left-1/2 bottom-1/4  transform -translate-x-1/2  absolute text-center">
          <div>
            <h2 className="font-courgette  text-6xl text-white  mb-[10px]">
              Welcome to
            </h2>
            <h2 className="font-Poppins text-[78px] uppercase font-bold tracking-[5px] text-white">
              patao place
            </h2>
            <button className="px-[30px] py-[9px] text-[14px] font-medium tracking-wide m-auto align-center mt-5 rounded-lg bg-white hover:bg-red-500  text-red-400 hover:text-white  duration-[0.3s] uppercase  ">
              look menu
            </button>
          </div>
        </div>
      </section>
      {/* welcome section */}
      <section className=" py-[90px]">
        <div className="grid grid-cols-2 w-9/10 m-auto ">
          <div className=" pb-[30px] text-center w-8/10 m-auto px-[10px]">
            <h3 className={d}>Italian Restaurant</h3>
            <h2 className={e + "pb-[30px]"}>Welcome</h2>
            <p className="text-[17px] mb-[15px] pb-[30px] font-normal text-gray-500">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque. Donec quis lorem nulla. Nunc eu
              odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet
              lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
            </p>
            <p className="  font-medium text-[18px] uppercase">Our Story </p>
          </div>
          <div>
            <div className=" w-9/12 m-auto">
              <img
                src={pg}
                alt=""
                className="w-fit h-full object-cover rounded-[7px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* discover section */}
      <section>
        <div className=" relative ">
          <img
            src={bg}
            alt="bg"
            className=" h-[350px] opacity-90  w-1/1 object-cover "
          />
          <div className=" absolute top-2/4  transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 text-center ">
            <p className={d}> Discover</p>
            <p className=" font-Poppins text-6xl uppercase font-bold tracking-wide text-white">
              Pato Place
            </p>
          </div>
        </div>
      </section>

      {/* wine section */}
      <section className="py-[90px]">
        <div className="grid grid-cols-3 w-9/10 gap-[15px] m-auto">
          <div className="  p-4 border-1 border-[#66666639]  rounded-[10px]">
            <div className=" mb-[20px]">
              <img src={truck} alt="" className="rounded-[8px]" />
            </div>
            <p className={t}>Romantic Restaurant</p>
            <p className={s}>
              {" "}
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <p className=" font-medium text-[#666666]">Learn More</p>
          </div>
          <div className=" p-4 border-1 border-[#66666639]  rounded-[10px]">
            <div className=" mb-[20px]">
              <img src={steak} alt="" className="rounded-[8px]" />
            </div>
            <p className={t}>Delicious Food</p>
            <p className={s}>
              {" "}
              Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh
              urna
            </p>
            <p className="font-medium text-[#666666]">Learn More</p>
          </div>
          <div className=" p-4 border-1 border-[#66666639]  rounded-[10px]">
            <div className=" mb-[20px]">
              <img src={wine} alt="" className="rounded-[8px]" />
            </div>
            <p className={t}>Red Wines You Love</p>
            <p className={s}>
              {" "}
              Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </p>
            <p className="font-medium text-[#666666]">Learn More</p>
          </div>
        </div>
      </section>

      {/* menu section */}
      <section className="bg-[#F2EEE9] py-[90px]">
        <div className="text-center mb-[40px]">
          <p className={d}> Discover</p>
          <p className={e}>Our Menu</p>
        </div>
        <div className="w-9/10 m-auto ">
          {/* grid rows */}
          <div className="grid grid-cols-3 gap-[10px] text-[22px] font-medium ">
            <div class="  relative">
              <img
                src={prawn}
                alt=""
                className=" rounded-[7px] h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[51%] transform -translate-y-1/2 text-[22px] px-[30px] py-[7px] mt-5 rounded-[8px] text-black bg-white hover:bg-[#ED2D2E] hover:text-white duration-[0.3s] font-medium  ">
                Lunch
              </div>
            </div>
            <div class="       relative">
              <img
                src={bottle}
                alt=""
                className=" rounded-[7px] h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 text-[22px] transform -translate-x-[51%] transform -translate-y-1/2  px-[30px] py-[7px] mt-5 rounded-[8px] text-black bg-white hover:bg-[#ED2D2E] hover:text-white duration-[0.3s] font-medium  ">
                Dinner
              </div>
            </div>
            {/* nested flex */}
            <div className="flex flex-col w-[100%] justify-between h-[604px]">
              <div class=" w-1/1 h-1/2     pb-[10px] relative">
                <img
                  src={pour}
                  alt=""
                  className=" rounded-[7px] object-cover w-[100%] h-[100%]"
                />
                <div className="absolute top-1/2 left-1/2 text-[22px] transform -translate-x-[51%] transform -translate-y-1/2  px-[30px] py-[7px] mt-5 rounded-[8px] text-black bg-white hover:bg-[#ED2D2E] hover:text-white duration-[0.3s]   ">
                  Drink
                </div>
              </div>
              <div class="   w-1/1  h-1/2      relative">
                <img
                  src={saussage}
                  alt=""
                  className=" rounded-[7px]  w-[100%] h-[100%] object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-[51%] transform -translate-y-1/2  px-[30px] py-[7px] mt-5 rounded-[8px] text-black bg-white hover:bg-[#ED2D2E] hover:text-white duration-[0.3s] font-medium  ">
                  Lunch
                </div>
              </div>
            </div>

            {/* grid rows 2nd */}
            <div class=" col-span-2 w-1/1 h-[225px]  overflow-hidden relative">
              <img
                src={glass}
                alt=""
                className=" rounded-[7px] w-[100%]  h-1/1  object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[51%] transform -translate-y-1/2  px-[30px] py-[7px] mt-5 rounded-[8px] text-black bg-white hover:bg-[#ED2D2E] hover:text-white duration-[0.3s] font-medium  ">
                Happly hour
              </div>
            </div>
            <div class=" h-[225px]   relative">
              <img
                src={ice}
                alt=""
                className=" rounded-[7px] w-[100%]  h-1/1  object-cover"
              />
              <div className="uppercase text-[22px] absolute top-1/2 left-1/2 transform -translate-x-[51%] transform -translate-y-1/2  px-[30px] py-[7px] mt-5 rounded-[8px] text-black bg-white hover:bg-[#ED2D2E] hover:text-white duration-[0.3s] font-medium  ">
                Desert
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* upcomming section */}
      <section
        style={{ backgroundImage: `url(${cake})` }}
        className="py-[45px] bg-cover bg-center h-screen"
      >
        <div className="w-8/10 m-auto">
          <div className="mb-[20px]">
            <h2 className={d}>Upcomming</h2>
            <p className={e + "text-white"}>Events</p>
          </div>
          <div className="flex flex-row  ">
            <div className="w-1/2 ">
              <img
                src={girl}
                alt=""
                className="w-full object-cover rounded-l-[10px] "
              />
            </div>
            <div className="w-1/2 bg-white p-[40px] pb-[35px] flex flex-col gap-[10px] justify-evenly rounded-r-[10px]">
              <p className="uppercase font-poppins text-[22px] font-medium text-center text-[#222222]">
                Wines during specific nights
              </p>
              <p className="font-Roboto text-[15px] text-[#666666] text-center">
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                Sed fringilla, nunc sed imperdiet lacinia
              </p>
              <div className="flex flex-row gap-x-[10px] justify-around mb-[20px]">
                <div className="flex flex-col">
                  <p className="text-[#ec1d25] font-semibold text-[40px]">25</p>
                  <p className="text-[#666666] uppercase text-[14px] font-bold">
                    Days
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#ec1d25] font-semibold text-[40px]">11</p>
                  <p className="text-[#666666] uppercase text-[14px]  font-bold">
                    Hours
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#ec1d25] font-semibold text-[40px]">10</p>
                  <p className="text-[#666666] uppercase text-[14px]  font-bold">
                    minutes
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#ec1d25] font-semibold text-[40px]">0</p>
                  <p className="text-[#666666] uppercase text-[14px]  font-bold">
                    second
                  </p>
                </div>
              </div>
              <div className="text-center   font-bold">View Details</div>
            </div>
          </div>
        </div>
      </section>
      {/* reservation */}
      <section className="bg-[#EFEFEF] py-[90px]">
        {/* reservation text */}
        <div className="flex w-9/10 m-auto py-[45px] text-center">
          <div className="w-1/2">
            <div className="mb-[30px]">
              <h1 className={d}>Reservation</h1>
              <p className={e}>Book table</p>
            </div>
            <div>
              {/* reservation inputs */}

              <form action="">
                <div className="grid grid-cols-[1fr_1fr] gap-x-[10px] gap-y-[20px] w-9/10 m-auto">
                  <div className="flex flex-col ">
                    <label htmlFor="Date" className="text-left">
                      Date
                    </label>
                    <input type="date" name="" id="Date" className={i} />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="name" className="text-left">
                      Name
                    </label>
                    <input
                      type="Name"
                      name="name"
                      id="name"
                      className={i}
                      placeholder="e.g. raj"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="Time" className="text-left">
                      Time
                    </label>
                    <input type="Time" name="Time" id="Date" className={i} />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="phone" className="text-left">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. 987-654-3210"
                      required
                      className={i}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="People" className="text-left">
                      People
                    </label>
                    <input
                      type="number"
                      name="People"
                      placeholder="e.g. 1"
                      id="People"
                      className={i}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="email" className="text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. usrename123@email.com"
                      id="email"
                      className={i}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-[30px] px-[50px] py-[9px] capitalize rounded-[9px] bg-black hover:bg-red-500 duration-[0.3s] text-white w-fit m-auto">
              book now
            </div>
          </div>

          {/* reservation image */}
          <div className="w-[400px] h-[350px] m-auto">
            <img src={table} alt="" className=" rounded-[10px]" />
          </div>
        </div>
      </section>

      {/* testomonial */}
      <section className="py-[90px]  border-b-1 ">
        <div>
          <h1 className={d}>Customers Say</h1>
          <p className={e}>Review</p>
        </div>
        <div className="w-8/10 m-auto py-[30px] ">
          <div className="w-[110px] h-[110px] m-auto ">
            <img
              src={p1}
              alt=""
              className="w-full h-full rounded-[100%] border-4 border-red-500 "
            />
          </div>
          <div className=" w-8/10 m-auto flex items-center justify-between">
            <div className="rotate-[180deg]">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
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
            <div className="text-center mt-[33px]">
              <p className="text-center text-[18px]">
                “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                viverra dui ”
              </p>
              <div className="flex justify-center mt-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
           9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
           9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
           9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
           9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-[10px]">Marie Simmons ˗ New York</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
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
          <div className="flex w-fit m-auto mt-[30px] gap-[6px]">
            <div className="w-[8px] h-[8px] bg-[#666666] rounded-[18px]"></div>

            <div className="w-[8px] h-[8px] bg-[#666666] rounded-[18px]"></div>

            <div className="w-[8px] h-[8px] bg-[#666666] rounded-[18px]"></div>

            <div className="w-[8px] h-[8px] bg-[#666666] rounded-[18px]"></div>

            <div className="w-[8px] h-[8px] bg-[#666666] rounded-[18px]"></div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-[90px]">
        <div className="mb-[45px]">
          <h1 className={d}>Latest News</h1>
          <p className={e}>The Blog</p>
        </div>
        <div className="grid grid-cols-3 w-9/10 gap-[15px] m-auto">
          <div className="  p-4 border-1 border-[#66666639]  rounded-[10px] ">
            <div className=" mb-[20px]">
              <img src={blog} alt="" className="rounded-[8px]" />
            </div>
            <p className={t}>Romantic Restaurant</p>
            <p className={s}>
              {" "}
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <p className="">Learn More</p>
          </div>
          <div className=" p-4 border-1 border-[#66666639]  rounded-[10px] ">
            <div className=" mb-[20px]">
              <img src={blo} alt="" className="rounded-[8px]" />
            </div>
            <p className={t}>Delicious Food</p>
            <p className={s}>
              {" "}
              Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh
              urna
            </p>
            <p className="">Learn More</p>
          </div>
          <div className=" p-4 border-1 border-[#66666639]  rounded-[10px]">
            <div className=" mb-[20px]">
              <img src={bl} alt="" className="rounded-[8px]" />
            </div>
            <p className={t}>Red Wines You Love</p>
            <p className={s}>
              {" "}
              Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </p>
            <p className="">Learn More</p>
          </div>
        </div>
      </section>

      {/* ending section */}
      <section className="  bg-[#222222] py-[90px]">
        <div className="w-8/10 m-auto grid grid-cols-[1fr_1fr_1fr] ">
          <div className="p-[14px] flex flex-col gap-y-[40px]">
            <div>
              <div className="text-white text-[24px] font-medium mb-[30px]">
                Contact Us
              </div>
              <div className=" mt-[10px]">
                <div className="flex mb-[5px]  ">
                  <div className="w-[20px] h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="white"
                        d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13m0-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                      />
                    </svg>
                  </div>
                  <div className="text-[#666666] text-[16px] font-regular w-fit ml-[10px]">
                    8th floor, 379 Hudson St, New York,
                  </div>
                </div>
                <div className="flex items-center  mb-[5px]  ">
                  <div className="w-[20px] h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M9.004 3.416C8.432 2.606 7.64 2.241 6.8 2.25c-.797.008-1.573.349-2.221.803A6.2 6.2 0 0 0 2.92 4.79c-.41.649-.706 1.416-.666 2.165c.193 3.603 2.22 7.453 5.067 10.302c2.845 2.846 6.644 4.824 10.48 4.446c.752-.074 1.463-.457 2.044-.945a5.8 5.8 0 0 0 1.443-1.84c.34-.692.543-1.49.431-2.267c-.116-.81-.569-1.534-1.402-2.014a16 16 0 0 1-.512-.31c-.15-.093-.31-.194-.504-.31a7.5 7.5 0 0 0-1.249-.618c-.447-.163-.958-.27-1.49-.197c-.551.076-1.063.336-1.506.802c-.341.36-.843.472-1.549.268c-.718-.208-1.526-.724-2.228-1.422c-.702-.696-1.233-1.51-1.46-2.245c-.224-.728-.125-1.263.225-1.632c.473-.498.725-1.052.778-1.638c.052-.57-.09-1.106-.293-1.574c-.304-.699-.82-1.394-1.224-1.936a22 22 0 0 1-.3-.41"
                      />
                    </svg>
                  </div>
                  <div className="text-[#666666] text-[16px] font-regular mb-[5px] ml-[10px]">
                    (+1) 96 716 6879
                  </div>
                </div>
                <div className="flex items-center mb-[5px]  ">
                  <div className="w-[20px] h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                      />
                    </svg>
                  </div>
                  <div className="text-[#666666] text-[16px] font-regular mb-[5px] ml-[10px]">
                    contact@site.com
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-[24px] font-medium  mb-[20px]">
                Opening Times
              </div>
              <div>
                <div className="flex items-center mb-[5px]  ">
                  <div className="w-[20px] h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8 4.414l-4-4V5.5h2v6.086L16.414 15z"
                      />
                    </svg>
                  </div>

                  <div className="text-[#666666]   text-[16px] font-regular mb-[5px] ml-[10px]">
                    09:30 AM – 11:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[14px]">
            <div className="text-white text-[24px] font-medium mb-[30px]">
              Latest twitter
            </div>
            <div className="mb-[20px]">
              <div className="flex items-center  mb-[5px]  ">
                <div className="w-[20px] h-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                    />
                  </svg>
                </div>
                <div className="text-red-500 font-light"> @colorlib</div>
              </div>

              <div className="text-[#666666] mb-[10px] font-light">
                Activello is a good option. It has a slider built into that
                displays the featured image in the slider.
                <samp className="text-red-500 font-light">
                  https://buff.ly/2zaSfAQ
                </samp>
              </div>
              <div className="text-[#666666]">21 Dec 2017</div>
            </div>
            <div>
              <div className="flex items-center  mb-[5px]  ">
                <div className="w-[20px] h-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                    />
                  </svg>
                </div>
                <div className="text-red-500 font-light"> @colorlib</div>
              </div>
              <div className="text-[#666666] mb-[10px] font-light">
                Activello is a good option. It has a slider built into that
                displays
                <samp className="text-red-500 font-light">
                  https://buff.ly/2zaSfAQ
                </samp>
              </div>
              <div className="text-[#666666]">21 Dec 2017</div>
            </div>
          </div>
          <div className="pl-[14px]">
            <div className="text-white text-[24px] font-medium mb-[30px] ">
              Gallery
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] h-[300px] gap-x-[15px] gap-y-[20px]">
              <img
                src={n}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={b}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={c}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={o}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={q}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={f}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={g}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={h}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={m}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={j}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={k}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
              <img
                src={blog}
                alt=""
                className="rounded-[8px] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
