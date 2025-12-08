import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import toast from "react-hot-toast";

const ToyItem = ({ toy }) => {
  useEffect(() => {
    // AOS.init();
  }, []);
  const { _id, name, imageUrl, description, price, location, category } = toy;
  console.log(toy);
  
  const handleViewMore = () => {
    toast("Item is being viewed")
  };
  return (
    <div>
      <div
        className="card bg-base-100 max-w-96 max-h-96 shadow-sm m-5 "
        // data-aos="fade-zoom-in"
        // data-aos-offset="200"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="600"
      >
        <figure>
          <img src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold flex justify-between">
            {name}
            <div className="badge badge-secondary">${price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <div className="badge">
              <FaMapMarkedAlt />
              {location}
            </div>
            <div className="badge">
              <TbCategory2 /> {category}
            </div>
          </div>
          <div>
            <Link
              to={`/toy-details/${_id}`}
              className="btn btn-block bg-transparent hover:bg-secondary hover:text-white"
              onClick={handleViewMore}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyItem;
