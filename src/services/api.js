const API_URL = "https://azuritaa33.sg-host.com/api/web/v1/parks";

const HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Ambu-Public-Key": "AMBU-T-BXiqUTFtRg8PbWLc-57055915-n59AHW",
  "Ambu-Private-Key": "AMBU-fVN0VyresedITDPm7pvGrjnb2urUxlR0EKsS1qc86T4VEWP6-VFZ4N83UcrKS357V-T"
};

// GET lista de parques
export async function getParks() {
  const res = await fetch(API_URL, { headers: HEADERS });
  return res.json();
}

// GET un parque
export async function getPark(id) {
  const res = await fetch(`${API_URL}/${id}`, { headers: HEADERS });
  return res.json();
}

// POST crear parque
export async function createPark(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return res.json();
}

// PUT actualizar parque
export async function updatePark(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return res.json();
}

// DELETE parque
export async function deletePark(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: HEADERS,
  });
  return res.status;
}
