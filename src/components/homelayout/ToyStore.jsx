import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ToyItem from "./ToyItem";

const ToyStore = () => {
  const data = useLoaderData();
  const [services, setServices] = useState(data);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://b12-a11-pawmart-server.vercel.app/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-3">Recent Listings</h1>
      <select
        onChange={(e) => setCategory(e.target.value)}
        defaultValue="Pick a color"
        className="select"
      >
        <option disabled={true}>Pick an item</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care Products">Care Products</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((toy) => (
          <ToyItem toy={toy}></ToyItem>
        ))}
      </div>
    </div>
  );
};

export default ToyStore;
