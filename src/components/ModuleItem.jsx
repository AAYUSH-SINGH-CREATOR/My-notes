import { useNotes } from '../context/NotesContext';

export default function ModuleItem({ note, allNotes, depth }) {
  const { activeNoteId, setActiveNoteId, deleteNote, addNote } = useNotes();
  const childNotes = allNotes.filter(n => n.parentId === note.id);

  const isActive = activeNoteId === note.id;

  return (
    <div className="relative">
      {depth > 0 && (
        <div 
          className="absolute top-0 bottom-0 w-px bg-slate-200"
          style={{ left: `${depth * 15 - 2}px` }}
        />
      )}

      <div 
        className={`flex justify-between items-center p-2 mb-1 cursor-pointer rounded-lg transition-all duration-200 group ${
          isActive 
            ? 'bg-white shadow-sm ring-1 ring-slate-200 text-blue-700 font-semibold' 
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
        style={{ paddingLeft: `${depth * 15 + 8}px` }}
        onClick={() => setActiveNoteId(note.id)}
      >
        <div className="flex items-center overflow-hidden">
    
          <div className={`flex-shrink-0 w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
            isActive 
              ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' 
              : 'bg-slate-300 group-hover:bg-slate-400'
          }`}></div>
          
          <span className="truncate tracking-wide">{note.title || 'Untitled Note'}</span>
        </div>
   
        <div className="hidden group-hover:flex items-center gap-1">
          
          {depth === 0 && (
            <button 
              className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-blue-100 text-blue-500 hover:text-blue-700 text-lg font-medium transition-colors leading-none" 
              onClick={(e) => { 
                e.stopPropagation(); 
                addNote(note.id); 
              }}
              title="Add Sub-Note"
            >
              +
            </button>
          )}
          
          <button 
            className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-red-100 text-red-400 hover:text-red-600 text-sm transition-colors" 
            onClick={(e) => { 
              e.stopPropagation(); 
              deleteNote(note.id); 
            }}
            title="Delete"
          >
            ✕
          </button>
        </div>
      </div>
      {childNotes.map(child => (
        <ModuleItem 
          key={child.id} 
          note={child} 
          allNotes={allNotes} 
          depth={depth + 1} 
        />
      ))}
    </div>
  );
}