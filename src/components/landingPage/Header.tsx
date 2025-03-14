
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // Importing angle/down arrow icon
import userimage from "../../assets/userimage.svg";

function Header({ showAuthButtons = true }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white flex items-center justify-between w-[100%] h-[110px] p-10">
      <div>
        <p className="text-[#28A745] font-roboto text-[28px] font-bold leading-[33.6px]">
          EduFund
        </p>
      </div>
      <div className="flex gap-[10px] font-roboto text-[16px] leading-[19.2px]">
        <div>Start a Fundraiser</div>
        <button onClick={() => navigate("/volunteer")}>Volunteer</button>
        <button onClick={() => navigate("/aboutus")}>About us</button>
      </div>
      <div className="flex gap-6 items-center">
        {showAuthButtons ? (
          <>
            <button
              className="font-600 text-[16px] bg-white border border-[#28A745] text-[#28A745] font-roboto w-[84px] h-[43px] cursor-pointer rounded-md shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.30)]"
              onClick={() => navigate("/signin")}
            >
              Log In
            </button>
            <button
              className="bg-[#28A745] hover:bg-green-700 text-white font-roboto w-[84px] h-[43px] cursor-pointer shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-md"
              onClick={() => navigate("")}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-[#28A745] hover:bg-green-700 text-white font-roboto w-[100px] h-[43px] cursor-pointer rounded-md"
              onClick={() => navigate("/donate")}
            >
              Donate
            </button>
            {/* User Profile & Dropdown */}
            <div className="flex items-center gap-2 relative">
              <img
                src={userimage} // Replace with actual user image
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <ChevronDown size={18} />
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-12 w-40 bg-white border rounded shadow-lg">
                  <ul className="py-2">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
