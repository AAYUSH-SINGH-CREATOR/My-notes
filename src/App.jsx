import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import { useState, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("my-notes");
    return saved ? JSON.parse(saved) : [];
  }
  );

  useEffect(() => {
    localStorage.setItem("my-notes", JSON.stringify(notes));
  }, [notes]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const addNote = () => {
    if (!title.trim() || !description.trim()) return;
    const newNote = { id: Date.now(), title, description };
    setNotes([newNote, ...notes]);
    setTitle("");
    setDescription("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };


  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold text-center">
          Notes App
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-5">

        <NoteForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          addNote={addNote}
        />

        <h2 className="text-2xl font-bold mt-8 mb-5">
          My Notes
        </h2>

        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  )
}