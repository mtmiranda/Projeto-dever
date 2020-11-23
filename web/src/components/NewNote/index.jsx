import React, { useState, useContext } from "react";
import { NotesContext } from "context/context";
import StoreContext from "../Store/Context";

import { NoteButton, NoteTitle, NoteContainer } from "./style";

//IMPORTS ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//ROTAS
import { NavLink, useHistory } from "react-router-dom";
import { postRequest } from "utils/apiRequests";
import { BASE_URL, CREATE_NOTE } from "utils/apiEndpoints";

const NewNote= () => {

    const notesContext = useContext(NotesContext);
    const history = useHistory();
    const [error, setError] = useState(null);
  
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


  return (
    <NoteContainer>  
    <NoteButton onClick={handleCreateNote} primary>
    <FontAwesomeIcon className="icon" icon={faPlus} />
    <NoteTitle>Nova Nota</NoteTitle>
    </NoteButton>
    </NoteContainer>
  );
};

export default NewNote;


