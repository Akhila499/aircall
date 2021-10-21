import React from "react";

import moment from "moment";
import GetDataFromApi from "../helpers/GetDataFromApi";
import CallListItem from "./CallListItem";

const IncomingCalls = () => {
  const { rawCallData } = GetDataFromApi();
  const filteringIncoming = rawCallData.filter(
    (incoming) => incoming.direction === "inbound"
  );
  const InboxCalls = filteringIncoming.map((data) => {
    return <CallListItem data={data} key={data.id} />;
  });

  console.log("inbox", filteringIncoming);

  return <div>{InboxCalls}</div>;
};

export default IncomingCalls;
