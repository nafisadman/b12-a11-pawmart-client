import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import toast from "react-hot-toast";

const AddService = () => {
  useTitle("Add Listing");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
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
    };

    console.log(formData);
    axios
      .post("https://b12-a11-pawmart-server.vercel.app/services", formData)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Item Added Successfully!",
            icon: "success",
            draggable: true,
          });
          toast("Item Added Successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Product/Pet Name - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product / Pet Name
            </label>
            <input
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
            <select name="category" className="w-full input" defaultValue="">
              <option disabled value="">
                Pick an item
              </option>
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
              type="number"
              name="price"
              // Logic: Disable if category is Pets

              className={`w-full input`}
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Dhanmondi, Dhaka"
              className="w-full  input"
            />
          </div>

          {/* Pick Up Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pick Up Date
            </label>
            <input
              type="date"
              name="pickupDate"
              required
              className="w-full input"
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
              className="w-full input"
              disabled
            />
          </div>

          {/* Image URL - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/my-image.jpg"
              className="w-full input"
            />
          </div>

          {/* Description - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              required
              placeholder="Provide a detailed description..."
              className="w-full h-16 input"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Post Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
