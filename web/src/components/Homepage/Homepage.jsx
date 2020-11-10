import React from "react";

import { ContainerWelcome, Overlay, WelcomeBox } from "./HomepageStyle";

const Homepage = () => {
  return (
    <ContainerWelcome className="radial-gradient">
      <Overlay />
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
    </ContainerWelcome>
  );
};

export default Homepage;
