import styled, { keyframes } from "styled-components";
import img from "../../assets/img/homepage-wallpaper.jpg";
import { fadeIn } from "react-animations";
import tada from "react-animations/lib/tada";
import { motion } from "framer-motion";

const containerAnimation = keyframes`${fadeIn}`;

const welcomeBoxAnimation = keyframes`${tada}`;

export const ContainerWelcome = styled.section`
  width:1320px;
  margin: 0 auto;
  height: calc(100% - 40px);
  padding: 20px;

`;
/*
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

#f2f3f7
*/

/** VER POSSIBILIDADES DE CORES, por isso deixei em branco */

export const WelcomeBox = styled.div`
  width: calc(100% - 40px);
  background: #ffffff;
  padding: 20px;
  border-radius: 7px;
  box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
  height: 11rem;


  h1,
  h2 {
    font-family: "Oswald", sans-serif;
  }

  h1 {
    font-weight: bold;
    font-size: 1.7em;
    text-transform: uppercase;
    
  }

  h2 {
    margin-top: 20px;
    font-size: 1.5em;
    font-family: inherit;
  }


`;

export const ContainerBox = styled(motion.div)`

    display: flex;
    justify-content: space-evenly;
    margin-top:20px;

`;


export const BoxDetails = styled(motion.div)`
    width: 180px;
    height: 150px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    box-shadow: -6px -6px 8px rgba(255, 255, 255, 0.9),
    5px 5px 8px rgba(0, 0, 0, 0.07);
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    -webkit-transition: 1s;
    transition: 1s;
`;