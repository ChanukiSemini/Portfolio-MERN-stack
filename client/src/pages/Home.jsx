import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="hero-avatar">
        <img src={`${import.meta.env.BASE_URL}my-photo.png`} alt="Chanuki Hettiarachchi" className="hero-avatar-img" />
      </div>
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>
        <h1>Chanuki Hettiarachchi</h1>
        <p className="hero-role">Full Stack Developer &amp; Computer Science Student</p>
        <p className="hero-desc">
          I build thoughtful, interactive, and high-performance web experiences that help businesses grow. 
          My focus is on creating modern interfaces backed by secure, robust backend systems using the MERN stack.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/about" className="btn-secondary">More About Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
