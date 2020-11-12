import React, { useEffect, useState, useContext } from "react";
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
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById(".noteSet");
    li = ul.getElementsByTagName('.noteTitle');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
 

  return (
    <MainNoteList>
      <NoteListHeader>
        <NoteListHeaderTitle>
          <SearchBlock>
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input className="myInput" onkeyup={myFunction} placeholder="Procure uma nota"></input>
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
                  <NoteCardTitle className="noteTitle" >
                    <StyledIcon /> {note.title}
                  </NoteCardTitle>
                  <NoteCardDate>{listFormatDate(note.updatedAt)}</NoteCardDate>
                </NoteCardHead>
                <NoteCardDesc>{note.desc}</NoteCardDesc>
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
