import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePostCommentMutation } from "../../../redux/features/comment/commentApi";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../../redux/features/blog/blogApi";

const PostComments = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [postComment] = usePostCommentMutation();
  const navigate = useNavigate();
  const { refetch } = useFetchBlogByIdQuery(id, { skip: !id });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      alert("Please Login first to comment on this post ");
      navigate("/login");
      return;
    }

    const newComment = {
      comment: comment,
      user: user?.id,
      postId: id,
    };

    try {
      const res = await postComment(newComment).unwrap();
      console.log("res is", res);
      alert("Comment add successfully");
      setComment("");
      refetch();
    } catch (err) {
      alert("Failed to post the Comment ");
    }
  };

  return (
    <>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-8">Leave a Comment </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            cols="30"
            rows="10"
            placeholder="Post a Comment..."
            className="w-full bg-backprimary focus:outline-none p-5 "
          />
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#1e73be] text-white font-medium py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PostComments;
