import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{foodItems} , dispatch] = useStateValue()
  useEffect(() => {} , [filter]);
  return (
    <section className="w-full my-6 " id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot dishes
        </p>

        <div className="w-full flex items-start justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none py-6">
          {categories &&
            categories.map((category) => (
              <motion.div
              whileTap={{scale : 0.75}}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                 } w-24 min-w-[94 px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center  hover:bg-cartNumBg `}
                 onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-xl ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood className= {` ${filter === category.urlParamName ? "text-textColor" : "text-white"
                 } group-hover:text-textColor text-lg`}></IoFastFood>
                </div>
                <p className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer flag={false} data = {foodItems?.filter(n => n.category == filter)}></RowContainer>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
