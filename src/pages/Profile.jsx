import React, { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
// import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  useEffect(() => {
    document.title = "";
  }, []);
  const { user, createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  // const notify = () => toast("Name Changed Successfully!");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    toast("Registration Successful!");

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        // notify();
      })
      .catch((error) => {
        setUser(user);
      });
  };
  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <div className="flex justify-center min-h-screen items-center">
          <form
            onSubmit={handleRegister}
            className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5"
          >
            <h2 className="font-semibold text-2xl text-center">
              Update Your Information
            </h2>
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  defaultValue={user.displayName}
                  placeholder="Enter your name"
                  required
                />
                {nameError && <p className="text-xs text-error">{nameError}</p>}
                {/* photo url */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  defaultValue={user.photoURL}
                  placeholder="Enter your photo URL"
                  required
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-disabled w-full"
                  defaultValue={user.email}
                  placeholder="Email"
                  disabled
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Update
                </button>
                {/* <ToastContainer /> */}
              </fieldset>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
