import { useState, useEffect } from "react";
import { getParks, createPark, updatePark, deletePark } from "./services/api";
import logo from "./assets/images/bosquesurbanos.png";
import ParkForm from "./components/ParkForm";
import ParkModal from "./components/ParkModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";

export default function App() {
  const [parks, setParks] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [modalPark, setModalPark] = useState(null);
  const [editModalPark, setEditModalPark] = useState(null);
  const [deleteModalPark, setDeleteModalPark] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadParks();
  }, []);

  async function loadParks() {
    const data = await getParks();
    setParks(data.data);
  }

  async function handleCreatePark(form) {
    setLoading(true);
    await createPark(form);
    setLoading(false);
    setShowCreate(false);
    loadParks();
  }

  async function handleEditPark(form) {
    setLoading(true);
    await updatePark(editModalPark.id, form);
    setLoading(false);
    setEditModalPark(null);
    loadParks();
  }

  async function handleDeletePark() {
    if (deleteModalPark) {
      setLoading(true);
      await deletePark(deleteModalPark.id);
      setLoading(false);
      setDeleteModalPark(null);
      setModalPark(null); // Cierra el modal de detalle si estaba abierto
      loadParks();
    }
  }

  function handleCardClick(parkId) {
    const park = parks.find((p) => p.id === parkId);
    setModalPark(park);
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="bg-green-200 text-white shadow-md">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bosques Urbanos Jalisco" className="flex" />
          </div>
          <nav>
            <button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
              onClick={() => setShowAdmin(!showAdmin)}
            >
              Administrar Parques
            </button>
          </nav>
        </div>
      </header>

      {/* Catálogo de parques */}
      <main className="min-h-screen bg-green-50 p-8 py-10 flex-grow">
        <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
          Lista de Parques 🌳
        </h2>

        {/* Formulario de crear parque arriba de las tarjetas */}
        {showAdmin && (
          <div className="w-full max-w-2xl mx-auto mb-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Agregar un nuevo parque
            </h3>
            <div className="flex gap-4 mb-4">
              {!showCreate && (
                <button
                  className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded shadow font-semibold hover:scale-105 transition"
                  onClick={() => setShowCreate(true)}
                >
                  Crear Parque
                </button>
              )}
            </div>
            {showCreate && (
              <ParkForm
                onSubmit={handleCreatePark}
                loading={loading}
                submitLabel={
                  <span className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded shadow font-semibold">
                    Crear
                  </span>
                }
              />
            )}
          </div>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {parks.length === 0 ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl shadow-md overflow-hidden animate-pulse h-72"
              >
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))
          ) : (
            parks.map((park) => (
              <div
                key={park.id}
                className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full"
              >
                <img
                  src={`https://azuritaa33.sg-host.com/storage/${park.park_img_uri}`}
                  alt={park.park_name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => handleCardClick(park.id)}
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-bold text-green-800 mb-2 cursor-pointer"
                    onClick={() => handleCardClick(park.id)}
                  >
                    {park.park_name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1 truncate">
                    📍 {park.park_city}, {park.park_state}
                  </p>
                  <p className="text-gray-500 text-sm flex-grow">
                    {park.park_address}
                  </p>
                  {showAdmin && (
                    <div className="mt-2 flex gap-2">
                      <button
                        className="bg-gradient-to-r from-red-600 to-red-400 text-white px-3 py-1 rounded shadow hover:scale-105 transition"
                        onClick={() => setDeleteModalPark(park)}
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Detalle Bonito */}
        <ParkModal
          show={!!modalPark}
          park={modalPark}
          onClose={() => setModalPark(null)}
          onEdit={(park) => {
            setEditModalPark(park);
            setModalPark(null);
          }}
        />

        {/* Modal Editar Parque */}
        {editModalPark && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{
              backdropFilter: "blur(8px)",
              background: "rgba(255,255,255,0.25)",
            }}
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
              <button
                className="absolute top-4 right-4 text-green-700 hover:text-green-900 text-2xl font-bold"
                onClick={() => setEditModalPark(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
                Editar Parque
              </h2>
              <ParkForm
                initialData={editModalPark}
                onSubmit={handleEditPark}
                loading={loading}
                submitLabel={
                  <span className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded shadow font-semibold">
                    Actualizar
                  </span>
                }
              />
            </div>
          </div>
        )}

        {/* Modal Confirmar Eliminar */}
        <ConfirmDeleteModal
          show={!!deleteModalPark}
          onConfirm={handleDeletePark}
          onCancel={() => setDeleteModalPark(null)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-green-100 text-center py-6 mt-10">
        <p className="text-sm">
          © 2025 Bosques Urbanos Jalisco – Plataforma de Parques
        </p>
      </footer>
    </div>
  );
}
