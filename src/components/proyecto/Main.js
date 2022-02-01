import React, { useState } from 'react';
import { UserContext } from '../../hooks/userContext';
import AppRouter from '../../routes/AppRouter';

const Main = () => {

    const [user, setUser] = useState({
        nombre:'Benito',
        apellido:'Camela'
    });
  return  (
        // aca le estamos dando contextoo al usercontext
        <UserContext.Provider value={{user, setUser}}>
            {/* aca esta disponible para todo lo que haya aca adentro */}
            <AppRouter />
        </UserContext.Provider>
  )
};

export default Main;
