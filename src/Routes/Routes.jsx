import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Login from "../Pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
       {
           path : "/login",
           element : <Login></Login>
       },
      ]
    },
  ]);

  export  default router;