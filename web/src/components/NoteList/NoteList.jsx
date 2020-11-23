import React, { useEffect, useState, useContext, Fragment } from "react";
import { useRouteMatch, useHistory, NavLink } from "react-router-dom";
import {
  BASE_URL,
  GET_ALL_NOTES,
  GET_TRASH_NOTES,
} from "../../utils/apiEndpoints";
import { getRequest } from "../../utils/apiRequests";
import { NotesContext } from "../../context/context";
import { listFormatDate } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NewNote from "../NewNote/index";
import {
  MainNoteList,
  NoteListHeader,
  NoteListHeaderTitle,
  NoteListHeaderSubHead,
  NoteCount,
  NoteListBody,
  NoteCard,
  NoteCardHead,
  NoteCardTitle,
  SearchBlock,
  NoteCardDesc,
  NoteCardDate,
  StyledIcon,
} from "./NoteListStyle";

const NoteList = (props) => {
  const [error, setError] = useState(null);
  const notesContext = useContext(NotesContext);
  const { title } = props;
  const match = useRouteMatch();
  const history = useHistory();
  const totalNotes = notesContext.notesState.length;

  useEffect(() => {
    getNotes();
  }, [match.url]);

  const getNotes = async () => {
    let endpoint = "";
    if (match.url == "/all-notes") {
      endpoint = GET_ALL_NOTES;
    } else if (match.url == "/trash") {
      endpoint = GET_TRASH_NOTES;
    } else {
      return;
    }

    const response = await getRequest(`${BASE_URL}${endpoint}`);
    if (response.error) {
      setError(response.error);
      return false;
    }
    notesContext.notesDispatch({
      type: "getAllNotesSuccess",
      payload: response,
    });

    if (response.length > 0) {
      history.push({
        pathname: `${match.url}/${response[0]._id}`,
        note: response[0],
      });
    }
  };
 
  

  return (
 
    
    <MainNoteList className="noteContent">
      <NoteListHeader>
        <NoteListHeaderTitle>
          <SearchBlock>
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input
              className="myInput"
              placeholder="Procure uma nota"
            ></input>
          </SearchBlock>
        </NoteListHeaderTitle>

        <NewNote />

        <NoteListHeaderSubHead>
          <h1>{title}</h1>
          <NoteCount>{totalNotes} notas</NoteCount>
        </NoteListHeaderSubHead>
      </NoteListHeader>

      <NoteListBody>
        {notesContext.notesState.length > 0 ? (
          notesContext.notesState.map((note) => (
            <NavLink
              key={note._id}
              to={{
                pathname: `${match.url}/${note._id}`,
                note,
              }}
            >
              <NoteCard className="noteSet">
                <NoteCardHead>
                  <StyledIcon />
                  <NoteCardTitle className="noteTitle">
                    {note.title}
                  </NoteCardTitle>
                  <NoteCardDate>{listFormatDate(note.updatedAt)}</NoteCardDate>
                  <NoteCardDesc>{note.desc}</NoteCardDesc>
                </NoteCardHead>
              </NoteCard>
            </NavLink>
          ))
        ) : (
          <div className="empty-state">Nenhum arquivo encontrado</div>
        )}
      </NoteListBody>
    </MainNoteList>
  
  );
};

export default NoteList;
