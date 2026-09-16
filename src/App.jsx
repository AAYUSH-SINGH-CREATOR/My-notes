import NoteForm from "./components/NoteForm";


export default function App() {

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold text-center">
          Notes App
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-5">

        <NoteForm />
        
      </div>


    </div>
  )
}