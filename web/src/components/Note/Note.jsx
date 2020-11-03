import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MainNote,
  NoteHeader,
  NoteHeaderDate,
  NoteHeaderActionBtn,
  ActionBtn,
  NoteBody,
  NoteBodyHead,
  NoteBodyContent,
} from "./NoteStyle";

const Note = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateAt, setUpdateAt] = useState("");
  const [isArchive, setIsArchive] = useState(0);
  useEffect(() => {
    if (location.note) {
      setTitle(location.note.title);
      setDesc(location.note.desc);
      setUpdateAt(location.note.updateAt);
      setIsArchive(location.note.archive);
    }
  }, [location.note]);
  return (
    <MainNote>
      <NoteHeader>
        <NoteHeaderDate>Editada por ultimo em, {updateAt}</NoteHeaderDate>
        <NoteHeaderActionBtn>
          <ActionBtn>
            <FontAwesomeIcon className="" icon={faArchive}></FontAwesomeIcon>
          </ActionBtn>
        </NoteHeaderActionBtn>
      </NoteHeader>
      <NoteBody>
        <NoteBodyHead>
          <input value={title} placeholder="Title"></input>
        </NoteBodyHead>
        <NoteBodyContent>
          <textarea
            value={desc}
            placeholder="Digite uma nota aqui..."
          ></textarea>
        </NoteBodyContent>
      </NoteBody>
    </MainNote>
  );
};

export default Note;
