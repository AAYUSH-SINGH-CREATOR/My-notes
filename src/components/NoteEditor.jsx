
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useNotes } from '../context/NotesContext';

export default function NoteEditor() {
  const { notes, activeNoteId, updateNote, addNote } = useNotes();
  const activeNote = notes.find(n => n.id === activeNoteId);

  if (!activeNote) {
    return (
      <div className="w-4/5 flex justify-center items-center bg-slate-50 text-slate-400 text-xl">
        Select or create a note to start editing.
      </div>
    );
  }

  return (
    <main className="w-4/5 p-10 overflow-y-auto bg-slate-50 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <input 
          className="w-[70%] py-2 text-3xl font-bold bg-transparent outline-none text-slate-900 placeholder-slate-400"
          value={activeNote.title}
          onChange={(e) => updateNote(activeNote.id, { title: e.target.value })}
          placeholder="Note Title"
        />
        <button 
          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-md font-semibold transition-colors" 
          onClick={() => addNote(activeNote.id)}
        >
          + Add Sub-Note
        </button>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-sm">
        <ReactQuill 
          theme="snow" 
          value={activeNote.content} 
          onChange={(content) => updateNote(activeNote.id, { content })} 
          className="h-full"
        />
      </div>
    </main>
  );
}