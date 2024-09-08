import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


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