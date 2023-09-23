import { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return (
      <li key={comment.id}>
        {comment.status === "approved"
          ? comment.content
          : comment.status === "rejected"
          ? "Comment Rejected"
          : "Awaiting moderation"}
      </li>
    );
  });

  return (
    <ul className="d-flex flex-row flex-wrap justify-content-between">
      {renderedComments}
    </ul>
  );
};

export default CommentList;
