import React from 'react'
import Container from "./Container"
import sofa from "../assets/sofa.png"

const Sofa = () => {
  return (
   <section className="bg-[#F1F0FF]">
     <Container>
         <div className="flex justify-between">
            <div className="w-[49%]">
               <img className="w-full" src={sofa} alt="" />
            </div>
            <div className="w-[49%]">
               <div className="">
                 <h2 className="font-sans text-[43px] font-bold text-[#151875] mt-16">Unique Features Of leatest &
                 Trending Poducts</h2>
                 <h3 className="font-sans text-[16px] text-[#ACABC3] leading-4 font-medium mt-3 ml-4 relative after:absolute after:content-[''] after:h-[12px] after:w-[12px] after:top-0 after:left-[-20px] after:bg-[#FB2E86] after:rounded-full ">All frames constructed with hardwood solids and laminates</h3>
                 <h4 className="font-sans text-[16px] text-[#ACABC3] leading-4 font-medium my-5 ml-4 relative after:absolute after:content-[''] after:h-[12px] after:w-[12px] after:top-0 after:left-[-20px] after:bg-[#2B2BF5] after:rounded-full ">Reinforced with double wood dowels, glue, screw - nails corner 
                 blocks and machine nails</h4>
                 <h5 className="font-sans text-[16px] text-[#ACABC3] leading-4 font-medium ml-4 relative after:absolute after:content-[''] after:h-[12px] after:w-[12px] after:top-0 after:left-[-20px] after:bg-[#2BF5CC] after:rounded-full ">Arms, backs and seats are structurally reinforced</h5>
               </div>
               <div className="flex mt-[50px] gap-6">
                <div className="">
                <button className='py-[10px] px-[25px] bg-[#FB2E86]  font-Sans font-semibold text-[16px] text-[#fff] rounded-lg'>Add To Cart</button>
                </div>
                <div className="">
                <h2 className='font-Sans font-bold text-[14px] text-[#0D0E43]  '>B&B Italian Sofa </h2>
                <h3 className='font-Sans font-semibold text-[14px] text-[#0D0E43]  '>$32.00</h3>
                </div>
            </div>
            </div>
            
         </div>
     </Container>
   </section>
  )
}

export default Sofa