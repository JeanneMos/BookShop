import React from 'react';
import { useSelector } from 'react-redux';
import { textWithBreaks } from '../../services/formatting';
import {decode} from 'html-entities';

/* import "./biography.scss"; */

export default function BiographyText() {
  const biographyState = useSelector((state) => state.biography);

  return (
    <div className='biography-wrapper'>
      <p
        className="biography-body" 
        data-testid="biographyText"
      >{textWithBreaks(decode(biographyState?.biography))}</p>
    </div>
  )
}
