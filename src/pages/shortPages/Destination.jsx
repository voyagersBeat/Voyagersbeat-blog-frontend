import React, { useState, useEffect } from "react";
import { useFetchBlogsQuery } from "../../redux/features/blog/blogApi"; 
import { Link } from "react-router-dom";
import SearchTab from "../blogs/SearchTab";

const Destination = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const blogsPerPage = 12;

  // Fetch all blogs (no pagination from backend)
  const {
    data: blogs = [],
    error,
    isLoading,
  } = useFetchBlogsQuery({ search, category });

  // Slice the blogs into chunks of 4
  const groupedBlogs = [];
  for (let i = 0; i < blogs.length; i += blogsPerPage) {
    groupedBlogs.push(blogs.slice(i, i + blogsPerPage));
  }

  // Set the current blogs to show based on the page
  const currentBlogs = groupedBlogs[page - 1] || [];

  // Function to handle search input change
  const handleSearchToChange = (e) => {
    setSearch(e.target.value);
  };

  // Function to handle search button click
  const handleSearch = () => {
    setPage(1); // Reset to page 1 on search
  };

  return (
    <div className="bg-[#eeeded] text-primary container mx-auto mt-28 p-8">
      {/* Search Component */}
      <SearchTab
        search={search}
        handleSearchToChange={handleSearchToChange}
        handleSearch={handleSearch}
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.toString()}</div>}

      {/* Loading/Error Handling */}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.toString()}</div>}

      {/* Display the current set of blogs */}
      <div className="mt-8">
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {currentBlogs.map((blog) => (
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
              <h2 className="text-lg px-4 mt-2 font-semibold">{blog.title}</h2>
              <p className="px-4 py-2 text-sm">
                {blog.description
                  ? blog.description.split(" ").slice(0, 15).join(" ")
                  : ""}
                ....
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-[#1e73b3] text-white py-2 px-4 rounded"
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === groupedBlogs.length}
          className="bg-[#1e73b3] text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Destination;
