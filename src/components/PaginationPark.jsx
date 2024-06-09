import React from 'react'
import '../css/PaginationPark.css'

export const PaginationPark = ({Pagination, setPagination, Total }) => {


    const Siguiente = () =>{
         if(Pagination < Total)
         setPagination(x => x + 1)
       }
     
       const Anterior = () =>{
         if(Pagination > 1){setPagination(x => x - 1)}
     
       }

  return (
    <div className='Pagination'>
      <button onClick={Anterior}>⬅️</button>     
      <p><span>{Pagination}</span> to <span>{Total}</span></p>
      <button onClick={Siguiente}>➡️</button>
     
    </div>
  )
}


