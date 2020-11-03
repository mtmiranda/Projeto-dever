import React from "react";
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
  NoteCardDesc,
  NoteCardDate,
} from "./NoteListStyle";

const NoteList = (props) => {
  const { title } = props;

  return (
    <MainNoteList>
      <NoteListHeader>
        <NoteListHeaderTitle>
          <h1>{title}</h1>
        </NoteListHeaderTitle>
        <NoteListHeaderSubHead>
          <NoteCount>2 notas</NoteCount>
        </NoteListHeaderSubHead>
      </NoteListHeader>

      <NoteListBody>
        <NoteCard>
          <NoteCardHead>
            <NoteCardTitle>Nota um</NoteCardTitle>
            <NoteCardDesc>Descrição da nota</NoteCardDesc>
          </NoteCardHead>
          <NoteCardDate>29/10/2020</NoteCardDate>
        </NoteCard>

        <NoteCard>
          <NoteCardHead>
            <NoteCardTitle>Nota um</NoteCardTitle>
            <NoteCardDesc>Descrição da nota</NoteCardDesc>
          </NoteCardHead>
          <NoteCardDate>29/10/2020</NoteCardDate>
        </NoteCard>
      </NoteListBody>
    </MainNoteList>
  );
};

export default NoteList;
