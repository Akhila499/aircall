import React,{useState, useEffect} from 'react';
import axios from 'axios';

const SingleCallData = (id) => {
  const [singleCall, setSingleCall] = useState([]);
  useEffect(() => {
    
      console.log(`@@@@ === https://aircall-job.herokuapp.com/activities/${id}` )
      return axios.get(`https://aircall-job.herokuapp.com/activities/${id}`)
  
       .then((response) => {
        setSingleCall(response.data);
        console.log('%%%%',response.data)
       })
       

  }, [])

  return{
    singleCall
  }
}

export default SingleCallData
