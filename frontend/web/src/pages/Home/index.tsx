import React from 'react';
import { GridLayout, Header, Menu, Main, Footer } from '../../styles/GridContainer';


//Importação da rota
import { Link } from 'react-router-dom';



const Home = () => {

    return(
        <div className="page-home">
            <GridLayout>
                <Header>a</Header>
                <Menu>b</Menu>
                <Main>

                <h1>Hellou</h1>
                <Link to="/">
                    Voltar para o login
                </Link>

                </Main>
                <Footer>d</Footer>
            </GridLayout>
            
            
        </div>
    ); 

};





export default Home;