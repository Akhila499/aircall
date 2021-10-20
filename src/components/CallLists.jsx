import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
import GetDataFromApi from '../helpers/GetDataFromApi';
import CallListItem from './CallListItem';
import IncomingCalls from './IncomingCalls';
import ArchivedCalls from './ArchivedCalls';

const CallLists = () => {
  const { rawCallData, getArchiveCall, makeAllCallsArchived } = GetDataFromApi();
  console.log( 'in list item',rawCallData )

  const handleSubmit = (id) => {
    const archived = makeAllCallsArchived(id);
    
  }
  const renderCalls = rawCallData.map((data)=> 
    (
      <CallListItem data={data} key={data.id} getArchiveCall={getArchiveCall} handleSubmit={handleSubmit}/>
    )
    
  )
  

  return (
    <div>
      {/* <button type="submit" onClick={handleSubmit}>Archive all Calls</button> */}
      
      {renderCalls} 

    </div>
  )
}

export default CallLists;


