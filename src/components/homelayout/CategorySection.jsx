import React from "react";
import { Link } from "react-router";
import { FaDog, FaBone, FaShoppingBag, FaMedkit } from "react-icons/fa";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Pets",
      label: "Pets",
      icon: <FaDog className="text-4xl text-primary" />,
      color: "bg-orange-50",
    },
    {
      id: 2,
      name: "Food",
      label: "Pet Food",
      icon: <FaBone className="text-4xl text-primary" />,
      color: "bg-green-50",
    },
    {
      id: 3,
      name: "Accessories",
      label: "Accessories",
      icon: <FaShoppingBag className="text-4xl text-primary" />,
      color: "bg-blue-50",
    },
    {
      id: 4,
      name: "Care Products",
      label: "Pet Care Products",
      icon: <FaMedkit className="text-4xl text-primary" />,
      color: "bg-red-50",
    },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
        <p className="text-gray-500 mt-2">Find exactly what your furry friend needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            to={`/category-filtered-product/${category.name}`}
            key={category.id}
            className={`card hover:shadow-xl transition-all duration-300 cursor-pointer border border-base-200 ${category.color}`}
          >
            <div className="card-body items-center text-center">
              <div className="p-4 rounded-full bg-white shadow-sm mb-2">
                {category.icon}
              </div>
              <h3 className="card-title text-xl">{category.label}</h3>
              <p className="text-sm text-gray-500">Explore {category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;