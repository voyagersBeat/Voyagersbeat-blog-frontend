import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../../redux/features/blog/blogApi";
import SingleBlog from "./SingleBlog";
import Comment from "../comments/Comment";
import RelatedBlogs from "./RelatedBlogs";

const OneSingleBlog = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetchBlogByIdQuery(id);
  return (
    <>
      <div className="text-primary container mx-auto mt-32 ">
        <div>
          {isLoading && <div>Loading...</div>}{" "}
          {error && <div>Something went wrong</div>}
          {blog?.post && (
            <div className="flex flex-col lg:flex-row justify-between items-start md:12 gap-8">
              <div className="lg:w-2/3 w-full">
                <SingleBlog Blogs={blog.post} />
                <Comment comments={blog?.comments} />
              </div>
              <div className="bg-white lg:w-1/3 w-full">
                <RelatedBlogs />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OneSingleBlog;
