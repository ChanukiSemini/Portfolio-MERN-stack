import { useEffect, useState } from "react";
import { getProjects, createProject, updateProject, deleteProject } from "../api.js";

const emptyForm = { title: "", description: "", technologies: "", link: "" };

function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadProjects = () => {
    setLoading(true);
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => setMessage(`Error: ${err.message}`))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      if (editingId) {
        await updateProject(editingId, form);
        setMessage("Project updated successfully.");
      } else {
        await createProject(form);
        setMessage("Project added successfully.");
      }
      resetForm();
      loadProjects();
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
      link: project.link || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      setMessage("Project deleted.");
      loadProjects();
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <section className="admin-page">
      <div className="card">
        <h1>{editingId ? "Update Project" : "Add / Update Project"}</h1>
        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Project Title
            <input
              type="text"
              name="title"
              placeholder="Project title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              placeholder="Short project description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              required
            />
          </label>

          <label>
            Technologies (comma separated)
            <input
              type="text"
              name="technologies"
              placeholder="React, MongoDB, Express"
              value={form.technologies}
              onChange={handleChange}
            />
          </label>

          <label>
            Project Link
            <input
              type="text"
              name="link"
              placeholder="https://github.com/username/project"
              value={form.link}
              onChange={handleChange}
            />
          </label>

          <div className="admin-form-btns">
            <button type="submit" className="btn-primary">
              {editingId ? "Update Project" : "Save Project"}
            </button>
            <button type="button" className="btn-secondary" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
        {message && <p className="status-text">{message}</p>}
      </div>

      <div className="card">
        <h2>Projects</h2>
        {loading && <p className="status-text">Loading...</p>}
        {!loading && projects.length === 0 && <p className="status-text">No projects yet.</p>}

        <div className="admin-list">
          {projects.map((p) => (
            <div className="admin-list-item" key={p._id}>
              <div className="admin-list-header">
                <h3>{p.title}</h3>
                <div className="admin-list-actions">
                  <button className="btn-edit" onClick={() => handleEdit(p)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(p._id)}>Delete</button>
                </div>
              </div>
              <p>{p.description}</p>
              <p className="tech-line">{p.technologies.join(", ")}</p>
              {p.link && <p className="link-line">{p.link}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
