import React, { useState } from "react";
import { useUpdateUserRoleMutation } from "../../../redux/features/auth/AuthApi";

const UpdateUserRole = ({ user, onRoleUpdate, onCloseModel }) => {
  const [userRole, setUserRole] = useState(user?.role);
  const [updateRole] = useUpdateUserRoleMutation();
  const handleUpdate = async () => {
    try {
      await updateRole({ userId: user?._id, role: userRole });
      alert("Role Update Successfully");
      onRoleUpdate();
      onCloseModel();
    } catch (err) {
      console.log("Failed to Update the User's Role", err);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-xl mb-4 text-center md:text-left">
            Edit User's Role
          </h2>

          <div className="mb-4 space-y-2">
            <label className="block text-sm text-gray-700 font-medium">
              Email
            </label>
            <input
              type="text"
              className="mt-1 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-4 focus:outline-none"
              value={user?.email}
              readOnly
            />
          </div>

          <div className="mb-4 space-y-2">
            <label className="block text-sm text-gray-700 font-medium">
              User Role
            </label>
            <select
              className="mt-1 bg-gray-100 w-full block shadow-sm sm:text-sm md:text-base border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUserRole(e.target.value)}
              value={userRole}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex justify-end pt-4 gap-2">
            <button
              onClick={onCloseModel}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-md py-2 px-4"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="bg-[#1e73be] hover:bg-[#317cbd] text-white rounded-md py-2 px-4"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUserRole;
