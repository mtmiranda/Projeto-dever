import React, { useContext, useReducer } from "react";
import StoreContext from "components/Store/Context";
import { NotesContext } from "../../context/context";
import NoteReducer from "../../reducer/NoteReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Homepage from "../../components/Homepage";
import Sidenavbar from "../../components/Sidenavbar";
import NoteList from "../../components/NoteList";
import Note from "../../components/Note";
import { 
  SideNavBarTopProfile,
  ProfileIcon,
  ProfileTitle,
  UniversityDescription,
  SiglaUniversity,
  FilePerfil,
  FileLogOut,
  } from "../../components/Sidenavbar/SidenavbarStyle";
import "../../assets/App.css";


import {
  faAngleDown,
  } from "@fortawesome/free-solid-svg-icons";



import {
  GridLayout,
  Header,
  Menu,
  Main,
  Footer,
} from "../.././styles/GridContainer";

//Importação da rota
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const initialState = [];

  const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  const [notes, notesDispatch] = useReducer(NoteReducer, initialState);

  function handleClickDrop(e) {
    e.preventDefault();
    var box = document.querySelector(".dropdown-menu");
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }


  return (
    <Router>
      <NotesContext.Provider value={{ notesState: notes, notesDispatch }}>
        <div className="pages-home">
          <GridLayout>
            <Header>
          
          <UniversityDescription>
         
          <SiglaUniversity />
          <p>
            (UCS)
            Universidade
            CastleStone 
          </p>
        </UniversityDescription>

          <SideNavBarTopProfile>
          <ProfileIcon>M</ProfileIcon>
          <ProfileTitle>
            <div className="container">
              Matheus Moreira
             <div className="dropdown-container" onClick={handleClickDrop}>
              <div className="dropdown-toggle click-dropdown">
                <FontAwesomeIcon className="icon" icon={faAngleDown} />
               
                <div className="dropdown-menu">
                  <h2>Tools</h2>
                  <button type="button"><FilePerfil/>Perfil</button>
                  <button type="button" onClick={() => setToken(null)}>
                    <FileLogOut/> Sair
                  </button>
                </div>
              </div>
            </div>
            </div>
          </ProfileTitle>
        </SideNavBarTopProfile>

        

            </Header>

            <Menu>
              <Sidenavbar />
            </Menu>

            <Main>
              <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/all-notes">
                  <NoteList title="Todas Anotações " />
                  <Route path="/all-notes/:id">
                    <Note />
                  </Route>
                </Route>

                <Route path="/trash">
                  <NoteList title="Lixeira" />
                  <Route path="/trash/:id">
                    <Note />
                  </Route>
                </Route>
              </Switch>
            </Main>
            <Footer>d</Footer>
          </GridLayout>
        </div>
      </NotesContext.Provider>
    </Router>
  );
};

export default PagesHome;
