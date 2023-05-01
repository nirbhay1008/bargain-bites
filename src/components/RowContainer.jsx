import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 bg-rowBg ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 bg-cardOverlay rounded-lg p-2 my-12 h-auto  backdrop-blur-lg hover:drop-shadow-xl">
        <div className="w-full flex items-center justify-between">
          <motion.img
            src="https://firebasestorage.googleapis.com/v0/b/bargainbites-621a4.appspot.com/o/Images%2F1682848393358-i2.png?alt=media&token=2d45e524-feff-4219-8dbf-25e98fc11ab1"
            className=" h-auto w-40 -mt-8 ml-5 drop-shadow-2xl"
            whileHover={{ scale: 1.2 }}
            alt=""
          />
          <motion.div whileTap = {{scale:0.75}} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md ">
            <MdShoppingCart className="text-white"></MdShoppingCart>
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-1 items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg">
                choclate & Vanilla
            </p>
            <p className="mt-1 text-sm text-gray-500">
                45 Calories
            </p>
            <div className="flex items-center gap-8">
            <p className="text-lg  text-headingColor font-semibold"> <span className="text-sm text-red-500">$</span>5.35</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
