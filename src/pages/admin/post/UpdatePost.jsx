import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import {
  useFetchBlogByIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blog/blogApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [category, setCategory] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.auth);
  const editorRef = useRef(null);

  const {
    data: blog = {},
    error,
    isLoading,
    refetch,
  } = useFetchBlogByIdQuery(id);

  const [updateBlog] = useUpdateBlogMutation();

  useEffect(() => {
    if (blog.post) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          editorRef.current = editor;
        },
        autofocus: true,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
        data: blog.post.content,
      });

      return () => {
        if (editorRef.current) {
          editorRef.current.destroy();
        }
      };
    }
  }, [blog]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editorRef.current) {
      setMessage("Editor is not initialized yet. Please wait and try again.");
      return;
    }
    try {
      const content = await editorRef.current.save();
      const updatePost = {
        title: title || blog.post.title,
        coverImg: coverImg || blog.post.coverImg,
        content,
        description: metaDescription || blog.post.description,
        category,
        author: user?.id,
        rating: rating || blog.post.rating,
      };
      console.log("update post is", updatePost);

      const response = await updateBlog({ id, ...updatePost }).unwrap();
      console.log("response is ", response);
      alert("Blog is updated successfully");
      refetch();
      navigate("/dashboard");
    } catch (err) {
      console.log("Failed to update the post:", err);
      setMessage("Failed to update the post. Please try again later.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="text-2xl font-medium text-blueGray-700">
        Edit or Update Post:
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-2">
          <label className="font-medium text-lg">Blog Title:</label>
          <input
            type="text"
            placeholder="Ex: India's most beautiful place..."
            required
            className="w-full inline-block bg-backPrimary focus:outline-none px-5 py-3"
            defaultValue={blog?.post?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* left section */}
          <div className="md:w-2/3 w-full">
            <p className="font-semibold text-lg mb-5">Content Section:</p>
            <p className="text-sm italic">Write your post here:</p>
            <div id="editorjs" className="text-base"></div>
          </div>

          {/* right section */}
          <div className="md:w-1/3 w-full border p-5 space-y-5">
            <p className="text-lg font-semibold">Choose Blog Format</p>

            {/* Blog Cover section */}
            <div className="space-y-2">
              <label className="font-semibold">Blog Cover:</label>
              <input
                type="text"
                placeholder="https://age.com/voyagers.png..."
                required
                className="w-full inline-block bg-backPrimary focus:outline-none px-4 py-2"
                defaultValue={blog?.post?.coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
              />
            </div>

            {/* Category section */}
            <div className="space-y-2">
              <label className="font-semibold">Category:</label>
              <input
                type="text"
                placeholder="Winter Spiti..."
                required
                className="w-full inline-block bg-backPrimary focus:outline-none px-4 py-2"
                defaultValue={blog?.post?.category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            {/* Meta Description section */}
            <div className="space-y-2">
              <label className="font-semibold">Meta Description:</label>
              <textarea
                cols={4}
                rows={3}
                placeholder="Write the Meta Description for this post..."
                required
                className="w-full inline-block bg-backPrimary focus:outline-none px-4 py-2 text-base"
                defaultValue={blog?.post?.description}
                onChange={(e) => setMetaDescription(e.target.value)}
              />
            </div>

            {/* Rating section */}
            <div className="space-y-2">
              <label className="font-semibold">Rating:</label>
              <input
                type="number"
                placeholder="Rating"
                required
                className="w-full inline-block bg-backPrimary focus:outline-none px-4 py-2 my-input"
                defaultValue={blog?.post?.rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </div>

            {/* Author section */}
            <div className="space-y-2">
              <label className="font-semibold">Author:</label>
              <input
                type="text"
                placeholder={`${user.username} (not editable)`}
                required
                className="w-full inline-block bg-backPrimary focus:outline-none px-4 py-2"
                value={user.username}
                disabled
              />
            </div>
          </div>
        </div>

        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-5 bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#1e73be] text-white font-medium py-2 rounded-md transition duration-300 ease-in-out shadow-lg"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
