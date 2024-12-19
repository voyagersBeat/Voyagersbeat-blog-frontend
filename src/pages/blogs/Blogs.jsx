// Blogs.js (Blogs Page Component)
import React, { useState } from "react";
import SearchTab from "./SearchTab";
import { useFetchBlogsQuery } from "../../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  // Fetch all blogs (no limit passed for the Blogs page)
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  const handleSearchToChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setQuery({ search, category });
  };

  return (
    <>
      <div className="mt-16 container mx-auto">
        <SearchTab
          search={search}
          handleSearchToChange={handleSearchToChange}
          handleSearch={handleSearch}
        />
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.toString()}</div>}

        {/* Blog Content */}
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog) => {
            return (
              <Link
                to={`/blogs/${blog._id}`}
                key={blog._id}
                className="shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <img
                  src={blog?.coverImg}
                  alt="Blog Images"
                  className="h-60 w-full object-cover"
                />
                <h2 className="text-lg px-4 mt-2 font-semibold">
                  {blog.title}
                </h2>
                <p className="px-4 py-2 text-sm">
                  {blog.description
                    ? blog.description.split(" ").slice(0, 15).join(" ")
                    : ""}
                  ....
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
