import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

export const ShowIncrement = memo(({increment}) => {
    console.log('lalalaalla');
  return(
    <div>
        <Button onClick={() => increment(5)} >Incrementar</Button>
    </div>
  ) ;
})


