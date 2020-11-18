import styled from "styled-components";
import { motion } from "framer-motion";
import { FiFileText} from "react-icons/fi";

/*Icons settings*/



const StyledIcon = styled(FiFileText)`
  color: #fff;
  font-size: 17px;
  font-weight: bolder;
  background: linear-gradient(90deg, #a900ff 0%, #3d00c6 100%);
  padding: 8px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  margin-right: 10px;
  position: absolute;
  top: 15px;
  left: 11px;
`;

const MainNoteList = styled.section`
display: block;
  height: 100%;
  width: 100px;
  max-width: 670px;
  min-width: 250px;
  background: #fcfcfc;
  /*border-right: 1px solid #e6e6e6;*/
  display: flex;
  flex-direction: column;
  a:hover,
  a:active {
    color: #333;
  }

  a.active section {
    background: #afaaff;
    color: #333;
  }

  a.active section:hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
  display: none;
  min-width: 208px;
  }
`;

const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  padding: 6px 10px;
  border-radius: 5px;

  .icon {
    font-size: 16px;
    margin: 5px;
  }

  input {
    color: #333;
    margin-left: 10px;
    background: none;
    outline: none;
    border: none;
  }
`;

const NoteListHeader = styled.section`
  padding: 5px 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 137px;
  box-sizing: border-box;
  background: transparent;
`;

const NoteListHeaderTitle = styled.div`
  width: 100%;
  flex: 1;
`;

const NoteListHeaderSubHead = styled.div`
  width: 100%;
  margin: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 17px;
    font-family: "Oswald", sans-serif;
    color: #2e0094;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 6px;
  }
`;

const NoteCount = styled.div`
  background: linear-gradient(90deg, #00e3d3 0%, #3d00c6 100%);
  border-radius: 3px;
  color: white;
  padding: 4px;
  font-size: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  margin-top: 2px;
`;

const NoteListBody = styled.section`
  flex: 1;
  overflow: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #e1e1e1;
    -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: #e1e1e1;
  }

  .empty-state {
    opacity: 0.3;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: lowercase;
    font-size: 14px;
  }
`;

const NoteCard = styled.section`
  height: 86px;
  /*padding: 20px 25px;*/
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  text-decoration: none;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 6px;
  padding: 10px;
  transition: 1s;
  position: relative;

  &:hover {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
      inset -2px -2px 4px rgba(255, 255, 255, 0.5),
      inset 2px 2px 2px rgba(255, 255, 255, 0.075),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 68px;
  }
`;

const NoteCardHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const NoteCardTitle = styled.h1`
  width: 75%;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: "Roboto", sans-serif;
  padding: 4px;
  margin-left: 44px;
  margin-top: 6px;
`;

const NoteCardDesc = styled.p`
  width: auto;
  color: #737373;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  margin-top: 7px;
  margin-left: 48px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 2px;
  }

`;

const NoteCardDate = styled.p`
  font-size: 10px;
  margin-left: 48px;
`;

export {
  MainNoteList,
  NoteListHeader,
  NoteListHeaderTitle,
  NoteListHeaderSubHead,
  NoteCount,
  NoteListBody,
  NoteCard,
  NoteCardHead,
  NoteCardTitle,
  NoteCardDesc,
  NoteCardDate,
  SearchBlock,
  StyledIcon,
};
