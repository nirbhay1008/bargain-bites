import React, { useState } from "react";
import Logo from "../img/bargain_bites_logo.jpeg";
import { MdShoppingCart } from "react-icons/md";
import {motion} from "framer-motion";
import Avatar from '../img/avatar.png';
import {Link} from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
export const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user} , dispatch] = useStateValue()
  const login = async() =>{
    const {
      user : {refreshToken , providerData},
  } = await signInWithPopup(firebaseAuth , provider);
    dispatch ({
      type : actionType.SET_USER,
      user : providerData[0],
    });
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-10">
      {/* fordesktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={Logo}
            className="w-13 h-20 object-cover"
            alt="Bargain Bites"
          />
          <p className="flex items:center text-headingcolor text-md font-bold">
            Bargain-Bites
          </p>
          </Link>
        
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <motion.li whileTap = {{scale:0.6}} className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </motion.li>
            <motion.li whileTap = {{scale:0.6}}className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </motion.li>
            <motion.li whileTap = {{scale:0.6}} className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About us
            </motion.li>
            <motion.li whileTap = {{scale:0.6}} className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </motion.li>
          </ul>

          <div className="flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer -me-2"></MdShoppingCart>
            <div className=" absolute top-9 right-24 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">5</p>
            </div>
          </div>
          <div className="relative">
          <motion.img whileTap = {{scale:0.6}} src={Avatar} className = "w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" alt="userprofile" onClick={login}/>
          </div>
        </div>
      </div>
      {/* for logo */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
