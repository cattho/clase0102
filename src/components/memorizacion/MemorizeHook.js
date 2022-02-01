import { Button } from 'react-bootstrap';
import React, { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';
import Small from './Small';

const MemorizeHook = () => {
  const{counter, handleSumar}=useCounter()
  const [show, setShow]= useState(true);


//   el use memo es para cuando vamos a traer mucha informacion
  const proceso = useMemo(() => procesoPesado(500), [counter]);
  
    return (
        <div>
            <h1>Contador: <Small value={counter} /></h1>
            <p>{proceso}</p>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
  );
};
export default MemorizeHook;
  