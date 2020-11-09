import styled, { keyframes } from "styled-components";
import img from "../../assets/img/homepage-wallpaper.jpg";
import { fadeIn } from "react-animations";
import tada from "react-animations/lib/tada";

const containerAnimation = keyframes`${fadeIn}`;

const welcomeBoxAnimation = keyframes`${tada}`;

const ContainerWelcome = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover;
  animation: 1.5s ${containerAnimation};
`;

const WelcomeBox = styled.div`
  width: 50%;
  height: auto;
  background: white;
  padding: 50px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0.5rem 1.5rem;
  position: relative;
  top: 30%;
  animation: 2s ${welcomeBoxAnimation};

  h1,
  h2 {
    font-family: "Oswald", sans-serif;
  }

  h1 {
    font-weight: bold;
    font-size: 2.8em;
  }

  h2 {
    margin-top: 20px;
    font-size: 1.5em;
  }
`;

export { ContainerWelcome, WelcomeBox };
