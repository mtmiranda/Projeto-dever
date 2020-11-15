import styled from "styled-components";

export const NoteButton = styled.div`
  background: ${props => props.primary ? "linear-gradient(90deg, #00e3d3 0%, #3d00c6 100%)" : "transparent"};
  opacity: 0.9;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: ${props => props.primary ? "row" : "column"};
  align-items: center;
  box-shadow: ${props => props.primary ? "rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem " : "none"};
  color: ${props => props.primary ? "#fff" : "var(--c-purpleBase)"};
  margin-top: 10px;
  .icon {
    background: ${props => props.primary ? "transparent" : "var(--backgroundIcon-homepage)"};
    font-size: ${props => props.primary ? "14px" : "var(--fontIcon-homagepage)"};
    margin: 5px;
  }
`;

/**
 *  color: 
  
  
  padding: ${props => props.primary ? "0" : "10px"};
  border-radius: ${props => props.primary ? "none" : "2em"};
 */

export const NoteTitle = styled.h2`
  margin-left: 12px;
`;


export const NoteContainer = styled.div`
  width: 99%;
  //padding: 0 15px;
  margin-bottom: 10px;
`;