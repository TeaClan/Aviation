import React from "react";
import "./home.scss";

import Header from "../../components/Header/Header";
import Travel from "../../components/Travel/Travel";
import Comfort from "../../components/Comfort/Comfort";
import Pricing from "../../components/Pricing/Pricing";
import Gallery from "../../components/Gallery/Gallery";
import Leadership from "../../components/Leadership/Leadership";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Travel />
      <Comfort />
      <Pricing />
      <Gallery />
      <Leadership />
      <Footer />
    </>
  );
};

export default Home;
