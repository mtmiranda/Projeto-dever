import styled from "styled-components";

export const GridLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "aside header header"
    "aside main main"
    "footer footer footer";
  /*Column, primeira coluna altera o valor do aside*/
  grid-template-columns: 250px repeat(2, auto);
  grid-template-rows: auto 100vh auto;
  -webkit-display: grid;
  -webkit-grid-template-areas: "aside header header" "aside main main"
    "footer footer footer";

  -webkit-grid-template-columns: 250px repeat(2, auto);
  -webkit-grid-template-rows: auto 100vh auto;
  -moz-display: grid;
  -moz-grid-template-areas: "header header header" "aside main main"
    "footer footer footer";

  -moz-grid-template-columns: 250px repeat(2, auto);
  -moz-grid-template-rows: auto 100vh auto;

  grid-gap: 8px;
`;

export const Header = styled.header`
  grid-area: header;
  
`;

export const Menu = styled.aside`
  grid-area: aside;
  display: block;
  /*position: fixed;*/
  max-width: 100%;
  //box-shadow: rgba(0,0,0,0.04) 0px 0.5rem 1.5rem;
  border-bottom-right-radius: 3px;
  overflow-y: auto;
  overflow-x:hidden;
  background: #fcfcfc;
`;

export const Main = styled.main`
  grid-area: main;
  display: flex;
  align-items: center;
`;
export const Footer = styled.footer`
  grid-area: footer;
  height: 4em;
  background: #f1f1f1;
`;
