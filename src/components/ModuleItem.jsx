
import { useNotes } from '../context/NotesContext';

export default function ModuleItem({ note, allNotes, depth }) {
  const { activeNoteId, setActiveNoteId, deleteNote } = useNotes();
  const childNotes = allNotes.filter(n => n.parentId === note.id);

  return (
    <div>
      <div 
        className={`flex justify-between items-center p-2 mb-1 cursor-pointer rounded-md transition-colors group ${
          activeNoteId === note.id ? 'bg-slate-200 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
        }`}
        style={{ paddingLeft: `${depth * 15 + 8}px` }}
        onClick={() => setActiveNoteId(note.id)}
      >
        <span className="truncate pr-2">{note.title || 'Untitled Note'}</span>
        
        <button 
          className="hidden group-hover:block text-red-500 hover:text-red-700 text-sm font-bold px-2" 
          onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
        >
          ✕
        </button>
      </div>
      
      {childNotes.map(child => (
        <ModuleItem key={child.id} note={child} allNotes={allNotes} depth={depth + 1} />
      ))}
    </div>
  );
}