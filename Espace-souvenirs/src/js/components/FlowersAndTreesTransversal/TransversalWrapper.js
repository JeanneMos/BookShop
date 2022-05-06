import React from 'react';
import { useSelector } from 'react-redux';
import PrestationTransversal from './PrestationTransversal';

/* import './transversalBlocks.scss';
 */
export default function TransversalWrapper() {
  const userState = useSelector((state) => state.user);

  if (!userState.prestations) return null;
  return (
    <div className="transversal-blocks" data-testid="transversalBlocks">
      {userState.prestations.map(prestation => {
        return <PrestationTransversal key={prestation.field_prest_titre} prestation={prestation}/>
      })}
      
    </div>
  );
}
