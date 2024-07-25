import React from 'react';

const NoteItem = ({ note, onEditNote, onDeleteNote }) => {
  return (
    <div className="note-item">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.timestamp}</p>
      <button onClick={() => onEditNote(note)}>Edit</button>
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
