import Navbar from "./Navbar";
import Topbar from "../Layout/Topbar";
import { HiBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar/>

      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
