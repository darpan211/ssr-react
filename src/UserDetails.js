import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function UserDetails() {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPostDetails({ ...json });
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>User - {id}</title>
        <meta name="title" content={postDetails?.title} />
        <meta name="description" content={postDetails?.body} />
      </Helmet>

      <div className="card-details">
        <h1>UserDetails</h1>
        <h4>Title</h4>
        <p>{postDetails?.title}</p>
        <h4>Body</h4>
        <p>{postDetails?.body}</p>
      </div>
    </>
  );
}

export default UserDetails;
