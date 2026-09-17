import { createContext, useState, useContext } from 'react';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'My First Note', content: '<p>Start writing here...</p>', parentId: null }
  ]);
  const [activeNoteId, setActiveNoteId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (parentId = null) => {
    const newNote = { id: Date.now(), title: '', content: '', parentId };
    setNotes([...notes, newNote]);
    setActiveNoteId(newNote.id);
  };

  const updateNote = (id, updatedFields) => {
    setNotes(notes.map(n => n.id === id ? { ...n, ...updatedFields } : n));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id && n.parentId !== id));
    if (activeNoteId === id) setActiveNoteId(null);
  };

  return (
    <NotesContext.Provider value={{ 
      notes, activeNoteId, setActiveNoteId, searchQuery, setSearchQuery, 
      addNote, updateNote, deleteNote 
    }}>
      {children}
    </NotesContext.Provider>
  );
};