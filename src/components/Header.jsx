import React from "react";
import Logo from "./img/bargain_bites_logo.jpeg";
export const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-10">
      {/* fordesktop */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-1">
          <img src={Logo} className="w-13 h-20 object-cover" alt="Bargain Bites" />
          <p className="text-headingcolor text-md font-bold me-8">Bargain-Bites</p>
        </div>
        <ul className="flex items-center gap-8 ">
          <li>Home</li>
          <li>Menu</li>
          <li>About us</li>
          <li>Service</li>
        </ul>
      </div>
      {/* for logo */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
