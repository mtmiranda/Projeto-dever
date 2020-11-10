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
  position: relative;
`;

const Overlay = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
  background: linear-gradient(90deg, #00e3d3 0%, #3d00c6 100%);
  opacity: 0.2;
`;

const WelcomeBox = styled.div`
  position: absolute;
  width: 37%;
  height: auto;
  background: white;
  padding: 50px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0.5rem 1.5rem;
  top: 30%;
  left: 27%;
  animation: 3s ${welcomeBoxAnimation};

  h1,
  h2 {
    font-family: "Oswald", sans-serif;
  }

  h1 {
    font-weight: bold;
    font-size: 2em;
  }

  h2 {
    margin-top: 20px;
    font-size: 1.5em;
    font-family: inherit;
  }
`;

export { ContainerWelcome, Overlay, WelcomeBox };
