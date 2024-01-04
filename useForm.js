import { useState } from "react"


//customsHook sirve para manejar los formularios
//logica del formulario 


//el useForm recibe un objeto y en la llaves {} debe tener las propiedades
//que pueden ser un campo de texto o un campo del formilario

export const useForm = ( initialState = {} ) => {

    const [ values, setValues ] = useState(initialState );

    //resetea la caja de texto en el formulario y lo exportamos como el tercer agumento del arreglo
   const reset = () => {
    setValues( initialState )
   }
    
  

    const handleInputChange = ( { target } ) => {

        setValues ({
        ...values,
        [ target.name ]: target.value
      });

    }

    //se puede retornar como un objeto o un arreglo
    //values es el estado del formulario
    //handleInputChange es el segundo valor
    //sirve para cambiar los valores del formulario
    return [values, handleInputChange, reset ];



}
