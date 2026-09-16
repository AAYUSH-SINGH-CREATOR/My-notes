
export default function Note({ note, deleteNote , editNote}) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p className="text-gray-600 mb-4">{note.description}</p>
            <div className="flex gap-2">
                <button
                    onClick={() => editNote(note)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}