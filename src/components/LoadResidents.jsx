import React, { useEffect } from 'react';
import { useFetch } from '../hook/useFetch';
import '../css/LoadResidents.css';




  

export const LoadResidents = ({infoUrl}) => {


    const [ Resident, getResident ] = useFetch()

    console.log('url=>',infoUrl)
   
    useEffect(() =>{
        
      getResident(infoUrl);

    },[])


  

  return (
    
    <div className='Residents-Card'>

     <figure className='figure-Card'>
        <img src={Resident?.image} alt='Imgen de Residents'/>

        <figcaption className='Residenst-Card-status'>
            
            <div className={`figura-status ${Resident?.status}`}></div>
            <span>{Resident?.status}</span>
          
        </figcaption>
     </figure>
     <div className='Residenst-caja-name'>
     <h2 className='Residenst-name'>{Resident?.name}</h2>
     </div>
     <div className='Residenst-hr'>
     <hr/>
     </div>
     <div className='Residents-list'>
       <ul className='Residen-Card-List'>
        <li className='Residen-Card-List-items'><span className='Residents-Card-span-title'>Specie</span> <span className='Residents-Card-span-data'>{Resident?.species}</span></li>
        <li className='Residen-Card-List-items'><span className='Residents-Card-span-title'>Origin</span> <span className='Residents-Card-span-data'>{Resident?.origin.name}</span></li>
        <li className='Residen-Card-List-items'><span className='Residents-Card-span-title'>Eppisodes where apper</span> <span className='Residents-Card-span-data'>{Resident?.episode.length}</span></li>
       </ul>
     </div>

    </div>
    
  )
}
