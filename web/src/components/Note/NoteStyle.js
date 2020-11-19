import styled from "styled-components";
import {  FiArrowLeftCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const IconMenu = styled(FiArrowLeftCircle)`
  color: white;
  font-size: 1.5em;

`;

const MenuButton = styled(motion.button)`
    background: linear-gradient(90deg,#a900ff 0%,#3d00c6 100%);
    border-radius: 9em;
    padding: 5px 6px 2px 6px;
    box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
    margin: 7px;
    cursor: pointer;
    border: none;
    color: white;

&:focus {
  border:none;
}

`;


const MainNote = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  
`;

const NoteHeader = styled.section`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 15px;
  box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
    border-radius: 6px;

    @media (min-width: 320px) and (max-width: 610px) {  
      height: auto;
    }
    
`;

const NoteHeaderDate = styled.div`
  font-size: 14px;
  color: #737373;
  display: flex;
  align-items: center;
`;

const NoteHeaderActionBtn = styled.div`
  display: flex;
`;

const ActionBtn = styled.div`
  color: #737373;
  font-size: 14px;
  opacity: 0.6;
  margin: 0 10px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const NoteBody = styled.section`
  flex: 1;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
    border-radius: 6px;
    border: .5px solid rgba(0, 0, 0, .05);
`;

const NoteBodyHead = styled.div`
  input {
    padding: 10px;
    border: none;
    outline: none;
    width: 98%;
    background: #fafafa;
    border-radius: 6px;
    opacity: .8;
    margin-bottom: .6em;
    font-size: 22px;
    font-family: "Oswald",sans-serif;
    color: #2e0094;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .8px;
    padding: 10px;
  }
`;

const NoteBodyContent = styled.div`
  textarea {
    width: 98%;
    height: 32rem;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background: #fafafa;
    border-radius: 6px;
    opacity: .8;
    color:#000;
    
  }
`;

export {
  MainNote,
  NoteHeader,
  NoteHeaderDate,
  NoteHeaderActionBtn,
  ActionBtn,
  NoteBody,
  NoteBodyHead,
  NoteBodyContent,
  IconMenu,
  MenuButton,
};
