import React, { useState } from "react";
import paytm from "../img/paytm.png";
import phonpay from "../img/phonpay.jpg";
import gpay from "../img/g-pay.png";
import { motion } from "framer-motion";

const PaymentPage = () => {
  const score = JSON.stringify(localStorage.getItem("score"));
  const discount = JSON.stringify(localStorage.getItem("discount"));
  

  console.log(parseInt(score));

//   if (parseInt(score) > parseInt(9)) setDiscount(50);
//   else if (parseInt(score) > parseInt(6)) setDiscount(25);
//   else if (parseInt(score) > parseInt(3) ) setDiscount(10);
  
  console.log(discount);
//   localStorage.setItem("score", JSON.stringify(0));
  return (
    <div className="w-full mt-2">
      <div className="flex flex-col items-center justify-center mt-5 gap-8">
        <p className="text-orange-600 font-semibold text-5xl">
          Congratulation You have scored {score} correct answers.
        </p>
        <p className="text-headingColor font-semibold text-5xl">
          You have Succesfully claimed {discount}% discount.
        </p>
      </div>

      <div className="flex flex-row items-center justify-evenly gap-2 mt-20">
        <img src={paytm} alt="paytm" className="w-[240px] h-20 cursor-pointer" />
        <img src={phonpay} alt="phonpay" className="w-[240px] h-20 cursor-pointer" />
        <img src={gpay} alt="gpay" className="w-[240px] h-20 cursor-pointer" />
      </div>

      <div className="flex items-center justify-center mt-12">
        <motion.button
          whileTap={{ scale: 0.8 }}
          type="button"
          className="w-[240px] p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg "
        >
          Proceed to pay
        </motion.button>
      </div>
    </div>
  );
};

export default PaymentPage;
