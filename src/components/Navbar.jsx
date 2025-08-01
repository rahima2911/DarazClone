import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTop(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full text-sm sticky top-0 z-50 bg-[#F85606] text-white">
      
      {/* Top Bar */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${hideTop ? "h-0 opacity-0" : "h-8 opacity-100"}`}>
        <div className="max-w-screen-xl mx-auto flex justify-end items-center space-x-7 py-1 px-4 text-xs">
          <Link to="/" className="hover:underline">SAVE MORE ON APP</Link>
          <Link to="/sell" className="hover:underline">SELL ON DARAZ</Link>

          <Link to="#" className="hover:underline">HELP & SUPPORT</Link>
          
          {/* ✅ Updated with actual routes */}
          <Link to="/login" className="hover:underline">LOGIN</Link>
          <Link to="/signup" className="hover:underline">SIGN UP</Link>

          <Link to="#" className="hover:underline">زبان تبدیل کریں</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#F85606]">
        <div className="max-w-screen-xl mx-auto flex  py-4 px-4 lg:px-14">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Daraz Logo" className="w-24 h-auto object-contain" />
          </div>

          {/* Search Bar */}
          <div className="flex w-full max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none"
            />
            <button className="bg-[#FFE1D2] px-4 py-2 rounded-r-md">
              <Search className="text-[#F85606]" size={20} />
            </button>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center pl-4">
            <FiShoppingCart size={26} className="text-white" />
          </div>

        </div>
      </div>
    </nav>
  );
}
