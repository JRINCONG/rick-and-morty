import React from 'react';
import '../css/AnatomyPark.css';

export const AnatomyPark = ({datos, name}) => {

    
  return (
    <div className='caja-Anatomy'>
         <h1 className='caja-Anatomy-name'>{datos?.name}</h1>
         <div className='Caja-list'>
            <ul className='Caja-list-items'>
                <li className='Caja-items'><span>Type:</span><span>{datos?.type}</span></li>
                <li className='Caja-items'><span>Dimension:</span><span>{datos?.dimension}</span></li>
                <li className='Caja-items'><span>Population:</span><span>{datos?.residents?.length}</span></li>
            </ul>

         </div>
    </div>
  )
}


