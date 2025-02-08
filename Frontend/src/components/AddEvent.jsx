export default function AddNewForm({ onClose }) {

  return (
    <div className="overlay">
      {/* Formulaire */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">
        <h2 className="text-xl text-black font-bold mb-4">ADD NEW</h2>

        {/* Nom */}
        <input type="text" placeholder="Event / Project Name" className="w-full p-2 border rounded mb-3  text-black" />

        {/* Type */}
        <div className="mb-3">
          <span className="font-semibold  text-black">TYPE</span>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center gap-1  text-black">
              <input type="radio" name="type" value="event " /> Event
            </label>
            <label className="flex items-center gap-1  text-black">
              <input type="radio" name="type" value="project" /> Project
            </label>
          </div>
        </div>

        {/* Date */}
        <input type="date" className="w-full p-2 border rounded mb-3  text-black" />

        {/* Description */}
        <textarea placeholder="Describe the Event / Project" className="w-full p-2 border rounded mb-3  text-black"></textarea>

        {/* Départements */}
        <div className="mb-3">
          <span className="font-semibold  text-black">DEPARTMENTS</span>
          <div className="grid grid-cols-2 gap-2 mt-1 text-sm  text-black">
            {["Development", "Design", "External Relations", "Multimedia", "Communication", "Human Relations", "Logistics"].map(dep => (
              <label key={dep} className="flex items-center gap-1">
                <input type="checkbox" value={dep} /> {dep}
              </label>
            ))}
          </div>
        </div>

        {/* Boutons */}
        <div className="flex justify-end gap-3">
          <button  type="button" onClick={onClose}  className="px-4 py-2 text-red-500 border border-red-500 rounded-lg cursor-pointer transition-all duration-200 hover:bg-red-100"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer transition-all duration-200 ">
            Save and Add
          </button>
        </div>
      </div>
    </div>
  );
}