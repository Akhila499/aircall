import React from "react";
import GetDataFromApi from "../helpers/GetDataFromApi";
import CallListItem from "./CallListItem";
const ArchivedCalls = () => {
  const { rawCallData } = GetDataFromApi();

  const archived = rawCallData.filter(
    (archive) => archive.is_archived === true
  );
  const archivedList = archived.map((data) => (
    <CallListItem key={data.id} data={data} />
  ));

  return (
    <div>
      <p>Archived Call list </p>
      {archivedList}
    </div>
  );
};

export default ArchivedCalls;
