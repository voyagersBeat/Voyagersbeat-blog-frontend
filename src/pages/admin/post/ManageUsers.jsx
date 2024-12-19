import React, { useState } from "react";
import { useGetUserQuery } from "../../../redux/features/auth/AuthApi";
import { useDeleteUserMutation } from "../../../redux/features/auth/AuthApi";
import { MdModeEdit } from "react-icons/md";
import UpdateUserRole from "./UpdateUserRole";

const ManageUsers = () => {
  const [selectUser, setSelectUser] = useState(null);
  const [isModel, setIsModel] = useState(false);
  const { data, error, isLoading, refetch } = useGetUserQuery();
  console.log("user", data?.user);
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await deleteUser(id).unwrap();
        alert("User deleted successfully");
        refetch();
      } catch (err) {
        console.log("Failed to delete the user:", err);
        alert("Failed to delete the user");
      }
    }
  };

  const handleEdit = (user) => {
    setSelectUser(user);
    setIsModel(true);
  };
  const handleCloseModel = () => {
    setIsModel(false);
    setSelectUser(null);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <section className="py-1 bg-blueGray-50">
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Users
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-[#1e73be] hover:bg-[#15578c] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      User Email
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      User Role
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit or Manage
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data?.users &&
                    data.users.map((user, index) => (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                          {index + 1}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user?.email}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <span
                            className={`rounded-sm py-[4px] px-3 ${
                              user?.role == "admin"
                                ? "bg-red-600 text-white"
                                : "bg-[#1e73be] text-white"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button
                            onClick={() => handleEdit(user)}
                            className="flex gap-1 items-center justify-center hover:text-[#1e73be]"
                          >
                            <MdModeEdit /> Edit
                          </button>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button
                            className="bg-red-600 px-2 py-1 text-white"
                            onClick={() => handleDelete(user?._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {isModel && (
        <UpdateUserRole
          user={selectUser}
          onRoleUpdate={refetch}
          onCloseModel={handleCloseModel}
        />
      )}
    </>
  );
};

export default ManageUsers;
