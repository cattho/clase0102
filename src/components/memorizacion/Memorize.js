import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const{counter, handleSumar}=useCounter()
  const [show, setShow]= useState(true)
  
    return (
        <div>
            <h1>Contador: <Small value={counter} /></h1>
            <Button onclick={handleSumar}>+1</Button>
            <Button onclick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
  );
};
export default Memorize;
  

