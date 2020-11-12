import React from "react";
import { ContainerWelcome, WelcomeBox, ContainerBox, BoxDetails } from "./HomepageStyle";
import { motion, useCycle } from "framer-motion";
const Homepage = () => {
  
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90 }
  );

  return (
    <ContainerWelcome className="radial-gradient">
     
      <WelcomeBox>
        <h1>
          Seja Bem vindo(a) ao sistema de anotações da Universidade Castle
          Stone:
        </h1>
        <h2>
          Aqui voce poderá armazenar suas anotações e consultá-las durante seu
          período letivo. Fique à vontade para editar e customizar de acordo com
          suas disciplinas!
        </h2>
      </WelcomeBox>

      <ContainerBox>
        <BoxDetails>
          a
        </BoxDetails>

        <BoxDetails 
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        dragElastic={0.4} >
          b
        </BoxDetails >

        <BoxDetails 
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        dragElastic={0.4} >
          c
        </BoxDetails>

        </ContainerBox>

    </ContainerWelcome>
  );
};

export default Homepage;
