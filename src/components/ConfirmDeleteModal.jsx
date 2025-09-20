export default function ConfirmDeleteModal({ show, onConfirm, onCancel }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,0.25)",
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative flex flex-col items-center">
        <h3 className="text-xl font-bold text-red-700 mb-4">¿Eliminar parque?</h3>
        <p className="mb-6 text-gray-700 text-center">Esta acción no se puede deshacer.</p>
        <div className="flex gap-4">
          <button
            className="bg-gradient-to-r from-red-600 to-red-400 text-white px-3 py-1 rounded shadow hover:scale-105 transition"
            onClick={onConfirm}
          >
            Sí, eliminar
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}