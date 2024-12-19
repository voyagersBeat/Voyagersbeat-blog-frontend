import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../pages/home/Home";
import PrivacyPolicy from "./../pages/shortPages/PrivacyPolicy";
import ContactUs from "./../pages/shortPages/ContactUs";
import Destination from "./../pages/shortPages/Destination";
import WriteForUs from "./../pages/shortPages/WriteForUs";
import AboutUs from "./../pages/shortPages/AboutUs";
import OneSingleBlog from "../pages/blogs/singleBlog/OneSingleBlog";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import AdminPage from "../pages/admin/AdminPage";
import Dashboard from "../pages/admin/dashboard/dashboard";
import AddNewPost from "../pages/admin/post/AddNewPost";
import ManagePost from "../pages/admin/post/ManagePost";
import ManageUsers from "../pages/admin/post/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import UpdatePost from "../pages/admin/post/UpdatePost";
import TermAndCondition from "../pages/shortPages/TermAndCondition";
import Career from "../pages/shortPages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/destination", element: <Destination /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/write-for-us", element: <WriteForUs /> },
      { path: "/blogs/:id", element: <OneSingleBlog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/terms-and-conditions", element: <TermAndCondition /> },
      { path: "/career", element: <Career /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute role="admin">
            <AdminPage />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Dashboard /> },
          { path: "add-new-post", element: <AddNewPost /> },
          { path: "manage-items", element: <ManagePost /> },
          { path: "users", element: <ManageUsers /> },
          { path: "update-post/:id", element: <UpdatePost /> },
        ],
      },
    ],
  },
]);

export default router;
