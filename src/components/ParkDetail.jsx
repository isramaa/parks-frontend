import { useEffect, useState } from "react";
import { getPark } from "../services/api";

export default function ParkDetail({ parkId, onClose }) {
  const [park, setPark] = useState(null);

  useEffect(() => {
    async function fetchPark() {
      const res = await getPark(parkId);
      setPark(res.data);
    }
    fetchPark();
  }, [parkId]);

  if (!park) return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        Cargando...
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-green-700 font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={`https://azuritaa33.sg-host.com/storage/${park.park_img_uri}`}
          alt={park.park_name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold text-green-800 mb-2">{park.park_name}</h2>
        <p className="text-gray-600 mb-1"><b>Dirección:</b> {park.park_address}</p>
        <p className="text-gray-600 mb-1"><b>Ciudad:</b> {park.park_city}</p>
        <p className="text-gray-600 mb-1"><b>Estado:</b> {park.park_state}</p>
        <p className="text-gray-600 mb-1"><b>Código Postal:</b> {park.park_zip_code}</p>
        <p className="text-gray-600 mb-1"><b>Latitud:</b> {park.park_latitude}</p>
        <p className="text-gray-600 mb-1"><b>Longitud:</b> {park.park_longitude}</p>
      </div>
    </div>
  );
}