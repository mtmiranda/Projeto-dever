import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "components/Store/Context";

//REACT ICONS IMPORTS
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

//STYLED COMPONENTS IMPORTS
import {
  Container,
  TitlePrincipal,
  IconUniversity,
  Form,
  FormInput,
  Button,
  FormSection,
  InputBox,
  TitleForm,
  Error,
  CardSection,
  CardText,
} from "../../../styles/loginStyles";
import { IconContext } from "react-icons/lib";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  } else if (user == 202002220249 && password == 4321) return { token: "1234" };
  else {
    return { error: "Matrícula ou Senha inválida" };
  }
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push("/");
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <>
      <Container>
        <FormSection>
          <IconUniversity />
          <Form onSubmit={onSubmit}>
            <TitleForm>Login</TitleForm>

            <InputBox>
              <IconContext.Provider
                value={{
                  style: {
                    position: "absolute",
                    top: "19px",
                    left: "15px",
                    color: "#2e0094",
                  },
                }}
              >
                <FaUserGraduate size={15} />
              </IconContext.Provider>

              <FormInput
                id="user"
                type="text"
                name="user"
                onChange={onChange}
                value={values.user}
                placeholder="Matrícula"
              />
            </InputBox>

            <InputBox>
              <IconContext.Provider
                value={{
                  style: {
                    position: "absolute",
                    top: "19px",
                    left: "15px",
                    color: "#2e0094",
                  },
                }}
              >
                <RiLockPasswordFill size={15} />
              </IconContext.Provider>
              <FormInput
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
                placeholder="Senha"
              />
            </InputBox>

            {error && <Error>{error}</Error>}

            <Button type="submit">Entrar</Button>
          </Form>
        </FormSection>
        <CardSection>
          
          <div>
        
            <TitlePrincipal>Universidade Castle Stone</TitlePrincipal>
            <h2>Bem vindo!</h2>
            <h3>
               Agora insira as suas credenciais de acesso para começar a visualizar suas
              anotações.
            </h3>

            </div>
        </CardSection>
      </Container>
    </>
  );
};

export default UserLogin;
