import React, { useState } from 'react'

import moment from 'moment';
import { Link,useParams } from 'react-router-dom';
import CallDetails from './CallDetails';


const CallListItem = (props) => {
  
  const {id}=useParams();
  const { data, getArchiveCall, handleSubmit } = props;
  console.log('data inside props', props);
  
  const formateDate = (dataString) => {
    const options = { year: "numeric", month: "long", day:"numeric"}
    return new Date(dataString).toLocaleDateString(undefined, options)
  }

  const eachCall = (id) => {
    console.log('Im here!!')
    return (<CallDetails data={data} key={data.id} from={data.from} to={data.to} type={data.call_type}/>)
  }
  


  return (
    <div>
      <div>
        
      </div>
      <Link to = {`${data.id}`} onClick={()=>{eachCall(data.id)}}>
      <div className="call_session">
        <div className="call_time">
          {formateDate(data.created_at)}
        </div>
        <div className="call_inner">

          <div className="call_dir">
            <p>
              {data.direction === 'outbound' &&
              <img src="https://img.icons8.com/color/48/000000/outgoing-call.png"/> || data.direction === 'inbound' && <img src="https://img.icons8.com/color/48/000000/incoming-call--v1.png"/>}</p>
          </div>
          <div className="call_det">
            <h4>{data.from}</h4>
            <p>tried to call on {data.via}</p>
            {/* {<CallDetail />} */}
          </div>
          <div className="call_dur">
            <p>{moment(data.created_at).format('LT')}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default CallListItem;
