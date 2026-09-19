import { createContext, useState, useContext, useEffect } from 'react';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes-app-data');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    }
    return [
      { id: 1, title: 'My First Note', content: '<p>Start writing here...</p>', parentId: null }
    ];
  });

  const [activeNoteId, setActiveNoteId] = useState(notes.length > 0 ? notes[0].id : null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (parentId = null) => {
    const newNote = { id: Date.now(), title: '', content: '', parentId };
    setNotes([...notes, newNote]);
    setActiveNoteId(newNote.id);
  };

  const updateNote = (id, updatedFields) => {
    setNotes(notes.map(n => n.id === id ? { ...n, ...updatedFields } : n));
  };

  const deleteNote = (id) => {
    const remainingNotes = notes.filter(n => n.id !== id && n.parentId !== id);
    setNotes(remainingNotes);
    
    if (activeNoteId === id) {
      setActiveNoteId(remainingNotes.length > 0 ? remainingNotes[0].id : null);
    }
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