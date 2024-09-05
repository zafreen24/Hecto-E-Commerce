import React from "react";
import Slider from "react-slick";
import Rectangle from "../assets/Rectangle.png";
import chair14 from "../assets/chair14.png";
import rec2 from "../assets/rec2.png";
import Container from "./Container";

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "30px",
          top: "50%",
          transform: "translsateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}></ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="dots"
        style={{
          width: "10px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <section>
      <Container>
        <div className="text-center">
          <h2 className="font-sans text-[42px] font-bold text-[#1A0B5B]">
            Top Categories
          </h2>
        </div>

        <Slider {...settings}>
          <div className="">
            <div className="bg-[#F6F7FB] h-[270px] w-[270px] rounded-full text-center">
              <div className="flex justify-center">
                <img className="" src={chair14} alt="" />
              </div>
              <button className="py-[10px] px-[25px] bg-[#08D15F] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                View Shop
              </button>
            </div>
            <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
              <h3 className=" relative font-Sans font-normal text-[22px] text-[#0D0E43] ">
                Mini LCW chair
              </h3>
              <h4 className=" relative font-Sans font-normal text-[16px] text-[#1A0B5B] mt-[10px] ">
                $56.00
              </h4>
            </div>
          </div>
          <div className="">
            <div className="bg-[#F6F7FB] h-[270px] w-[270px] rounded-full text-center">
              <div className="flex justify-center">
                <img className="" src={chair14} alt="" />
              </div>
              <button className="py-[10px] px-[25px] bg-[#08D15F] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                View Shop
              </button>
            </div>
            <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
              <h3 className=" relative font-Sans font-normal text-[22px] text-[#0D0E43] ">
                Mini LCW chair
              </h3>
              <h4 className=" relative font-Sans font-normal text-[16px] text-[#1A0B5B] mt-[10px] ">
                $56.00
              </h4>
            </div>
          </div>
          <div className="">
            <div className="bg-[#F6F7FB] h-[270px] w-[270px] rounded-full text-center">
              <div className="flex justify-center">
                <img className="" src={chair14} alt="" />
              </div>
              <button className="py-[10px] px-[25px] bg-[#08D15F] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                View Shop
              </button>
            </div>
            <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
              <h3 className=" relative font-Sans font-normal text-[22px] text-[#0D0E43] ">
                Mini LCW chair
              </h3>
              <h4 className=" relative font-Sans font-normal text-[16px] text-[#1A0B5B] mt-[10px] ">
                $56.00
              </h4>
            </div>
          </div>
          <div className="">
            <div className="bg-[#F6F7FB] h-[270px] w-[270px] rounded-full text-center">
              <div className="flex justify-center">
                <img className="" src={chair14} alt="" />
              </div>
              <button className="py-[10px] px-[25px] bg-[#08D15F] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                View Shop
              </button>
            </div>
            <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
              <h3 className=" relative font-Sans font-normal text-[22px] text-[#0D0E43] ">
                Mini LCW chair
              </h3>
              <h4 className=" relative font-Sans font-normal text-[16px] text-[#1A0B5B] mt-[10px] ">
                $56.00
              </h4>
            </div>
          </div>
        </Slider>
      </Container>
      <div className="mt-[50px] px-3 flex items-center justify-center">
  <div className="relative w-full">
    <img className="object-cover w-full h-auto" src={Rectangle} alt="" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h3 className="font-Sans font-semibold lg:text-[42px] text-[32px] text-[#0D0E43]">
        Get Latest Update By Subscribing to Our Newsletter
      </h3>
      <button className="py-[10px] px-[25px] bg-[#FB2E86] mt-[20px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
        Shop Now
      </button>
    </div>
  </div>
</div>


      <div className="py-10">
        <img className="ml-[50%] translate-x-[-50%]" src={rec2} alt="" />
      </div>
    </section>
  );
};

export default Category;
