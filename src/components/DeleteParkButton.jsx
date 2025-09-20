export default function DeleteParkButton({ onDelete }) {
  function handleClick() {
    if (window.confirm("¿Seguro que deseas eliminar este parque?")) {
      onDelete();
    }
  }
  return (
    <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700" onClick={handleClick}>
      Eliminar
    </button>
  );
}