
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UserProfile from './../pages/UserProfile';
import UpdateProfile from "../pages/UpdateProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element:<Home></Home>,
          },
          {
            path: "/about",
            element:<About></About>,
          },
          {
            path: "/contact",
            element:<Contact></Contact>,
          },
          {
            path: "/updateprofile",
            element:<UpdateProfile></UpdateProfile>,
          },
          {
            path: "/userprofile",
            element:<UserProfile></UserProfile>,
          },
        ],
      },
  ]);


  export default router;