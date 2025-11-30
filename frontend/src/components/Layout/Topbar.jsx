import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-linear-to-r from-rabbit-red to-pink-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-5 py-2">
        {/* Left Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#Meta" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#Instagram" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#Twitter" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Center Text */}
        <div className="text-sm text-center grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>

        {/* Phone Number */}
        <div className="hidden md:block text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            + (243) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
