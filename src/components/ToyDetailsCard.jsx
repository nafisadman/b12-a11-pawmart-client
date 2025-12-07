import React, { useContext, useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useParams } from "react-router";

const ToyDetailsCard = ({ key, toyDetails }) => {
  const { _id, name, location, imageUrl, description, price, category } =
    toyDetails;

  const notify = () => toast("Check your email for further instrucitons");
  const notify1 = () => toast("Item bought Successfully!");
  const handleBuyNow = () => {
    notify1();
  };

  const [service, setService] = useState();
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://b12-a11-pawmart-server.vercel.app/services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phoneNumber = form.phoneNumber.value;
    const additionalNote = form.additionalNote.value;

    const formData = {
      productId: _id,
      productName,
      buyerName,
      buyerEmail,
      quantity,
      price,
      address,
      phoneNumber,
      additionalNote,
      date: new Date(),
    };

    axios
      .post("https://b12-a11-pawmart-server.vercel.app/orders", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="hero bg-transparent ">
        <div className="hero-content flex-col lg:flex-row items-start">
          <img src={imageUrl} className="max-w-1/2 shadow-2xl" />
          <div className="flex flex-col gap-y-4">
            <h1 className="">#{_id}</h1>
            <h1 className="text-4xl">{name}</h1>
            <p className="font-bold text-secondary text-2xl">&#2547;{price}</p>
            <hr className="" />
            <p className="text-gray-500">{description}</p>
            <p className="">
              <span className="font-bold">Category: </span>
              {category}
            </p>
            <div
              onClick={handleBuyNow}
              to={`/toy-details/${_id}`}
              className="btn btn-block bg-secondary hover:bg-black hover:text-white"
            >
              Buy Now
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <CiUser />
            <input type="text" placeholder="Your Full Name" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        {/* Button */}
        <button
          onClick={notify}
          className="btn bg-transparent hover:bg-secondary join-item"
        >
          Try Now
        </button>
        <ToastContainer />
      </div>
      {/* Modal */}
      <div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Adapt / Order
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-fit">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form
              onSubmit={handleOrder}
              className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
            >
              <legend className="fieldset-legend">Order Details</legend>

              <label className="label">Product Name</label>
              <input
                type="text"
                className="input"
                name="productName"
                placeholder="Insert Product Name"
                defaultValue={name}
                readOnly
                disabled
              />

              <label className="label">Buyer Name</label>
              <input
                type="text"
                className="input"
                name="buyerName"
                placeholder="Insert Buyer Name"
                defaultValue={user?.displayName}
              />

              <label className="label">Buyer Email</label>
              <input
                type="email"
                className="input"
                name="buyerEmail"
                placeholder="Insert Buyer Email"
                readOnly
                defaultValue={user?.email}
                disabled
              />

              <label className="label">Quantity</label>
              <input
                type="number"
                className="input"
                name="quantity"
                placeholder="Insert Quantity"
                required
              />

              <label className="label">Price</label>
              <input
                type="number"
                className="input"
                name="price"
                placeholder="Insert Price"
                readOnly
                defaultValue={service?.price}
                disabled
              />

              <label className="label">Address</label>
              <input
                type="text"
                className="input"
                name="address"
                placeholder="Insert Address"
                required
              />

              <label className="label">Phone Number</label>
              <input
                type="number"
                className="input"
                name="phoneNumber"
                placeholder="Insert Phone Number"
                required
              />

              <label className="label">Addional Note</label>
              <textarea
                type="text"
                className="input"
                name="additionalNote"
                placeholder="Insert Addional Note"
              />

              <button type="submit" className="btn btn-primary">
                Order
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
