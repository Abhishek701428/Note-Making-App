import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSaveNote, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: noteToEdit ? noteToEdit.id : Date.now(),
      title,
      content,
      timestamp: new Date().toLocaleString(),
    };
    onSaveNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
