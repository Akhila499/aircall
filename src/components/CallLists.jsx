import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
import GetDataFromApi from '../helpers/GetDataFromApi';
import CallListItem from './CallListItem';
import IncomingCalls from './IncomingCalls';

const CallLists = () => {
  const { rawCallData } = GetDataFromApi();
  console.log( 'in list item',rawCallData )

  const renderCalls = rawCallData.map((data)=> 
    (
      <CallListItem data={data} key={data.id}/>
    )
    
  )

  return (
    <div>
      {renderCalls} 
    </div>
  )
}

export default CallLists;


