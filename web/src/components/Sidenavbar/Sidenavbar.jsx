import React, { useState, useContext } from "react";
import { NotesContext } from "context/context";
import StoreContext from "../Store/Context";
import NewNote from "../NewNote/index";
//import dropdown from "dropdown.js";

//IMPORTS ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faInfo,
  faPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

//IMPORTS STYLED COMPONENTS
import {
  SideNavBar,
  SideNavBarTop,
  SideNavBarTopProfile,
  ProfileIcon,
  ProfileTitle,
  SideNavBarTopCreateNote,
  SideNavBarTopMenuItem,
  FilePlus,
  FileTrash,
  FileStar,
  FileHome,
  UniversityDescription,
  SiglaUniversity,
} from "./SidenavbarStyle";

//ROTAS
import { NavLink, useHistory } from "react-router-dom";
import { postRequest } from "utils/apiRequests";
import { BASE_URL, CREATE_NOTE } from "utils/apiEndpoints";

const Sidenavbar = () => {
  const notesContext = useContext(NotesContext);
  const history = useHistory();
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);

  const handleCreateNote = async () => {
    const response = await postRequest(`${BASE_URL}${CREATE_NOTE}`);
    console.log(response);
    if (response.error) {
      setError(response.error);
      return false;
    }

    if (response._id) {
      notesContext.notesDispatch({
        type: "createNoteSuccess",
        payload: response,
      });
      history.push({
        pathname: `/all-notes/${response._id}`,
        note: response,
      });
    }
  };

  function handleClickDrop(e) {
    e.preventDefault();
    var box = document.querySelector(".dropdown-menu");
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }
  /*
  window.onload = function() {
    var ul = document.querySelector(".ulSide");
    var li = document.querySelector(".liSide");

    if(document.body.classList.contains('.liSide')) {
      document.querySelector(".liSide .active").remove();
    }
    

  };*/
  

  return (
    <SideNavBar>
      <SideNavBarTop>
        <SideNavBarTopProfile>
          <ProfileIcon>M</ProfileIcon>
          <ProfileTitle>
            Matheus Moreira
            <div className="dropdown-container" onClick={handleClickDrop}>
              <div className="dropdown-toggle click-dropdown">
                <FontAwesomeIcon className="icon" icon={faAngleDown} />

                <div className="dropdown-menu">
                  <button type="button">Perfil</button>
                  <button type="button" onClick={() => setToken(null)}>
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </ProfileTitle>
        </SideNavBarTopProfile>

        <UniversityDescription>
          <p>
            Universidade <br />
            CastleStone (UCS)
            <SiglaUniversity />
          </p>
        </UniversityDescription>

        <SideNavBarTopCreateNote>
        </SideNavBarTopCreateNote>
        <SideNavBarTopMenuItem>
          <ul className="ulSide">
            <li>
              <NavLink to="/" className="liSide">
                <FileHome />
                {/* <FontAwesomeIcon className="icon" icon={faHome} /> */}
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-notes">
                {/*} <FontAwesomeIcon className="icon" icon={faStickyNote} />*/}
                <FilePlus />
                Todas Anotações
              </NavLink>
            </li>
            <li>
              <NavLink to="/fav">
                <FileStar />
                Favorito
              </NavLink>
            </li>
            <li>
              <NavLink to="/trash">
                {/*<FontAwesomeIcon className="icon" icon={faTrash} />*/}
                <FileTrash />
                Lixeira
              </NavLink>
            </li>
          </ul>
        </SideNavBarTopMenuItem>
      </SideNavBarTop>
    </SideNavBar>
  );
};

export default Sidenavbar;
