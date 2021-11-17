import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import OnlineShopServices from "../OnlineShopServices/OnlineShopServices";
import ProductsHome from "../ProductsHome/ProductsHome";
import Stats from "../Stats/Stats";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OnlineShopServices></OnlineShopServices>
      <ProductsHome></ProductsHome>
      <Stats></Stats>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
