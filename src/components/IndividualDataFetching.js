import axios from "axios";
import React, { useEffect, useState } from "react";

function IndividualDataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState();
  const [idFromButtonClick, setIdFromButtonClick] = useState(); //

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <br />
      <br />
      <>{post.title}</>
    </>
  );
}

export default IndividualDataFetching;
