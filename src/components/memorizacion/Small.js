import React, { memo } from 'react';


// se usa para memorizar renderizados
const Small = memo(({value}) => {
    console.log('Me volvi a renderizar');
  return (
        <div>
            <small>{value}</small>
        </div>
    );
})

export default Small;
