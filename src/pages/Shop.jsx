import React from "react";
import Container from "../Components/Container";

const Shop = () => {
   
  return (
    <>
      <section className="bg-[#F6F5FF]">
        <Container>
          <div className="py-[50px]">
            <h3 className="font-Sans font-bold text-[42px] text-[#0D0E43]">
              About Us
            </h3>
            <div className="flex ">
              <h4 className="font-bold text-[16px] text-[#0D0E43]">Home ,</h4>
              <h3 className=" font-bold text-[16px] text-[#0D0E43]">Pages ,</h3>
              <p className="font-bold text-[16px] text-[#FB2E86]">About Us</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shop;
