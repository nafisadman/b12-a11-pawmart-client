import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/homelayout/SocialLogin";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet";
import useTitle from "../hooks/useTitle";
import toast from "react-hot-toast";

const Register = () => {
  useTitle("Register");

  const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
  
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!hasLowercase) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else if (!hasMinLength) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast("Registration Successful!");
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;


        alert(errorCode, errorMessage);
      });
  };

  const handleContinueWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Helmet>
        <title></title>
      </Helmet>
      <form
        onSubmit={handleRegister}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5"
      >
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input type="text" name="name" className="input w-full" placeholder="Enter your name" required />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter your photo URL"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />
              {passwordError && (
                <p className="text-xs text-error">{passwordError}</p>
              )}
              {/* Google */}
              <SocialLogin handleContinueWithGoogle={handleContinueWithGoogle}></SocialLogin>
              <button
                className="absolute top-2 right-2 btn btn-xs"
                onClick={handleTogglePasswordShow}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
            <button type="submit" className="btn btn-neutral">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Register;
