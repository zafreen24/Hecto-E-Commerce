import React from "react";
import Container from "../Components/Container";
import ECommerceBar from "../Components/ECommerceBar";
import Chair14 from "../assets/chair14.png";
import rec2 from "../assets/rec2.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { apiData } from "../Components/ContextApi";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";

const Pagesx = () => {
  let data = useContext(apiData);

  return (
    <>
      <section className="">
        <div className="py-[50px] bg-[#F6F5FF] px-16">
          <h3 className="font-Sans font-bold text-[42px] text-[#0D0E43]">
            Shop Grid Default
          </h3>
          <div className="flex ">
            <h4 className="font-bold text-[16px] text-[#0D0E43]">Home ,</h4>
            <h3 className=" font-bold text-[16px] text-[#0D0E43]">Pages ,</h3>
            <p className="font-bold text-[16px] text-[#FB2E86]">
              Shop Grid Default
            </p>
          </div>
        </div>
        <Container>
          <div className="">
            <ECommerceBar />
          </div>

          <div className="mt-[50px] lg:flex   justify-between px-3 flex-wrap">
            {data.map((item) => (
              <div className="lg:w-[24%] w-full sm:w-[50%] bg-[#fff] group">
                <div className="relative overflow-hidden py-[30px] px-[30px] bg-[#EBF4F3]">
                  <img src={item.thumbnail} alt="" />
                  <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#151875] group-hover:bottom-6 duration-500 ease-in-out">
                      <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#FFF] flex justify-center items-center"><FiShoppingCart />
                      </div>
                       
                      <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#FFF] flex justify-center items-center"><FaRegHeart /></div>
                      <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#FFF] flex justify-center items-center"><LuZoomIn /></div>
                    </div>
                </div>
                <div className=" text-center mt-[30px]">
                  <h3 className="font-Sans font-bold text-[22px] text-[#0D0E43]">
                   {item.title}
                  </h3>

                  <h4 className="font-Sans font-semibold text-[16px] text-[#FB2E86]">
                   ${item.price}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <img className="ml-[50%] translate-x-[-50%]" src={rec2} alt="" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pagesx;
