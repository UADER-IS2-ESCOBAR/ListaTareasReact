import { useState } from 'react';
import './index.css'; // Importa TailwindCSS

function App() {
  const [tareas, setTareas] = useState([]);
  const [form, setForm] = useState({
    proyecto: '',
    tipoTarea: '',
    personaAsignada: '',
    storyPoints: '',
    prioridad: '',
    fechaCreacion: '',
    resumen: ''
  });
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, form]);
    setForm({
      proyecto: '',
      tipoTarea: '',
      personaAsignada: '',
      storyPoints: '',
      prioridad: '',
      fechaCreacion: '',
      resumen: ''
    });
    setShowModal(false); // Cerrar modal tras enviar el formulario
  };

  const handleDelete = (index) => {
    const newTareas = [...tareas];
    newTareas.splice(index, 1);
    setTareas(newTareas);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Gestión de Tareas</h1>

      {/* Botón para abrir el modal */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowModal(true)} // Muestra el modal al hacer clic
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Añadir Nueva Tarea
        </button>
      </div>

      {/* Lista de tareas en formato de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tareas.map((tarea, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{tarea.proyecto}</h3>
            <p className="text-gray-700"><strong>Tipo de Tarea:</strong> {tarea.tipoTarea}</p>
            <p className="text-gray-700"><strong>Persona Asignada:</strong> {tarea.personaAsignada}</p>
            <p className="text-gray-700"><strong>Story Points:</strong> {tarea.storyPoints}</p>
            <p className="text-gray-700"><strong>Prioridad:</strong> {tarea.prioridad}</p>
            <p className="text-gray-700"><strong>Fecha de Creación:</strong> {tarea.fechaCreacion}</p>
            <p className="text-gray-700"><strong>Resumen:</strong> {tarea.resumen}</p>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white py-1 px-2 rounded-md mt-4 hover:bg-red-600 transition-colors"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {/* Modal para el formulario */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Agregar Nueva Tarea</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="proyecto"
                placeholder="Proyecto"
                value={form.proyecto}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="tipoTarea"
                placeholder="Tipo de tarea"
                value={form.tipoTarea}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="personaAsignada"
                placeholder="Persona asignada"
                value={form.personaAsignada}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="number"
                name="storyPoints"
                placeholder="Story Points"
                value={form.storyPoints}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="prioridad"
                placeholder="Prioridad"
                value={form.prioridad}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="date"
                name="fechaCreacion"
                value={form.fechaCreacion}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="resumen"
                placeholder="Resumen"
                value={form.resumen}
                onChange={handleInputChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)} // Cerrar modal sin enviar
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Guardar Tarea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
