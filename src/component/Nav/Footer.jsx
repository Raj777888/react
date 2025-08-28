import Button from "../Button";
import foot from "../../assets/foot.jpg";
import { Phone, MapPin, Mail } from "lucide-react"; 

function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${foot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative text-white"
    >
      <div className="w-10/12 m-auto py-16 text-center">
        {/* Newsletter Section */}
        <h1 className="font-Oswald text-[36px] leading-[1.2]">
          Subscribe to our newsletter to get the latest trends & news
        </h1>
        <p className="text-[18px] font-light mt-3">Join our database NOW!</p>

        {/* Input + Button */}
        <form
          action=""
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
        >
          <input
            type="text"
            placeholder="Name"
            className="h-[50px] w-full md:w-[300px] rounded-md bg-white/40 pl-4 placeholder-white text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your e-mail"
            className="h-[50px] w-full md:w-[300px] rounded-md bg-white/40 pl-4 placeholder-white text-white focus:outline-none"
          />
          <button
            type="submit"
            className="h-[50px] px-8 bg-white/40 text-white rounded-md uppercase font-medium"
          >
            Subscribe
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* Block 1 */}
          <div className="flex flex-col items-center">
            <Phone size={40} />
            <h3 className="text-[20px] font-Oswald uppercase mt-4">
              Give us a call
            </h3>
            <p className="mt-2 text-[14px]">
              Office Landline: +44 5567 32 664 567
            </p>
            <p className="text-[14px]">Mobile: +44 5567 89 3322 332</p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center">
            <MapPin size={40} />
            <h3 className="text-[20px] font-Oswald uppercase mt-4">
              Come & Drop By
            </h3>
            <p className="mt-2 text-[14px]">
              4124 Barnes Street, Sanford, FL 32771
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center">
            <Mail size={40} />
            <h3 className="text-[20px] font-Oswald uppercase mt-4">
              Send us a message
            </h3>
            <p className="mt-2 text-[14px]">youremail@gmail.com</p>
            <p className="text-[14px]">Office@yourbusinessname.com</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 text-[14px] text-gray-200">
          ©2025 All rights reserved | This template is made with ❤️ by Colorlib
        </div>
      </div>
    </div>
  );
}

export default Footer;
