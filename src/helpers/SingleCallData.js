import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleCallData = (id) => {
  const [singleCall, setSingleCall] = useState([]);
  useEffect(() => {
    axios
      .get(`https://aircall-job.herokuapp.com/activities/${id}`)

      .then((response) => {
        setSingleCall(response.data);
      })
      .catch((err) => console.log("err", err));
  }, [id]);

  return {
    singleCall,
  };
};

export default SingleCallData;
