import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigation, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Loading from "./Loading";
import RightAside from "../components/homelayout/RightAside";
import Footer from "../components/Footer";
import ToyDetailsCard from "../components/ToyDetailsCard";
import { ToastContainer, toast } from "react-toastify";

const ToyDetails = () => {
  useEffect(() => {
    document.title = "ToyTopia | Toy Details";
  }, []);
  // const data = useLoaderData();
  const { id } = useParams();
  
  // const toyDetails = data.find((singleToy) => singleToy.toyId == id);
  // console.log("data: ", toyDetails);

  const [petDetails, setPetDetails] = useState([]);

  useEffect(()=>{
    fetch(`https://b12-a11-pawmart-server.vercel.app/services/${id}`)
    .then(res => res.json())
    .then(data => {
      setPetDetails(data);
    })
    .catch(err=> console.log(err));
  }, [id]);

  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 gap-5">
        <h2 className="font-bold mb-5">Toy Details</h2>
        <ToyDetailsCard key={id} toyDetails={petDetails}></ToyDetailsCard>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ToyDetails;
