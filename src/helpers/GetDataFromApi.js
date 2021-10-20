import React from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';

const GetDataFromApi = () => {
  const [rawCallData, setRawCallData] = useState([]);
  const [eachData, setEachData] = useState([]);
  useEffect(() => {

    axios.get("https://aircall-job.herokuapp.com/activities")

     .then((response) => {
      console.log('call data from api', response.data);

      setRawCallData(response.data);

     })

     
    //  axios.get(`https://aircall-job.herokuapp.com/activities/${id}`)

    //  .then((response) => {
    //    setEachData(response.data);
    //  })
     


  }, []);





  return {
    rawCallData,
    eachData
  };
}

export default GetDataFromApi;
