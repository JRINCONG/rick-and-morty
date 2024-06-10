import React from 'react'
import '../css/PaginationPark.css'

export const PaginationPark = ({Pagination, setPagination, Total }) => {


    const Siguiente = () =>{
         if(Pagination < Total){
          document.querySelector('.anterior').disabled = false;
         setPagination(x => x + 1);
        }else{
          document.querySelector('.siguiente').disabled = true;
          
        }
       }
       const Anterior = () =>{
         if(Pagination > 1){
          document.querySelector('.siguiente').disabled = false;
          setPagination(x => x - 1)
        }else{
          document.querySelector('.anterior').disabled= true
          
        }
     
       }

  return (
    <div className='Pagination'>
      <button className='anterior' onClick={Anterior}>Anterior</button>     
      <p><span>{Pagination}</span> to <span>{Total}</span></p>
      <button className='siguiente' onClick={Siguiente}>Siguiente</button>
     
    </div>
  )
}


