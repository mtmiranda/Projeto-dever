import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import Hamburguer from "../../components/hamburguer/index";
import {
  GridLayout,
  Header,
  Menu,
  Main,
  Footer,
} from "../.././styles/GridContainer";
//Importação da rota
import { Link } from "react-router-dom";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      <GridLayout>
        <Header>a</Header>
        <Menu>
          <Hamburguer />
        </Menu>
        <Main>
          <h1>Hellou</h1>

          <Link to="/">Voltar para o login</Link>
        </Main>
        <Footer>d</Footer>
      </GridLayout>

      <button type="button" onClick={() => setToken(null)}>
        Sair
      </button>
    </div>
  );
};

export default PagesHome;
