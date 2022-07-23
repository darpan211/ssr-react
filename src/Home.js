import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts([...json]);
      });
  }, []);

  const handleUserDetails = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="title" content={"Home page of testing"} />
        <meta name="description" content={"Home page of description"} />
      </Helmet>
      <div className="App-header">
        {posts.length > 0 &&
          posts.map((ele, i) => {
            return (
              <div
                key={i}
                className="card"
                onClick={() => handleUserDetails(ele?.id)}
              >
                <h4 className="mb0">Title:</h4>
                <p>{ele?.title}</p>
                <h4 className="mb0">Description: </h4>
                <p>{ele?.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
