import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useTitle from "../hooks/useTitle";
import toast from "react-hot-toast";

const UpdateService = () => {
  useTitle("Update Listing");
  
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState();
  const [category, setCategory] = useState(service?.category);
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`https://b12-a11-pawmart-server.vercel.app/services/${id}`)
      .then((res) => {
        setService(res.data);
        setCategory(res.data.category);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const pickupDate = form.pickupDate.value;
    const email = form.email.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;

    const formData = {
      name,
      category,
      price,
      location,
      pickupDate,
      email,
      imageUrl,
      description,
      createdAt: service?.createdAt,
    };

    console.log(formData);

    axios
      .put(`https://b12-a11-pawmart-server.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        toast("Item Updated Successfully!");
        navigation("/auth/my-services");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <form
          onSubmit={handleUpdate}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Product/Pet Name - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product / Pet Name
            </label>
            <input
              defaultValue={service?.name}
              type="text"
              name="name"
              required
              placeholder="e.g. Golden Retriever Puppy or Cat Food"
              className="w-full input"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white outline-none transition cursor-pointer"
            >
              <option disabled={true}>Pick an item</option>
              <option value="Pets">🐶 Pets</option>
              <option value="Food">🍖 Food</option>
              <option value="Accessories">🧸 Accessories</option>
              <option value="Care Products">💊 Care Products</option>
            </select>
          </div>

          {/* Price Field - Disabled if Pets */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              defaultValue={service?.price}
              type="number"
              name="price"
              // Logic: Disable if category is Pets

              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition`}
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              defaultValue={service?.location}
              type="text"
              name="location"
              required
              placeholder="e.g. Dhanmondi, Dhaka"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Pick Up Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pick Up Date
            </label>
            <input
              defaultValue={service?.pickupDate}
              type="date"
              name="pickupDate"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-600"
            />
          </div>

          {/* Email (Read Only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Email
            </label>
            <input
              value={user?.email}
              type="email"
              name="email"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed outline-none select-none"
            />
          </div>

          {/* Image URL - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              defaultValue={service?.imageUrl}
              type="url"
              name="imageUrl"
              placeholder="https://example.com/my-image.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Description - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              defaultValue={service?.description}
              name="description"
              rows="4"
              required
              placeholder="Provide a detailed description..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-300 shadow-md active:scale-[0.98]"
            >
              Update Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
