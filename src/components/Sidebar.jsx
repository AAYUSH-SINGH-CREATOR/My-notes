
import { useNotes } from '../context/NotesContext';
import ModuleItem from './ModuleItem';

export default function Sidebar() {
  const { notes, searchQuery } = useNotes();
  const rootNotes = notes.filter(n => n.parentId === null);
  const filteredRootNotes = rootNotes.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-1/5 bg-white border-r border-slate-200 overflow-y-auto p-4">
      {filteredRootNotes.map(note => (
        <ModuleItem key={note.id} note={note} allNotes={notes} depth={0} />
      ))}
    </aside>
  );
}