import React from 'react'
import Chair from "../assets/chair.png"

const Featureitem = ({item}) => {    
  return (

           <div className="w-[93%] bg-[#F6F7FB] pt-[20px] shadow-lg ">
              <div className="">
                 <img className="ml-[50%] translate-x-[-50%]" src={item.thumbnail} alt="" />
                 <div className="relative w-full text-center bg-[#fff] py-[10px] mt-[50px]  after:absolute after:content-[''] after:bottom-0 after:right-0 after:w-full after:h-0 after:bg-[#2F1AC4] after:duration-300 after:ease-in-out after:hover:text-[#fff]  after:hover:h-full ">
                   <h4 className="font-sans relative text-[18px] font-bold text-[#FB2E86] z-50">{item.title}</h4>
                   <p className="font-sans relative text-[16px] font-bold text-[#000] z-50">Code - Y523201</p>
                   <h6 className="font-sans relative text-[16px] font-semibold text-[#000] z-50">${item.price}</h6>
                 </div>
              </div>
           </div>
     
  )
}

export default Featureitem