import React from "react";
import AdminIMG from "../../assets/admin.png";
import { NavLink } from "react-router-dom";
import { useLogoutUserMutation } from "../../redux/features/auth/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";

const AdminNav = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (err) {
      console.log("Failed to Logout", err);
    }
  };
  return (
    <>
      <div className="space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between">
        <div>
          {/* header */}
          <div className="mb-5">
            <img src={AdminIMG} alt="Admin Image" className="size-14 " />
            <p className="font-semibold">{user?.username}</p>
          </div>
          <hr />
          <ul className="space-y-4 pt-5">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive ? "text-[#1e73be] font-semibold" : "text-black"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/add-new-post"
                className={({ isActive }) =>
                  isActive ? "text-[#1e73be] font-semibold" : "text-black"
                }
              >
                Add New Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage-items"
                className={({ isActive }) =>
                  isActive ? "text-[#1e73be] font-semibold" : "text-black"
                }
              >
                Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  isActive ? "text-[#1e73be] font-semibold" : "text-black"
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <hr className="mb-3" />
          <button
            onClick={handleLogout}
            className="text-white font-medium px-5 py-1 bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
