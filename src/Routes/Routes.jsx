import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
       
      ]
    },
  ]);

  export  default router;