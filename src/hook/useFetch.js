import axios from "axios";
import { useState } from "react"



export const useFetch = () =>{

const [ LoadError , setloadError ] = useState(false);

const [ CargarApi, setCargarApi ]= useState();

const [ NoResidenst, setNoResidenst ] = useState();

const getCargarApi = (url) =>{
  
   
    axios.get(url)
    .then( (rep) => {
        setCargarApi(rep.data)
        setloadError(false)
    })
    .catch((error) => {
         setloadError(true)
        console.error()
    }); 

    if(CargarApi === undefined){
        setNoResidenst(false)
    }
}
console.log('mostrando desde fech()  NoResidenst',NoResidenst)
return[CargarApi , getCargarApi, LoadError, NoResidenst ];

}