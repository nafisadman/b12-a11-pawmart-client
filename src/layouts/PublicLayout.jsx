import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";

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
        <div className="w-11/12 mx-auto my-3 grid grid-cols-1 md:grid-cols-4 md:gap-5">
          <section className="main col-span-1 md:col-span-3">
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
