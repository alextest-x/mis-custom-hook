import { useState} from 'react';


export const useCounterP = ( initialState= 10 ) => {
  
    const [counter, setCounter ] = useState(initialState); //10


    //mandando por referencia argumento factor
    const increment = ( ) => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialState );
    }



 return {
    counter,
    increment,
    decrement,
    reset
    };
}
