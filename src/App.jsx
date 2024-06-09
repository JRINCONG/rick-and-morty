import { useEffect, useRef, useState } from 'react'
import { useFetch } from './hook/useFetch'
import { AnatomyPark } from './components/AnatomyPark';
import { LoadResidents } from './components/LoadResidents';
import '../src/css/App.css';
import { PaginationPark } from './components/PaginationPark';



export function App() {

// Variable que nos genera u
  const random = Math.ceil(Math.random()*126)+1;

 const [ InputText, setInputText ] = useState(random);

 const [ CargarApi, getCargarApi, LoadError, NoResidenst] = useFetch()

 const [ Loading, setLoading] = useState(false)

 const [ Pagination , setPagination] =useState(1);

  const textInput = useRef()

//funcion buscar lo que se hace cuando das clik al boton buscar 
  const Buscar = (event) =>{    

      event.preventDefault() 
     
     if(textInput.current.value !=''){ 
      setInputText(textInput.current.value.trim())
      textInput.current.value='';
      textInput.current.style=''
      textInput.current.placeholder=''
     }else{
       textInput.current.style='border: 3px solid #FF0000';
       textInput.current.placeholder='Digite numero 1 to 126'
       return
     }
  
   }


   useEffect( ()=>{
       
    setTimeout(()=>{
     
     setLoading(true)

    },"3000")

},[])


  useEffect(()=>{

    
    const url =`https://rickandmortyapi.com/api/location/${InputText}`;

    getCargarApi(url)

    

  },[InputText])

  //paginacion star
  const Cantpaginas = 4;
  const  Total = Math.ceil(CargarApi?.residents?.length / Cantpaginas);
 
  const paginacion = () =>{ 
      let end = Cantpaginas * Pagination;
      let star = end - Cantpaginas;
      return CargarApi?.residents?.slice(star, end)
    }  
// paginacion end  



console.log('Cargar Api Esta Vacio APP', NoResidenst)

  return (
    <div className='Contenedor-Principal'>
      {
        (!Loading) ? <img src='./img/loading.gif' width='200px' height='200px'/>
        :
        <>
        
        <header className='header'>
           <img className='banner-1'src='../img/banner.png'/>
            <div className='muneco'>
            </div>            
          </header>
         
        <h1 className='App-title'>Rick and Morty App</h1>
      <form className='App-form' onSubmit={Buscar}>
        <input className='App-form-input'type='number' ref={textInput}/>
        <button className='App-form-button'>Serch</button>
      </form>
      {
      LoadError ?  <h2>❌Hey! You must Provide an id from 1 to 126 😥</h2>:
      <>
       <AnatomyPark
      datos={CargarApi} 
      name ={CargarApi?.location?.name}   
      />
    
      <PaginationPark
      Pagination={Pagination}
      setPagination={ setPagination }
      Total={Total} 
      />
      

      <div className='Conten-Card'>
   
        {
        paginacion()?.map( (url) => (

          <LoadResidents
          key={Math.floor(Math.random()*1000)+1}
          infoUrl={url}
          
          />

        ))
         
       }
   
   

       
       </div>
      </>

      }
         
        </>
      }
      
        
     
      
    </div>
  )
}

