import React, { useCallback, useState } from 'react';
import {ShowIncrement} from './ShowIncrement';


const CallBackHook = () => {
    const [counter, setCounter] = useState(10);
    console.log('Me volvi a generar');

// usecallback guarda la funcion 
    const increment= useCallback((num) => {
        // dependencia de estado es cuando depende del mismo estado 
      setCounter(pepito => pepito + num)
    }, [setCounter]);
    
    // const increment = (num) =>{
    //     setCounter(counter + num)
    // }

  return(
    <div>
        <h1>UseCallBack: {counter}</h1>
        <ShowIncrement increment={increment} />
    </div> 
  )
};

export default CallBackHook;
