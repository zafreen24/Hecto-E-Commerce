import React from 'react'
import Container from "./Container"
import boxchair from "../assets/boxchair.png"
import boxchair2 from "../assets/boxchair2.png"
import boxchair3 from "../assets/boxchair3.png"
import boxchair4 from "../assets/chair9.png"
import blackclock from "../assets/blackclock.png"
import table from "../assets/table.png"
import chair11 from "../assets/chair11.png"
import chair12 from "../assets/chair12.png"
import chair13 from "../assets/chair13.png"


const Trend = () => {
  return (
     <section className="py-14">
        <Container>
        <div className="text-center">
          <h3 className="font-sans text-[42px] font-bold text-[#1A0B5B]">Trending Products</h3>
        </div>
        
        <div className="flex justify-between mt-10">
            <div className="w-[24%] bg-[#fff] py-3 shadow-lg shadow-[#f3f2f2]">
            <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={boxchair} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
            </div>

            <div className="w-[24%] bg-[#fff] py-3 shadow-lg shadow-[#f3f2f2]">
            <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={boxchair2} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
            
            </div>
            <div className="w-[24%] bg-[#fff] py-3 shadow-lg shadow-[#f3f2f2]">
            <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={boxchair3} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
            </div>
            <div className="w-[24%] bg-[#fff] py-3 shadow-lg shadow-[#f3f2f2]">
            <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={boxchair4} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
            </div>
        </div>

        <div className="flex justify-between py-16">
          <div className="w-[34%] bg-[#FFF6FB] py-4 px-4">
            <div className="flex justify-end"> 
              <div className="">
              <h4 className="font-sans text-[26px] font-semibold text-[#1A0B5B] w-full">23% off in all products</h4>
              <a className="font-sans  text-[18px] font-normal text-[#FB2E86]" href="">Shop Now</a>
              </div>
              <div className="">
                
              <img className="mt-10" src={blackclock} alt="" />
              </div>
            </div>
            
           
          </div>
          <div className="w-[34%] bg-[#FFF6FB] py-4 px-4">
            <div className="flex justify-end"> 
              <div className="">
              <h4 className="font-sans text-[26px] font-semibold text-[#1A0B5B] w-full">23% off in all products</h4>
              <a className="font-sans  text-[18px] font-normal text-[#FB2E86]" href="">Shop Now</a>
              </div>
              <div className="">
              <img className="mt-10" src={table} alt="" />
              </div>
            </div>
          </div>
          
          <div className="w-[29%]">
             <div className="">
              <div className="flex my-3">
              <div className="bg-[#F5F6F8] w-[107px] h-[74px]">
                <img src={chair11} alt="" />
              </div>
              <div className="px-3">
                <h5 className="text-[#151875] font-sans text-[16px] font-normal ">Executive Seat chair</h5>
                <p className="text-[#151875] font-sans text-[12px] font-normal">$32.00</p>
                </div>
              </div>
             </div>
             <div className="">
             <div className="flex my-6">
              <div className="bg-[#F5F6F8] w-[107px] h-[74px]">
                <img src={chair12} alt="" />
              </div>
              <div className="px-3">
                <h5 className="text-[#151875] font-sans text-[16px] font-normal ">Executive Seat chair</h5>
                <p className="text-[#151875] font-sans text-[12px] font-normal">$32.00</p>
                </div>
              </div>
             </div>
             <div className="">
             <div className="flex my-6">
              <div className="bg-[#F5F6F8] w-[107px] h-[74px]">
                <img src={chair13} alt="" />
              </div>
              <div className="px-3">
                <h5 className="text-[#151875] font-sans text-[16px] font-normal ">Executive Seat chair</h5>
                <p className="text-[#151875] font-sans text-[12px] font-normal">$32.00</p>
                </div>
              </div>
             </div>


             
          </div>
        </div>

        </Container> 
     </section>
  )
}

export default Trend