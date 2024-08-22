import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
   <section className='py-4 bg-[#f1f1f1]'>
    <Container>
     
      <div className="flex items-center justify-between">
        <div className="w-[20%] items-center">
        <img src={Logo} alt='Logo'/>
        </div>
        <div className="w-[50%]">
         <ul className='flex items-center text-center gap-x-10'>
          <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Home <IoIosArrowDown/></li>
          <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Pages </li>
          <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Products</li>
          <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Blog </li>
          <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'><Link to="/Shop">Shop</Link> </li>
          <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Contact</li>
         </ul>
        </div>
        <div className="w-[30%] flex items-center">
        <input type="search" className='w-[85%] bg-[#D9D9D9] h-[40px] outline-none px-5' />
        <IoSearch className='w-[15%] bg-[#FB2E86] h-[40px] py-[10px] text-white'/>
        </div>
      </div>
    
     
    </Container>
   </section>
  )
}

export default Navbar