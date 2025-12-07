import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ToyItem from "../components/homelayout/ToyItem";
import Loading from "./Loading";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Fetching data via Axios
    axios
      .get(
        `https://b12-a11-pawmart-server.vercel.app/services?category=${categoryName}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <Loading />;

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">
          {categoryName === "Care Products"
            ? "Pet Care Products"
            : categoryName}
        </h1>
        <div className="divider divider-primary w-24 mx-auto"></div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((toy) => (
            <ToyItem key={toy._id} toy={toy} />
          ))}
        </div>
      ) : (
        <div className="card w-full bg-base-200 shadow-xl mt-6">
          <div className="card-body items-center text-center py-16">
            <h3 className="card-title text-2xl text-base-content opacity-50">
              No items found
            </h3>
            <p className="text-base-content/60">
              It looks like this category is empty right now.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilteredProducts;
