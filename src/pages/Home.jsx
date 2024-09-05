import React from "react";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Category from "../Components/Category";
import Discount from "../Components/Discount";
import Leatest from "../Components/Leatest";
import Shopex from "../Components/Shopex";
import Sofa from "../Components/Sofa";
import Trend from "../Components/Trend";
import Feature from "../Components/Feature";

export const Home = () => {
  return (
    <>
      <Banner />
     <Feature/>
      <Leatest />
      <Shopex />
      <Sofa />
      <Trend />
      <Discount />
      <Category />
      <Blog />
      
    </>
  );
};
