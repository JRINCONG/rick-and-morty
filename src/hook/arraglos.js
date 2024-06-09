const sumar = (array,num) =>{

    for(let i=0; i<=array.length; i++){

          for(let j=1; j<=array.length; j++){

               if(array[i] + array[j] === num){
                    return[array[i],array[j]]
               }
          }
    }


}

const array=[10, 5, 2, 3, 7, 5]
console.log(sumar(array,10))