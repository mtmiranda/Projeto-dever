import styled from "styled-components";

export const NoteButton = styled.div`
  background: linear-gradient(90deg, #00e3d3 0%, #3d00c6 100%);
  opacity: 0.9;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  color: #fff;
  margin-top: 10px;
  .icon {
    font-size: 14px;
    margin: 5px;
  }
`;

export const NoteTitle = styled.div`
  margin-left: 12px;
`;


export const NoteContainer = styled.div`
  width: 99%;
  //padding: 0 15px;
  margin-bottom: 10px;
`;