import { useState } from "react";

export default function ParkForm({ initialData = {}, onSubmit, loading, submitLabel = "Guardar" }) {
  const [form, setForm] = useState({
    park_name: initialData.park_name || "",
    park_abbreviation: initialData.park_abbreviation || "",
    park_img_url: initialData.park_img_url || "",
    park_address: initialData.park_address || "",
    park_city: initialData.park_city || "",
    park_state: initialData.park_state || "",
    park_zip_code: initialData.park_zip_code || "",
    park_latitude: initialData.park_latitude || "",
    park_longitude: initialData.park_longitude || "",
    park_img_file: null,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFileChange(e) {
    setForm({ ...form, park_img_file: e.target.files[0] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input name="park_name" value={form.park_name} onChange={handleChange} placeholder="Nombre" className="input" required />
      <input name="park_abbreviation" value={form.park_abbreviation} onChange={handleChange} placeholder="Abreviatura" className="input" required />
      <input name="park_img_url" value={form.park_img_url} onChange={handleChange} placeholder="URL Imagen" className="input" required />
      <input name="park_address" value={form.park_address} onChange={handleChange} placeholder="Dirección" className="input" required />
      <input name="park_city" value={form.park_city} onChange={handleChange} placeholder="Ciudad" className="input" required />
      <input name="park_state" value={form.park_state} onChange={handleChange} placeholder="Estado" className="input" required />
      <input name="park_zip_code" value={form.park_zip_code} onChange={handleChange} placeholder="Código Postal" className="input" required />
      <input name="park_latitude" value={form.park_latitude} onChange={handleChange} placeholder="Latitud" className="input" required />
      <input name="park_longitude" value={form.park_longitude} onChange={handleChange} placeholder="Longitud" className="input" required />
      <div>
        {form.park_img_file && (
          <img
            src={URL.createObjectURL(form.park_img_file)}
            alt="Preview"
            className="mt-2 rounded shadow"
            style={{ width: "120px", height: "80px", objectFit: "cover" }}
          />
        )}
      </div>
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? "Guardando..." : submitLabel}
      </button>
    </form>
  );
}