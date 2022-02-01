import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../hooks/userContext';

const About = () => {

    const {user, setUser}= useContext(UserContext)
    console.log(user);

  return (
    <div>
        <h1>About</h1>
        <pre>
            {
                JSON.stringify(user)
            }
        </pre>
        <Button onClick={() => setUser({
            nombre:'Susana',
            apellido:'Perea'
        })}>Cambiar estado</Button>
    </div>
    );
};

export default About;
