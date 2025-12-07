import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/homelayout/SocialLogin";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  useEffect(() => {
    document.title = "ToyTopia | Login";
  }, []);
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast('Signed in successful');
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast('Signed in successful');
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <Link
                to="/auth/forgot-password"
                state={{ email: emailInput }}
                className="link link-hover"
              >
                Forgot password?
              </Link>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <div className="flex flex-col mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-secondary"
              >
                <FcGoogle size={24} />
                Continue with Google
              </button>
            </div>
            <button type="submit" className="btn btn-neutral">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Don't Have An Account?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
