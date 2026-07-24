import { useEffect, useState } from "react";
import { getProjects } from "../api.js";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="projects-page">
      <div className="card intro-card">
        <h1>Projects</h1>
        <p>Browse my latest work and see the technologies I use to bring ideas to life.</p>
      </div>

      {loading && <p className="status-text">Loading projects...</p>}
      {error && <p className="status-text error">Error: {error}</p>}
      {!loading && !error && projects.length === 0 && (
        <p className="status-text">No projects yet. Add one from the Admin page.</p>
      )}

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="card project-card" key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tag-list">
              {p.technologies.map((t, i) => (
                <span className="tag" key={i}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-link">
                View project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
