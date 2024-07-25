import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm.jsx';
import NoteList from './components/NoteList.jsx';
import SearchBar from './components/SearchBar.jsx';
import Pagination from './components/Pagination.jsx';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const notesPerPage = 10;

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleSaveNote = (note) => {
    let updatedNotes;
    if (noteToEdit) {
      updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    } else {
      updatedNotes = [...notes, note];
    }
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNoteToEdit(null);
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div className="app-container">
      <h1>Simple Note Taking App</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <NoteForm onSaveNote={handleSaveNote} noteToEdit={noteToEdit} />
      <NoteList
        notes={currentNotes}
        onEditNote={handleEditNote}
        onDeleteNote={handleDeleteNote}
      />
      <Pagination
        totalNotes={filteredNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
