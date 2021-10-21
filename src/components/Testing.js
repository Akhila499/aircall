import axios from "axios";
import React from "react";

const Testing = () => {
  const testing = () => {
    axios
      .get("https://aircall-job.herokuapp.com/activities")
      .then((response) => {
        console.log("call data from api", response.data);
        //  setPosts(response.data.posts);
      });
  };
  return (
    <div>
      <button onClick={testing}>onclick</button>
    </div>
  );
};

export default Testing;
