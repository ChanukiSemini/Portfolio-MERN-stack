// Central place for the backend API base URL.
// In development, Vite proxies "/api" requests to http://localhost:5000 (see vite.config.js).
// In production, set VITE_API_URL in a .env file to your deployed backend URL.
const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function handleResponse(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Something went wrong" }));
    throw new Error(err.message || "Request failed");
  }
  return res.json();
}

export const getProjects = () =>
  fetch(`${API_BASE}/projects`).then(handleResponse);

export const getProject = (id) =>
  fetch(`${API_BASE}/projects/${id}`).then(handleResponse);

export const createProject = (data) =>
  fetch(`${API_BASE}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const updateProject = (id, data) =>
  fetch(`${API_BASE}/projects/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const deleteProject = (id) =>
  fetch(`${API_BASE}/projects/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
