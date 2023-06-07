import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Orderfood/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/Signup";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/AddItem/AddItems";
import AdminRoute from "./AdminRoute";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: '/Order/:category',
            element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        }
      ]
    }
  ]);

export default router


