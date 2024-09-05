import React from 'react'
import Container from "./Container"
import { IoMdCheckmark } from "react-icons/io";
import sofa2 from "../assets/sofa2.png"

const Discount = () => {
  return (
    <section>
        <Container>
        <div className="text-center">
          <h3 className="font-sans text-[42px] font-bold text-[#1A0B5B]">Discount Item</h3>
        </div>
        <div className="py-8 ">
         <ul className="flex justify-center text-center cursor-pointer gap-x-9">
                <li className="font-Sans font-normal text-[18px] text-[#151875] duration-300 ease-in-out hover:text-[#FB2E86] relative after:absolute after:content-[''] after:h-[8px] after:w-0 after:top-[50%] after:translate-y-[-50%] after:right-[-20px] after:bg-[#FB2E86] after:rounded-full after:duration-300 after:ease-in-out after:hover:w-[8px]  before:absolute before:content-[''] before:h-[2px] before:w-[40%] before:bottom-0 before:left-0 before:bg-[#FB2E86] before:duration-300 before:ease-in-out before:hover:w-full ">Wood Chair</li>
                <li className="font-Sans font-normal text-[18px] text-[#151875] duration-300 ease-in-out hover:text-[#FB2E86] relative after:absolute after:content-[''] after:h-[8px] after:w-0 after:top-[50%] after:translate-y-[-50%] after:right-[-20px] after:bg-[#FB2E86] after:rounded-full after:duration-300 after:ease-in-out after:hover:w-[8px]  before:absolute before:content-[''] before:h-[2px] before:w-0 before:bottom-0 before:left-0 before:bg-[#FB2E86] before:duration-300 before:ease-in-out before:hover:w-full ">Plastic Chair</li>
                <li className="font-Sans font-normal text-[18px] text-[#151875] duration-300 ease-in-out hover:text-[#FB2E86] relative after:absolute after:content-[''] after:h-[8px] after:w-0 after:top-[50%] after:translate-y-[-50%] after:right-[-20px] after:bg-[#FB2E86] after:rounded-full after:duration-300 after:ease-in-out after:hover:w-[8px]  before:absolute before:content-[''] before:h-[2px] before:w-0 before:bottom-0 before:left-0 before:bg-[#FB2E86] before:duration-300 before:ease-in-out before:hover:w-full ">Sofa Colletion</li> 
         </ul>

        <div className="flex">
        <div className="w-[49%] my-16">
               <div className="">
                 <h2 className="font-sans text-[35px] font-bold text-[#151875] mt-16">20% Discount Of All Products
                 </h2>
                 <h3 className="font-sans text-[21px] font-medium text-[#FB2E86] after:rounded-full ">Eams Sofa Compact</h3>
                 <p className="font-sans text-[16px] text-[#ACABC3] font-medium my-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                 <div className="flex gap-x-8">
                    <div className="">
                      <div className="flex items-center my-3">
                      <IoMdCheckmark className="text-[#7569B2]"/>
                      <h5 className="font-sans text-[16px] text-[#ACABC3] font-medium ">Material expose like metals</h5>
                      </div>
                        <div className="flex items-center">
                        <IoMdCheckmark className="text-[#7569B2]"/>
                        <h5 className="font-sans text-[16px] text-[#ACABC3] font-medium ">Simple neutral colours.</h5>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center my-3">
                        <IoMdCheckmark className="text-[#7569B2]"/>
                        <h5 className="font-sans text-[16px] text-[#ACABC3] font-medium ">Clear lines and geomatric figures</h5>
                        </div>
                        <div className="flex items-start">
                        <IoMdCheckmark className="text-[#7569B2]"/>
                        <h5 className="font-sans text-[16px] text-[#ACABC3] font-medium ">Material expose like metals</h5>
                        </div>
                    </div>
                 </div>
               </div>
               <div className="flex mt-[50px] gap-6">
                <div className="">
                <button className='py-[12px] px-[30px] bg-[#FB2E86]  font-Sans font-semibold text-[16px] text-[#fff] '>Shop Now</button>
                </div>
            </div>
            </div>
     
            <div className="w-[49%]">
               <img className="w-full" src={sofa2} alt="" />
            </div>
          
        </div>
         
         </div>
        </Container>
    </section>
  )
}

export default Discount