import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';


//Importanto as pages
import  Home from './pages/Home';
import  Login from './pages/Login';


//Criando conceito de SPA
const Routes = () => {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
      </Switch>
    </BrowserRouter>
    );
}

export default Routes;

