import React from 'react';
import NoteItem from './NoteItem.jsx';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEditNote={onEditNote}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
