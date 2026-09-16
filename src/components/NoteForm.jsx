
export default function NoteForm() {
  return (
    <form className="bg-white p-5 rounded-lg shadow-md">

      <input
        type="text"
        placeholder="Note title"
        className="w-full border p-3 rounded mb-3 outline-none"
      />

      <textarea
        placeholder="Note description"
        rows="4"
        className="w-full border p-3 rounded mb-3 outline-none" 
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 cursor-pointer"
      >
        Add Note
      </button>

    </form>
  );
}
