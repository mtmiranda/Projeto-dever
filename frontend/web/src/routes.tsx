import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';


//Importanto as pages
import  Home from './pages/Home';
import  Login from './pages/Login';


//Criando conceito de SPA
const Routes = () => {
    return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/Home" exact component={Home} />
    </BrowserRouter>
    );
}

export default Routes;

