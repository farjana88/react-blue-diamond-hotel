
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";

import UserProfile from './../pages/UserProfile';
import UpdateProfile from "../pages/UpdateProfile";
import Login from './../pages/Login';
import Register from "../pages/Register";
import CardV from "../pages/CardV";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch('/news.json')
          },
          {
            path:"/cards/:id",
            element:<PrivateRoute><CardV></CardV></PrivateRoute>,
            loader: () => fetch('/news.json')
          },
          {
            path: "/login",
            element:<Login></Login>,
          },
          {
            path: "/register",
            element:<Register></Register>,
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