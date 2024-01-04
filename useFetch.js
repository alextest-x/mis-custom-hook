import { useEffect, useState, useRef } from 'react';

export const useFetch = ( url ) => {

    //useref sirve para que solo se use mientras se este usando la referencia para el setState
    //el useRef solo se usa para que mientras esta montado se use el setState 
    const isMounted = useRef(true);
    
    const [state, setState] = useState({data: null, loading: true, error: null});

     useEffect( ()=> {
      
        //cuando se desmonte se ejecuta el return
        //y cambiamos el valor de isMounted a false
        //para mantener la refecrencia al mismo y no se reder otravez
        
        return() =>{
            isMounted.current = false;
        }

    }, [])
    


    //una vez que recibimos el url se ejecuta un effects

    useEffect( () => {
        

        //regresamos el loading en true para que regrese un nuevo estado
        setState({data: null, loading: true, error: null});

        fetch ( url ) 
            .then ( resp => resp.json() ) 
            .then ( data => {

        setTimeout( ()=> {  //

            //si es true ejecuta el setState sino no hace nada porque el componente ya esta desmontado
        if (isMounted.current) {

            setState({
                loading: false,
                error: null,
                data
            });
        } else{
            console.log('setState no se llamo porque esta desmontado');
        }

        }, 3000);  //
    });

    }, [url])

 return state; //regresamos un objeto
}


 