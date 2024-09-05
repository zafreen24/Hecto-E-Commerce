import React from 'react'
import Container from "./Container"
import { apiData } from './ContextApi';
import {useContext} from 'react'
import Flex from './Flex';
import Featureitem from './Featureitem';
import Slider from "react-slick";
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[50px] w-[50px] rounded-full text-center leading-[50px] text-[20px] bg-[#979797] text-white absolute top-[38%] right-0 z-50 translate-y-[-50%] '><FaLongArrowAltRight className='inline-block'/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[50px] w-[50px] rounded-full text-center leading-[50px] text-[20px] bg-[#979797] text-white absolute top-[38%] left-[-21px] z-50 translate-y-[-50%] '><FaLongArrowAltLeft className='inline-block'/></div>
  );
}

const Feature = () => {
    
     let data = useContext(apiData)
     var settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    
    };

  return (
    <section className="px-3 py-24">
      <Container>
        <div className="text-center">
          <h3 className="font-sans text-[42px] font-bold text-[#1A0B5B]">Featured Products</h3>
        </div>


        <Slider {...settings}>
        {data.map((item)=>(
          <Featureitem item={item}/>
        ))}
        </Slider>
       
  
      </Container>
    </section>
  )
}

export default Feature