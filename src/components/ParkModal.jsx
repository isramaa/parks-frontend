import React from "react";

export default function ParkModal({ show, park, onClose, onEdit }) {
  if (!show || !park) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,0.25)",
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
        <button
          className="absolute top-4 right-4 text-green-700 hover:text-green-900 text-2xl font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <div className="flex flex-col items-center">
          <img
            src={`https://azuritaa33.sg-host.com/storage/${park.park_img_uri}`}
            alt={park.park_name}
            className="mb-4 rounded-xl border border-green-200 shadow"
            style={{ width: "220px", height: "140px", objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">{park.park_name}</h2>
          <p className="mb-1 text-gray-700 text-center">{park.park_address}</p>
          <div className="grid grid-cols-2 gap-2 mt-4 w-full">
            <div>
              <span className="font-semibold text-green-700">Ciudad:</span>
              <div className="text-gray-600">{park.park_city}</div>
            </div>
            <div>
              <span className="font-semibold text-green-700">Estado:</span>
              <div className="text-gray-600">{park.park_state}</div>
            </div>
            <div>
              <span className="font-semibold text-green-700">C.P.:</span>
              <div className="text-gray-600">{park.park_zip_code}</div>
            </div>
            <div>
              <span className="font-semibold text-green-700">Abreviatura:</span>
              <div className="text-gray-600">{park.park_abbreviation}</div>
            </div>
            <div>
              <span className="font-semibold text-green-700">Latitud:</span>
              <div className="text-gray-600">{park.park_latitude}</div>
            </div>
            <div>
              <span className="font-semibold text-green-700">Longitud:</span>
              <div className="text-gray-600">{park.park_longitude}</div>
            </div>
          </div>
          <button
            className="mt-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded shadow font-semibold hover:scale-105 transition"
            onClick={() => onEdit(park)}
          >
            Editar Parque
          </button>
        </div>
      </div>
    </div>
  );
}