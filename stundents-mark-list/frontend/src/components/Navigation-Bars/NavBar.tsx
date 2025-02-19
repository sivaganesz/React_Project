import { Link } from "react-router-dom";
import Logo from "../../assets/agile.png";
// import Button from "../Button-components/Button";
import userProfile from "../../assets/userProfile.png"
import logout from "../../assets/logout.png"

import { useState } from "react";
const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  function toggleDropDown() {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <>
      <div className="w-full border-b">
        <div className="flex items-center justify-between py-4 px-3 sm:px-10">
          {/* Logo Section */}
          <Link to="/studentInfo">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={Logo} alt="SANLOOP" className="w-9 h-9 sm:w-13 sm:h-13" />
              <h1 className="font-bold text-lg sm:text-2xl font-sans">
                <span className="font-serif">S</span>an<span className="font-serif">L</span>oop
              </h1>
            </div>
          </Link>

          <div className="cursor-pointer" onClick={toggleDropDown}>
            <div className="flex items-center gap-3">
              <img src={userProfile} alt="userProfile" className="w-10 h-10" />
              <h1 className="text-xl font-semibold">sivaganesz</h1>
            </div>
          </div>

          {
            isDropdownOpen && (
              <div className="absolute right-10  mt-25 bg-white border rounded-lg shadow-lg w-40 flex items-center hover:bg-gray-100">
                <img src={logout} alt="logout"  className="w-6 h-6 font-bold ml-2"/>
                <button className="w-full text-left px-4 py-2 text-gray-700">Logout</button>
              </div>
            )
          }
        </div>
      </div>

    </>
  );
};

export default NavBar;
