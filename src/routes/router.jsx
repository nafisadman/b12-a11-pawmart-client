import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ToyStore from "../components/homelayout/ToyStore";
import ToyDetails from "../pages/ToyDetails";
import SalesLayout from "../layouts/SalesLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";
import MyOrders from "../pages/MyOrders";
import PetsAndSuppliers from "../pages/PetsAndSuppliers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/toys/",
        element: <ToyStore></ToyStore>,
        loader: () => fetch("https://b12-a11-pawmart-server.vercel.app/services"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/public",
    element: <PublicLayout></PublicLayout>,
    children: [
      {
        path: "pets-and-suppliers",
        element: <PetsAndSuppliers></PetsAndSuppliers>,
        loader: () => fetch("https://b12-a11-pawmart-server.vercel.app/services"),
        hydrateFallbackElement: <Loading></Loading>,
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/auth/add-services",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: "/auth/my-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
      },
      {
        path: "/auth/my-orders",
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
      },
      {
        path: "/auth/update-services/:id",
        element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <PrivateRoute>
        <SalesLayout></SalesLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  {
    path: "/toy-details/:id",
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("https://b12-a11-pawmart-server.vercel.app/services"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <ErrorLayout></ErrorLayout>,
  },
]);

export default router;
