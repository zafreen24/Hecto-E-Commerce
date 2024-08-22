import React from 'react'
import Container from "./Container"
import Chair from "../assets/chair.png"
import Slider from "react-slick";




const Feature = () => {
  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   appendDots: dots => (
  //     <div
  //       style={{
  //         backgroundColor: "#ddd",
  //         borderRadius: "10px",
  //         padding: "10px"
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: i => (
  //     <div
  //       style={{
  //         width: "30px",
  //         color: "blue",
  //         border: "1px blue solid"
  //       }}
  //     >
  //       {i + 1}
  //     </div>
  //   )
  // };
  
  return (
    <section className="px-3 py-24">
      <Container>
        <div className="text-center">
          <h3 className="font-sans text-[42px] font-bold text-[#1A0B5B]">Featured Products</h3>
        </div>
  
        <div className="flex justify-between mt-10 ">
           <div className="w-[24%] bg-[#F6F7FB] pt-[20px] shadow-lg">
              <div className="">
                 <img className="ml-[50%] translate-x-[-50%]" src={Chair} alt="" />
                 <div className="relative w-full text-center bg-[#fff] py-[10px] mt-[50px]  after:absolute after:content-[''] after:bottom-0 after:right-0 after:w-full after:h-0 after:bg-[#2F1AC4] after:duration-300 after:ease-in-out after:hover:text-[#fff]  after:hover:h-full ">
                   <h4 className="font-sans relative text-[18px] font-bold text-[#FB2E86] z-50">Cantilever chair</h4>
                   <p className="font-sans relative text-[16px] font-bold text-[#000] z-50">Code - Y523201</p>
                   <h6 className="font-sans relative text-[16px] font-semibold text-[#000] z-50">$42.00</h6>
                 </div>
              </div>
           </div>
           <div className="w-[24%] bg-[#F6F7FB] pt-[20px] shadow-lg">
              <div className="">
                 <img className="ml-[50%] translate-x-[-50%] " src={Chair} alt="" />
                 <div className="relative w-full text-center bg-[#fff] py-[10px] mt-[50px]  after:absolute after:content-[''] after:bottom-0 after:right-0 after:w-full after:h-0 after:bg-[#2F1AC4] after:duration-300         after:ease-in-out after:hover:text-[#fff]  after:hover:h-full ">
                   <h4 className="font-sans relative text-[18px] font-bold text-[#FB2E86] hover:text-white z-50">Cantilever chair</h4>
                   <p className="font-sans relative text-[16px] font-bold text-[#000] z-50">Code - Y523201</p>
                   <h6 className="font-sans relative text-[16px] font-semibold text-[#000] z-50">$42.00</h6>
                 </div>
              </div>
           </div>
           <div className="w-[24%] bg-[#F6F7FB] pt-[20px] shadow-lg">
              <div className="">
                 <img className="ml-[50%] translate-x-[-50%] " src={Chair} alt="" />
                 <div className="relative w-full text-center bg-[#fff] py-[10px] mt-[50px]  after:absolute after:content-[''] after:bottom-0 after:right-0 after:w-full after:h-0 after:bg-[#2F1AC4] after:duration-300         after:ease-in-out after:hover:text-[#fff]  after:hover:h-full ">
                   <h4 className="font-sans relative text-[18px] font-bold text-[#FB2E86] hover:text-white z-50">Cantilever chair</h4>
                   <p className="font-sans relative text-[16px] font-bold text-[#000] z-50">Code - Y523201</p>
                   <h6 className="font-sans relative text-[16px] font-semibold text-[#000] z-50">$42.00</h6>
                 </div>
              </div>
           </div>
           <div className="w-[24%] bg-[#F6F7FB] pt-[20px] shadow-lg">
              <div className="">
                 <img className="ml-[50%] translate-x-[-50%] " src={Chair} alt="" />
                 <div className="relative w-full text-center bg-[#fff] py-[10px] mt-[50px]  after:absolute after:content-[''] after:bottom-0 after:right-0 after:w-full after:h-0 after:bg-[#2F1AC4] after:duration-300         after:ease-in-out after:hover:text-[#fff]  after:hover:h-full ">
                   <h4 className="font-sans relative text-[18px] font-bold text-[#FB2E86] hover:text-white z-50">Cantilever chair</h4>
                   <p className="font-sans relative text-[16px] font-bold text-[#000] z-50">Code - Y523201</p>
                   <h6 className="font-sans relative text-[16px] font-semibold text-[#000] z-50">$42.00</h6>
                 </div>
              </div>
           </div>
           
         </div>
      
        
      </Container>
    </section>
  )
}

export default Feature