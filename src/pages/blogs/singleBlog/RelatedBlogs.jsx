import React from "react";
import { useFetchRelatedBlogsQuery } from "../../../redux/features/blog/blogApi";
import { Link, useParams } from "react-router-dom";

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);

  return (
    <div>
      <h3 className="text-xl font-medium pt-8 px-8 pb-5">Related Blogs</h3>
      <hr />
      {isLoading ? (
        <div className="p-8">Loading...</div>
      ) : error ? (
        <div className="p-8 text-red-500">Error fetching related blogs!</div>
      ) : blogs.length > 0 ? (
        <div className="space-y-4 mt-5">
          {blogs.map((blog, index) => (
            <Link
              key={blog._id || `blog-${index}`}
              to={`/blogs/${blog?._id}`}
              className="flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4"
            >
              <div className="size-14 ">
                <img
                  src={blog.coverImg}
                  alt={blog.title || "blog image"}
                  className="h-full w-full rounded-full ring-2 ring-blue-700"
                />
              </div>
              <div>
                <h4 className="font-medium text-[#1e73be]">
                  {blog.title.substring(0, 50)}
                </h4>
                <p>{blog?.description.substring(0, 50)}....</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8">No Related Blogs Found!</div>
      )}
    </div>
  );
};

export default RelatedBlogs;
