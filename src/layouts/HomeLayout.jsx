import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import HeroFigure from "../components/homelayout/HeroFigure";
import CustomerReview from "../components/homelayout/CustomerReview";
import CategorySection from "../components/homelayout/CategorySection"; 

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <div>
          <Slider></Slider>
        </div>
        
        {/* Add Category Section Here */}
        <div className="w-11/12 mx-auto my-3">
             <CategorySection />
        </div>

        <div className="w-11/12 mx-auto my-3">
          <section className="main">
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
        </div>
        <div>
          <HeroFigure></HeroFigure>
        </div>
        <div>
          <CustomerReview></CustomerReview>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;