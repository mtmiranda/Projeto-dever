import React, { useState, useContext } from "react";
import { NotesContext } from "context/context";
import StoreContext from "../Store/Context";
import SvgComponent from "../../assets/SvgComponents/index";
//import dropdown from "dropdown.js";

//IMPORTS ICONS

//IMPORTS STYLED COMPONENTS
import {
  SideNavBar,
  SideNavBarTop,
  SideNavBarTopCreateNote,
  SideNavBarTopMenuItem,
  FilePlus,
  FileTrash,
  FileStar,
  FileHome,
  MenuButton,
  FileMenu,
  
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



  function handleClickMenu(e) {
    e.preventDefault();
    var menu = document.querySelector(".menu-content");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
 

  

  return (
    <SideNavBar>
      <MenuButton onClick={handleClickMenu}><FileMenu/></MenuButton> 
      <SideNavBarTop className="menu-content">
        <SideNavBarTopCreateNote>
        <SvgComponent />
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
                <FilePlus primary/>
                Todas Anotações
              </NavLink>
            </li>
            <li>
              <NavLink to="/fav">
                <FileStar primary />
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
