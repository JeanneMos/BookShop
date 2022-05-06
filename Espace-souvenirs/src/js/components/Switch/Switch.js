import React from 'react'
/* import "./switch.scss" */

export default function Switch({handleSwitch, messageId, isChecked}) {
  return (
    <div className='switch-wrapper'>
      <span>{isChecked ? "Publié" : "Dépublié"}</span>
      <label className="switch" data-testid="switchCheck" >
        <input type="checkbox" checked={isChecked} onChange={() => handleSwitch(messageId)}/>
        <span className="slider"></span>
      </label>
    </div>
  )
}
