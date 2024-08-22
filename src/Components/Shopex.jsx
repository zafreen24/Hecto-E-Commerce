import React from 'react'
import Container from "./Container"
import car from "../assets/car.png"
import support from "../assets/support.png"
import medel from "../assets/medel.png"
import call from "../assets/call.png"

const Shopex = () => {
  return (
    <section className="px-3 py-10">
        <Container>
        <div className="text-center">
          <h3 className="font-sans text-[42px] font-bold text-[#1A0B5B]">What Shopex Offer!</h3>
        </div>

        <div className="flex justify-between mt-10 bg-[#fefafa] py-6 px-3 ">
            <div className="w-[24%] pt-6 py-6 bg-white">
                <div className="">
                    <img className="ml-[50%] translate-x-[-50%]" src={car} alt="" />
                    <div className="w-full text-center ">
                        <h4 className="font-sans text-[20px] font-bold text-[#151875] mt-5 mb-5">24/7 Support</h4>
                        <p className="font-sans text-[14px] text-[#1A0B5B] leading-4 font-semibold opacity-20 w-[60%] ml-[50%] translate-x-[-50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%] pt-6 py-6 bg-white">
                <div className="">
                    <img className="ml-[50%] translate-x-[-50%]" src={support} alt="" />
                    <div className="w-full text-center ">
                        <h4 className="font-sans text-[20px] font-bold text-[#151875] mt-5 mb-5">24/7 Support</h4>
                        <p className="font-sans text-[14px] text-[#1A0B5B] leading-4 font-semibold opacity-20 w-[60%] ml-[50%] translate-x-[-50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%] pt-6 py-6 bg-white">
                <div className="">
                    <img className="ml-[50%] translate-x-[-50%]" src={medel} alt="" />
                    <div className="w-full text-center ">
                        <h4 className="font-sans text-[20px] font-bold text-[#151875] mt-5 mb-5">24/7 Support</h4>
                        <p className="font-sans text-[14px] text-[#1A0B5B] leading-4 font-semibold opacity-20 w-[60%] ml-[50%] translate-x-[-50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%] pt-6 py-6 bg-white">
                <div className="">
                    <img className="ml-[50%] translate-x-[-50%]" src={call} alt="" />
                    <div className="w-full text-center ">
                        <h4 className="font-sans text-[20px] font-bold text-[#151875] mt-5 mb-5">24/7 Support</h4>
                        <p className="font-sans text-[14px] text-[#1A0B5B] leading-4 font-semibold opacity-20 w-[60%] ml-[50%] translate-x-[-50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Shopex