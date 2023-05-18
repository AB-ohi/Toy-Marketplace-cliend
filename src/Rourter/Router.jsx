import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import MyToy from "../Pages/MyToy/MyToy";
import AllToy from "../Pages/AllToy/AllToy";
import Blogs from "../Blogs/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/mytoy',
          element:<MyToy></MyToy>
        },
        {
          path:'/alltoy',
          element:<AllToy></AllToy>
        },
        {
          path:'/blog',
          element:<Blogs></Blogs>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singUp',
          element:<SingUp></SingUp>
        },
        
      ]
  
    },
  ]);


  export default router;