import React from "react";

import SingleCallData from "../helpers/SingleCallData";
import { useParams } from "react-router-dom";

const CallDetails = (props) => {
  const { callId } = useParams();
  // const callId = props.match.params.callId;
  const { singleCall } = SingleCallData(callId);
  console.log("calldetails", singleCall);
  const formateDate = (dataString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dataString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {singleCall.from && callId && (
        <div className="calldetails">
          <div className="call_time1">
            {formateDate(singleCall.created_at)}
            {singleCall.call_type === "missed" && (
              <img src="https://img.icons8.com/fluency/48/000000/missed-call.png" />
            )}
            {singleCall.call_type === "answered" &&
              singleCall.direction === "inbound" && (
                <img src="https://img.icons8.com/color/48/000000/incoming-call--v1.png" />
              )}
            {singleCall.direction === "outbound" && (
              <img src="https://img.icons8.com/color/48/000000/outgoing-call.png" />
            )}
          </div>
          <div>
            <p>From: {singleCall.from}</p>
            <p>To: {singleCall.to}</p>
            <p>Via: {singleCall.via}</p>
            <p>Call Duration: {singleCall.duration}mins</p>
            <p>Type: {singleCall.direction}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallDetails;
