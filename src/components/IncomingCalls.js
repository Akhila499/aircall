import React from 'react'
import CallDetail from './CallDetail';
import moment from 'moment';

const IncomingCalls = (props) => {
  const { data } = props;
  console.log('data inside props', props);
  // const formateDate = (dataString) => {
  //   const options = { year: "numeric", month: "long", day:"numeric"}
  //   return new Date(dataString).toLocaleDateString(undefined, options)
  // }



  return (
    <div className="call_session">
      <div className="call_time">
        {/* {formateDate(data.created_at)} */}
      </div>
      <div className="call_inner">

        <div className="call_dir">
          <p>
            {<img src="https://img.icons8.com/color/48/000000/incoming-call--v1.png"/>}</p>
        </div>
        <div className="call_det">
          <h4>{data.from}</h4>
          <p>tried to call on {data.via}</p>
          {<CallDetail />}
        </div>
        <div className="call_dur">
          <p>{moment(data.created_at).format('LT')}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomingCalls;
