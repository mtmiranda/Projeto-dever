import React, { Fragment } from 'react';
import GlobalStyle from '../styles/globalStyle';
import { FormSection, BouncyDiv } from "../styles/loginStyles";
import Login from "../pages/Login/index";

//Importando a nossa rota
import Routes from '../routes';


function App() {
  return (
    <Fragment>
    <GlobalStyle />
    <Routes />
    
    {/* <BouncyDiv>
          <FormSection>
            <Login />
          </FormSection>
        </BouncyDiv> */}

    </Fragment>
  
  );
}

export default App;
