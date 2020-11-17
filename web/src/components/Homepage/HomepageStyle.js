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
  height: 8rem;
  margin-bottom: 15px;
  border: .5px solid rgba(0,0,0,.05);


  h1,
  h2 {
    font-family: "Oswald", sans-serif;
    color: #333;
  }

  h1 {
    font-weight: bold;
    font-size: 1.6em;
    text-transform: uppercase;
    text-align: center;
    
  }

  h2 {
    margin-top: 20px;
    font-size: 1.4em;
    font-family: inherit;
    width: 85%;
    margin: 0 auto;
    padding: 20px;
  }


`;

export const BannerBox = styled.section`
  width: calc(100% - 40px);
  background: linear-gradient(90deg,#00e3d3 0%,#3d00c6 100%);
  padding: 20px;
  border-radius: 7px;
  box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
  height: 1.5rem;
`;

export const ContainerBox = styled(motion.section)`

display: grid;
    width: 76%;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: 0.8rem;
    margin: 0 auto;
    margin-top: -36px;

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
    align-items: center;
    box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 6px;
    -webkit-transition: 1s;
    transition: 1s;
    justify-content: center;
    
    svg {
      margin-bottom: 10px;
    }

    h2 { 
      font-weight: 600;
      color: #333;
    }

    div {
      margin: 0;
    }
    
    div > div {
      background: transparent;
      flex-direction: column;
      color: #333;
      box-shadow: none;
      padding: 0;
      margin: 0;

     
      h2 {display: none}

      .icon {
        color: ${props => props.primary ? "#333" : "var(--c-purpleBase)"};
        background: ${props => props.primary ? "transparent" : "var(--backgroundIcon-homepage)"};
        font-size: ${props => props.primary ? "18px" : "var( --fontIcon-homagepage)"};
        padding: ${props => props.primary ? "0" : "var( --paddingIcon-homepage)"};
        border-radius: ${props => props.primary ? "none" : "3em"};
        margin-bottom: 10px;
      }

    }

`;
export const ContainerInfo = styled(motion.section)`
width: 100%;
display: flex;
justify-content: space-evenly;
margin-top: 20px;
`;

export const BoxInfo = styled(motion.div)`
width: 35%;
height: 14rem;
border-radius: 4px;
box-shadow: var(--shadow-base);
background: ${props => props.primary ? "var(--c-purpleLight)" : "var(--c-purpleBase)"};
`;