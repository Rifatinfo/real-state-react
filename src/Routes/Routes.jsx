import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Components/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('estates.json')
        },
        {
          path : '/estate/:id',
          element: <PrivateRoute><EstateDetails /></PrivateRoute>,
          loader : () => fetch('../estates.json')
        },
       {
           path : "/login",
           element : <Login></Login>
       },
       {
        path : "/register",
        element : <Register></Register>
       }
      ]
    },
  ]);

  export  default router;