// UpdatePost.js
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
  const navigate = useNavigate();

  useEffect(() => {
    if (blog.post) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          editorRef.current = editor;
        },
        autofocus: true,
        tools: {
          header: { class: Header, inlineToolbar: true },
          list: { class: List, inlineToolbar: true },
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

      await updateBlog({ id, ...updatePost }).unwrap();
      alert("Blog is updated successfully");
      refetch();
      navigate("/dashboard");
    } catch (err) {
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
            required
            className="w-full bg-backPrimary px-5 py-3"
            defaultValue={blog?.post?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3 w-full">
            <p className="font-semibold mb-5">Content Section:</p>
            <div id="editorjs"></div>
          </div>

          <div className="md:w-1/3 w-full border p-5 space-y-5">
            <div className="space-y-2">
              <label className="font-semibold">Blog Cover:</label>
              <input
                type="text"
                required
                className="w-full bg-backPrimary px-4 py-2"
                defaultValue={blog?.post?.coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="font-semibold">Category:</label>
              <input
                type="text"
                required
                className="w-full bg-backPrimary px-4 py-2"
                defaultValue={blog?.post?.category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="font-semibold">Meta Description:</label>
              <textarea
                rows={3}
                required
                className="w-full bg-backPrimary px-4 py-2"
                defaultValue={blog?.post?.description}
                onChange={(e) => setMetaDescription(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="font-semibold">Rating:</label>
              <input
                type="number"
                required
                className="w-full bg-backPrimary px-4 py-2"
                defaultValue={blog?.post?.rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
