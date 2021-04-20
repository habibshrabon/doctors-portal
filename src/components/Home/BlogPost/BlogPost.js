import React from "react";

const BlogPost = (props) => {
  const { title, description, author, authorImg, date } = props.blog;
  return (
    <div className="card">
      <div className="card-header">
        <img src={authorImg} alt="" />
        <div>
          <h6>{author}</h6>
          <p>{date}</p>
        </div>
      </div>
      <div className="card-body">
          <h5>{title}</h5>
          <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
