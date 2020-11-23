import React, {useContext} from "react";
import { ContainerWelcome, WelcomeBox, ContainerBox, BoxDetails, BannerBox, ContainerInfo, BoxInfo } from "./HomepageStyle";
import { motion, useCycle } from "framer-motion";
import { FilePlus, FileStar, FileEdit } from "../Sidenavbar/SidenavbarStyle";
import SvgComponentInfo from "../../assets/SvgComponents/boxInfo1";
import SvgComponentInfo2 from "../../assets/SvgComponents/boxInfo2";
import NewNote from "../NewNote/index";
import { NavLink, useHistory } from "react-router-dom";

const Homepage = (props) => {
  
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90 }
  );
 

  return (
    <ContainerWelcome className="radial-gradient">
     
      <WelcomeBox>
        <h1>
          Seja Bem vindo(a) ao sistema de anotações da Universidade Castle
          Stone
        </h1>
        <h2>
          Aqui voce poderá armazenar suas anotações e consultá-las durante seu
          período letivo. Fique à vontade para editar e customizar de acordo com
          suas disciplinas!
        </h2>
        </WelcomeBox>
        <BannerBox/>
      <ContainerBox>
       

        <BoxDetails 
        initial={{ y: -14 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        >
          <NewNote/>
          <h2>Crie suas anotações</h2>
        
        </BoxDetails >

        <BoxDetails
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        >           
        <NavLink to="/all-notes">
                <FilePlus/>
          </NavLink>
        <h2>Acesse suas anotações</h2>
        </BoxDetails>

        <BoxDetails 
        initial={{ y: -8 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        >
        <NavLink to="/fav">
        <FileStar />
        </NavLink>
         <h2>Favorite suas anotações</h2>
        </BoxDetails>

        <BoxDetails
        initial={{ y: -6 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        >
          <FileEdit />
          <h2>Edite suas anotações</h2>

          </BoxDetails>

        </ContainerBox>
      <ContainerInfo>
        <BoxInfo primary>
         <SvgComponentInfo/>
          <div>
          <h2>Aqui você faz suas anotações em um único lugar
          </h2>
          <h3>Sem a necessidade de utilização de cadernos, papéis...</h3>
          </div>
        </BoxInfo>
        <BoxInfo>
          <div>
          <h2>Atualizações em breve
          </h2>
          <h3>Traremos a opção para você criar grupos, para compartilhar suas anotações com seus amigos!</h3>
          </div>
          <SvgComponentInfo2/>
        </BoxInfo>
      </ContainerInfo>

    </ContainerWelcome>
  );
};

export default Homepage;
