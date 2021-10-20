import React from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';

const GetDataFromApi = () => {
  const [rawCallData, setRawCallData] = useState([]);
  const [singleCall, setSingleCall] = useState([]);
  useEffect(() => {

    axios.get("https://aircall-job.herokuapp.com/activities",
    {headers: { "Content-Type": "application/json" }}
    )
      
     .then((response) => {
      setRawCallData(response.data);
     })
     .catch((err)=>console.log('err',err))

  }, []);

  const getArchiveCall = (id) => {
    const filterRawData = rawCallData.find((data) => data.id === id);
    const setCallArchived = {
      is_archived:true
    }
    if(filterRawData.is_archived === true){
      setCallArchived.is_archived = false;
    }
    const updateCall = Object.assign(filterRawData, setCallArchived);
    return axios.post(`https://aircall-job.herokuapp.com/activities/${filterRawData.id}`)
      .then((res) => {
        console.log("Call achived or unachived")
        setRawCallData([...rawCallData, updateCall]);
      })
      .catch((err)=>console.log('error', err))

  }

  // const makeAllCallsArchived = () => {
  //   const setCallArchived = {
  //     is_archived:true,
  //   }
  //   const updateCall = Object.assign(rawCallData, {setCallArchived});
  //   console.log('---->', updateCall)
  //   setRawCallData([...rawCallData, updateCall]);
  //   return rawCallData;
  // }

  


  return {
    rawCallData,
    getArchiveCall
  };
}

export default GetDataFromApi;
