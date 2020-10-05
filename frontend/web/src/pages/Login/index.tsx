import React from 'react';

//Importação da rota
import { Link } from 'react-router-dom';


const Login = () => {

    return(
        <div className="page-login">
            <h1>Hellou</h1>
            <Link to="/Home">
                Ir para Home
            </Link>
        </div>
    ); 

};


export default Login;