import React from 'react'
import { useSelector } from 'react-redux';
import Administrator from './Administrator';


export default function AdministratorsList() {

  const administratorState = useSelector(state => state.administrator);
  
  return (
    <ul className='administrators-list'>
      {administratorState.currentAdministrator && 
        (<Administrator 
          key={administratorState.currentAdministrator.email}
          current={true} admin={administratorState.currentAdministrator}/>)
      }
      {administratorState.administrators.map(admin => (<Administrator key={admin.email} current={false} admin={admin}/>))}
    </ul>
  )
}
