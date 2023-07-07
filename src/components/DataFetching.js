import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data); // 'data' is where the data is situtated
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // dependancy is passed to prevent continuos rendering

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DataFetching;
