
import { NotesProvider } from './context/NotesContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NoteEditor from './components/NoteEditor';

export default function App() {
  return (
    <NotesProvider>
      <div className="flex flex-col h-screen bg-slate-50 font-sans">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
        <NoteEditor/>
        </div>
      </div>
    </NotesProvider>
  );
}