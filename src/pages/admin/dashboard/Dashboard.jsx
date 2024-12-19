import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiUsers } from "react-icons/fi";
import { FaBlog, FaRegComment } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useFetchBlogsQuery } from "../../../redux/features/blog/blogApi";
import { useGetCommentsQuery } from "../../../redux/features/comment/commentApi";
import { useGetUserQuery } from "../../../redux/features/auth/AuthApi";
import BlogGraphChart from "./BlogGraphChart";

const Dashboard = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  const { user } = useSelector((state) => state.auth);
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  const { data: comments = [] } = useGetCommentsQuery();
  const { data: users = [] } = useGetUserQuery();
  const adminCount = users.users?.filter(
    (user) => user.role === "admin"
  ).length;
  console.log(adminCount);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div className="space-y-6">
        <div className="bg-backPrimary p-5">
          <h1>Hey, {user?.username} 👋</h1>
          <p>Welcome to the Admin Dashboard</p>
          <p>VoyagersBeat ( Live to Travel )</p>
        </div>
        {/* all page details */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-8">
          <div className="bg-indigo-100 py-5 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FiUsers className="size-8 text-indigo-600" />
            <p> 199 Users</p>
          </div>
          <div className="bg-red-100 py-5 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaBlog className="size-8 text-red-600" />
            <p> {blogs.length} Blogs</p>
          </div>
          <div className="bg-lime-100 py-5 w-full rounded-sm space-y-1 flex flex-col items-center">
            <RiAdminLine className="size-8 text-lime-600" />
            <p>
              {adminCount} Admin{adminCount !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="bg-orange-100 py-5 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaRegComment className="size-8 text-orange-600" />
            <p> {comments.totalComments} Comment</p>
          </div>
        </div>
        {/* graph section  */}
        <div className="pt-5 pb-5">
          <BlogGraphChart blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
