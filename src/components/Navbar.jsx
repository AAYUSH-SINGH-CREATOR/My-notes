
import { useNotes } from '../context/NotesContext';

export default function Navbar() {
  const { searchQuery, setSearchQuery, addNote } = useNotes();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-800 text-white shadow-md z-10">
      <div className="text-xl font-bold tracking-wide">My Notes</div>
      <input 
        type="text" 
        className="px-4 py-2 rounded-md w-96 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search notes..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button 
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-bold text-white transition-colors" 
        onClick={() => addNote(null)}
      >
        + Add Note
      </button>
    </nav>
  );
}